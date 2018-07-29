import React, { Component } from 'react';
import Dialog from 'react-dialog';

export default class ListOfCompanies extends Component {
  displayName = ListOfCompanies.name

  constructor(props) {
    super(props);
    this.state = { isDialogOpen: false};
  }

  openDialog = () => this.setState({ isDialogOpen: true })
 
  handleClose = () => this.setState({ isDialogOpen: false })

  render() {
    const { list = []} = this.props;
    const companiesList = list.map(element => <li>{element}</li>);
    return (
      <div> 
        <button type="button" onClick={this.openDialog}>Open List</button>  
        {
          this.state.isDialogOpen &&
          <Dialog
            title="List Of Comapnies"
            modal={true}
            onClose={this.handleClose}
            buttons={
              [{
                 text: "Close",
                 onClick: () => this.handleClose()
              }]
            }>
              <ul>{companiesList}</ul>
              <br/>
          </Dialog>
        }
      </div>
    );
  }
}
