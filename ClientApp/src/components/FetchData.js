import React, { Component } from 'react';
import { connect } from "react-redux"
import ListOfCompanies from './ListOfCompanies';
import { getCommonWords, setDialogVisibility } from '../actions/index';

export class FetchData extends Component {
  displayName = FetchData.name

  props: {
    companyVisibility: Object,
    commonWordReducer: Object,
    dispatch: Function
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.setCompaniesVisibility(false, null);
    dispatch(getCommonWords());
  }

  setCompaniesVisibility = (visible, word) => {
    const { dispatch } = this.props;
    dispatch(
      setDialogVisibility({
        visible: visible,
        word: word
      })
    );
  }

  renderCommonWordsTable =(commonWords) => {
    const { companyVisibility } = this.props;
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Word</th>
            <th>Count</th>
            <th>Companies</th>
          </tr>
        </thead>
        <tbody>
          {commonWords.map(commonWord =>
            <tr key={commonWord.word}>
              <td>{commonWord.word}</td>
              <td>{commonWord.count}</td>
              <td>
                <ListOfCompanies 
                  wordkey={commonWord.word}  
                  companyVisibility={companyVisibility}  
                  list={commonWord.companies}
                  setCompaniesVisibility={this.setCompaniesVisibility} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    const { 
      commonWordReducer: {
        loading = true,
        commonWords = [],
        errorInfo = null
      } 
    } = this.props;    
    let contents = loading ? <p><em>Loading...</em></p>
      : this.renderCommonWordsTable(commonWords);

    return (
      <div>
        <h1>Common words within the Company field</h1>
        <p>
            Identify the five most common words within the Company field from data set <a 
            href="http://profiler.markinson.com.au/api/Customer">Customer API</a>
        </p>
        {contents}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  commonWordReducer: state.commonWordReducer,
  companyVisibility: state.companyVisibility  
})

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchData)
