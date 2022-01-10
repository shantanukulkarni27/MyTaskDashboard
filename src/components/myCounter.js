import React  from "react";

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0,
            counts:0
        }

    }

    increment(){
        this.setState({
            count:this.state.count+1
        })
    }

   decrement(){
       this.setState({count:this.state.count-1})
   }
   
   Reset(){
       this.setState({count:0,counts:0})
   }

   componentDidMount() {
    setInterval(() => this.setState({ counts: this.state.counts+1 }), 1000);
  }

    render(){
        return(
     <>
     <br/><br/>
      <button onClick={()=>this.increment()} >increment</button>
      <h1>{this.state.count}</h1>
      <button onClick={()=>this.decrement()} >decrement</button>
      <p>{this.state.counts}</p>
      <button onClick={()=>this.Reset()}>Reset</button>
     </>

        )
    }
}

export default Counter;