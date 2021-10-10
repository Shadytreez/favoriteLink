import React from 'react'
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      favLinks:[]
    };
  }

  /*
  When the remove button is clicked update the favLinks state 
  Remake the favLinks without the index that was clicked
  */
  handleRemove = (index) => {
            this.setState(prevState => ({
              favLinks: prevState.favLinks.filter((link, idx) => idx !== index)
            }))
  }

 /*
  update this.state.favLinks by adding the favLink to the end of the this.state.favLinks array
  and set theState of the result of the new favLink
  */
  handleSubmit = (favLink) => {
            this.setState({ favLinks: [...this.state.favLinks, favLink] })
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table linkData={this.state.favLinks} removeLink={this.handleRemove} />
        <br />

        <h3>Add New</h3>
        <Form addInfomations={this.handleSubmit} />
      </div>
    )
  }
}

export default LinkContainer
