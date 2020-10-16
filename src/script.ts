class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display:'0',
      formula:'0',
      solved:false,
    }
  };
  clickNumber = (value) =>{
    if(!this.state.solved){
      let val='';
      if(this.state.display.length>18){
        let storeNumber = this.state.display;
        this.setState({
        display:"MAX DIGITS",
        });
        setTimeout(() => { 
          this.setState({
            display:storeNumber,}); 
        }, 1000);
        }else{
          if(this.state.display == '0'){
            val = value;
          }else{
            val = this.state.display+value;
          }
          this.setState({
            display:val,
          });}
    }else{
      this.setState({
        display:value,
        formula:"0",
        solved:false,
      })
    }
  };
  clickAC = () => {
    this.setState({ 
      display: "0",
      formula: "0",
      solved:false,
    });
  };
  clickCE = () => {
    this.setState({ 
      display: "0",
    });
  };
  clickOperator = (value) => {
    if(!this.state.solved && this.state.display != "0"){
      if(this.state.formula == "0"){
      this.setState({
        formula: this.state.display + value,
        display:'0',
      });
      console.log(this.state.formula);
    }else{
      this.setState({
        formula: this.state.formula+this.state.display + value,
        display:'0',
      });
    }; 
    }else if(this.state.display != "0"){
      this.setState({
        formula: this.state.display+value,
        display:'0',
        solved:false,
      });
    }else if(!this.state.solved && value=="-"){
      this.setState({
        display:'-',
      });
    }
    
  };
  clickEqual = () =>{
    if(!this.state.solved){
      let val
      if(this.state.display != "0"){
        val = this.state.formula+this.state.display;
      }else{
        val = this.state.formula.splice(0,-1);
      }
      console.log(eval(this.state.formula+this.state.display));
      let solution =  eval(this.state.formula+this.state.display);
      this.setState({
        formula:val,
        display:solution,
        solved:true,
    }); 
    };   
  }
  clickDecimal = () =>{
    console.log(this.state.display.indexOf("."));
    if(this.state.display.indexOf(".")<0){
      this.setState({
        display:this.state.display+".",
      })
    }
  }
  render(){
    return(
      <div className="App">
        <div className="container" id="calculator">
          <div className="display"  id="formula">{this.state.formula}</div>
          <div className="display"  id="display">{this.state.display}</div>
            <button className='btn' id="clear" onClick={this.clickAC}>AC</button>
            <button className='btn' id="delete" onClick={this.clickCE}>CE</button>
            <button className='btn' id="multiply" value="*"onClick = {(e)=>this.clickOperator(e.target.value)}>x</button>
            <button className='btn' id="seven" value="7" onClick = {(e)=>this.clickNumber(e.target.value)}>7</button>
            <button className='btn'id="eight" value="8" onClick = {(e)=>this.clickNumber(e.target.value)}>8</button>
            <button className='btn' id="nine" value="9" onClick = {(e)=>this.clickNumber(e.target.value)}>9</button>
            <button className='btn' id="subtract" value="-" onClick = {(e)=>this.clickOperator(e.target.value)}>-</button>
            <button className='btn' id="four" value="4" onClick = {(e)=>this.clickNumber(e.target.value)}>4</button>
            <button className='btn' id="five" value='5' onClick = {(e)=>this.clickNumber(e.target.value)}>5</button>
            <button className='btn'id="six" value="6" onClick = {(e)=>this.clickNumber(e.target.value)}>6</button>
            <button className='btn' id="add" value="+" onClick = {(e)=>this.clickOperator(e.target.value)}>+</button>
            <button className='btn' id="one" value="1" onClick = {(e)=>this.clickNumber(e.target.value)}>1</button>
            <button className='btn' id="two" value="2" onClick = {(e)=>this.clickNumber(e.target.value)}>2</button>
            <button className='btn'id="three" value="3" onClick = {(e)=>this.clickNumber(e.target.value)}>3</button>
            <button className='btn' id="divide" value="/" onClick = {(e)=>this.clickOperator(e.target.value)}>/</button>
            <button className='btn' id="zero" value="0" onClick = {(e)=>this.clickNumber(e.target.value)}>0</button>
            <button className='btn' id="decimal" value="." onClick={this.clickDecimal}>.</button>
            <button className='btn' id="equals" value="=" onClick={this.clickEqual}>=</button>
        </div>
       </div>
      
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));