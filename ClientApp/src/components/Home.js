import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
        <div>
            <h1>The Requirements</h1>
            <p>Your solution needs to provide the following functionality:</p>
            <ul>
                <li>Identify the five most common words within the Company field</li> 
                <li>Retrieve the source data from the Web API using JavaScript and AJAX technologies.</li> 
                <li>Words should have a length greater than two characters.</li>
                <li>Occur at least once within the set of data;</li>
                <li>Are not considered common words within the English Language, such as "and", "the", "is", etc.</li>
                <li>The page must display the five identified words, together with the respective count of companies that include that word in their name.</li>
                <li>The words should be displayed in descending order by count, with those of equal count ordered alphabetically.</li>
            </ul>
            <br/>
            <h3>Changes i made in requirments are:</h3>
            <p>
            The change i made in requirment is I am processing the source api on server side. And returning processed data in a GET api. On the frontend
            i am consuming that api and displaying that processed data.<br/>
            API I made is <a href="https://localhost:5001/api/SampleData/ProcessWords">here</a>.
            </p>
        </div>
    );
  }
}
