### The Requirements

Your solution needs to provide the following functionality:

- Identify the five most common words within the Company field</li> 
- Retrieve the source data from the Web API using JavaScript and AJAX technologies.</li> 
- Words should have a length greater than two characters.</li>
- Occur at least once within the set of data;</li>
- Are not considered common words within the English Language, such as "and", "the", "is", etc.</li>
- The page must display the five identified words, together with the respective count of companies that include that word in their name.</li>
- The words should be displayed in descending order by count, with those of equal count ordered alphabetically.</li>


### Changes i made in requirments are:

The change i made in requirment is I am processing the source api on server side. And returning processed data in a GET api. On the frontend
i am consuming that api and displaying that processed data.<br/>
API I made is <a href="https://localhost:5001/api/SampleData/ProcessWords">here</a>.

### Architecture:
- I am using client server architecture.
- Server is a MVC base .net applcation. Which creates declares a API which process company names and extract 5 common names.
- Client side is a node application. Where front end is developed with reactJs and css.
- Client side consumes C# api and display results. There is components to expand list of information and show the actual companies that has selected common word.

### Tool:
visual Studio 2017

### Technologies 
- C#
- reactJs
- NPM
- Using Visual Studio 2017 SPA templates
- Webpack and Babel
- create-react-app

### References:
- https://www.c-sharpcorner.com/article/react-tutorials-day-two-environment-setup/
