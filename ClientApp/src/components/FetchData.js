import React, { Component } from 'react';
import { connect } from "react-redux"
import ListOfCompanies from './ListOfCompanies';
import { getCommonWords } from '../actions/index';

export class FetchData extends Component {
  displayName = FetchData.name

  props: {
    commonWordReducer: Object,
    dispatch: Function
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCommonWords());
  }

  static renderCommonWordsTable(commonWords) {
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
              <td><ListOfCompanies list={commonWord.companies} /></td>
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
      : FetchData.renderCommonWordsTable(commonWords);

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
})

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchData)
