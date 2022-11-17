import './../styles/header.css'
import React from "react";

function clicked(event){
    console.log('Hey there!',event.target.className);
}

class HeaderClass extends React.Component {
    
    state={
        counter:0
    }


    addcounter=()=>{
        let localcounter = this.state.counter;
        this.setState({
            counter:localcounter+1
        })
    }

    resetcounter=()=>{
        
        this.setState({
            counter:0
        })
    }



    render(){
        {
            return(
                <React.Fragment>
                <h1>HELLO</h1>
                <h1 className="heade">Heading external style</h1>
                <h1>Adding class dynamically</h1>
                <button  onClick={clicked}>Click me</button>
                <hr></hr>
                <button onClick={this.addcounter}>ADD</button>
                <h1>Counter is {this.state.counter}</h1><button onClick={this.resetcounter}>Reset</button>
                
                </React.Fragment>
            )
        }
    }

}

export default HeaderClass;