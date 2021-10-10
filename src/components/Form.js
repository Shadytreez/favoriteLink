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
                this.setState({ 
                    name: event.target.value
                 })
                 console.log(this.state.name)
              } else {
                this.setState({ 
                    URL: event.target.value
                 })
                 console.log(this.state.URL)
              }
    }

    /*
    when the form is submitted
    the code will get the state (containing URL and name value) and run handleSubmit() from LinkContainer (senting the data to be added to favLinks)
    then we reset the value of the state, so if we press submit again without any data, it wont sent the past data from the pervious sumbit
    */
    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        //console.log(document.getElementById("name").value)
        //console.log(document.getElementById("URL").value)
        if(document.getElementById("name").value.trim() !== "" && document.getElementById("URL").value.trim() !== ""){
            this.props.addInfomations(this.state)
            const name = ""
            const URL = ""
            this.setState ( {
            name: name,
            URL: URL
            })
            console.log("namer " + this.state.name)
            document.getElementById("name").value = ""
            document.getElementById("URL").value = ""
        }else{
            alert("Make sure all field is not empty");
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
