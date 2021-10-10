import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            URL: ''
          };
    }

    /*
    when the input field is changed and if the id of the input field is `name`
    change the state of `name` to the current value of `name`
    if not
    change the state of `URL` to the current value of `URL`
    */
    handleChange = event => {

            if (event.target.id === 'name') {
                this.setState({ name: event.target.value })
              } else {
                this.setState({ URL: event.target.value })
              }
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        console.log(document.getElementById("name").value)
        console.log(document.getElementById("URL").value)
        this.props.addInfomations(this.state)
        this.setState ={
            name: "",
            URL: ""
        }
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            <form  onSubmit={this.onFormSubmit} >
                <label for="name"/>Name<br></br>
                <input type="text" id="name" onChange={this.handleChange} value={this.state.name}/>  <br></br>
                <label for="lname">Url</label><br></br>
                <input type="text" id="URL" onChange={this.handleChange} value={this.state.URL}/> <br></br>
                <input type="submit" value="Submit" ></input>
            </form>
        )
    
    }
}

export default Form;
