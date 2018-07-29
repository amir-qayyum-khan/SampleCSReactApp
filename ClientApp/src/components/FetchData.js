import React, { Component } from 'react';
import ListOfCompanies from './ListOfCompanies';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { commonWords: [], loading: true };

    fetch('api/SampleData/ProcessWords')
      .then(response => response.json())
      .then(data => {
        this.setState({ commonWords: data, loading: false });
      });
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
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderCommonWordsTable(this.state.commonWords);

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
