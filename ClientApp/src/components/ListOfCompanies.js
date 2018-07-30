import React, { Component } from 'react';
import Dialog from 'react-dialog';

export default class ListOfCompanies extends Component {
  displayName = ListOfCompanies.name

  props: {
    companyVisibility: Object,
    setCompaniesVisibility: Function,
    list: Array
  }

  renderList = (companiesList) => {
    const { 
      companyVisibility: { visible, word } = {
        visible: false,
        word: null
      },
      setCompaniesVisibility,
      wordkey  
    } = this.props;

    if (visible && wordkey === word) {
       return (
          <Dialog
            title="List Of Comapnies"
            modal={true}
            onClose={() => setCompaniesVisibility(false, wordkey)}
            buttons={
              [{
                 text: "Close",
                 onClick: () => setCompaniesVisibility(false, wordkey)
              }]
            }>
              <ul>{companiesList}</ul>
              <br/>
          </Dialog>
       );
    }
  }  

  render() {
    const { 
      list = [],
      setCompaniesVisibility,
      wordkey  
    } = this.props;

    const companiesList = list.map(element => <li>{element}</li>);
    return (
      <div> 
        <button type="button" onClick={() => setCompaniesVisibility(true, wordkey)}>Open List</button>  
        {this.renderList(companiesList)}
      </div>
    );
  }
}
