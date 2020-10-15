function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "clickNumber",






    value => {
      if (!this.state.solved) {
        let val = '';
        if (this.state.display.length > 18) {
          let storeNumber = this.state.display;
          this.setState({
            display: "MAX DIGITS" });

          setTimeout(() => {
            this.setState({
              display: storeNumber });
          }, 1000);
        } else {
          if (this.state.display == '0') {
            val = value;
          } else {
            val = this.state.display + value;
          }
          this.setState({
            display: val });
        }
      } else {
        this.setState({
          display: value,
          formula: "0",
          solved: false });

      }
    });_defineProperty(this, "clickAC",
    () => {
      this.setState({
        display: "0",
        formula: "0",
        solved: false });

    });_defineProperty(this, "clickCE",
    () => {
      this.setState({
        display: "0" });

    });_defineProperty(this, "clickOperator",
    value => {
      if (!this.state.solved) {
        if (this.state.formula == "0") {
          this.setState({
            formula: this.state.display + value,
            display: '0' });


        } else {
          this.setState({
            formula: this.state.formula + this.state.display + value,
            display: '0' });

        };
      }

    });_defineProperty(this, "clickEqual",
    () => {
      if (!this.state.solved) {
        console.log(eval(this.state.formula + this.state.display));
        this.setState({
          formula: this.state.formula + this.state.display,
          display: eval(this.state.formula + this.state.display),
          solved: true });

      };
    });this.state = { display: '0', formula: '0', solved: false };}
  render() {
    return (
      React.createElement("div", { className: "App" },
      React.createElement("div", { className: "container", id: "calculator" },
      React.createElement("div", { className: "display", id: "formula" }, this.state.formula),
      React.createElement("div", { className: "display", id: "display" }, this.state.display),
      React.createElement("button", { className: "btn", id: "clear", onClick: this.clickAC }, "AC"),
      React.createElement("button", { className: "btn", id: "delete" }, "CE"),
      React.createElement("button", { className: "btn", id: "multiply", value: "*" }, "x"),
      React.createElement("button", { className: "btn", id: "seven", value: "7", onClick: e => this.clickNumber(e.target.value) }, "7"),
      React.createElement("button", { className: "btn", id: "eight", value: "8", onClick: e => this.clickNumber(e.target.value) }, "8"),
      React.createElement("button", { className: "btn", id: "nine", value: "9", onClick: e => this.clickNumber(e.target.value) }, "9"),
      React.createElement("button", { className: "btn", id: "subtract", value: "-" }, "-"),
      React.createElement("button", { className: "btn", id: "four", value: "4", onClick: e => this.clickNumber(e.target.value) }, "4"),
      React.createElement("button", { className: "btn", id: "five", value: "5", onClick: e => this.clickNumber(e.target.value) }, "5"),
      React.createElement("button", { className: "btn", id: "six", value: "6", onClick: e => this.clickNumber(e.target.value) }, "6"),
      React.createElement("button", { className: "btn", id: "add", value: "+", onClick: e => this.clickOperator(e.target.value) }, "+"),
      React.createElement("button", { className: "btn", id: "one", value: "1", onClick: e => this.clickNumber(e.target.value) }, "1"),
      React.createElement("button", { className: "btn", id: "two", value: "2", onClick: e => this.clickNumber(e.target.value) }, "2"),
      React.createElement("button", { className: "btn", id: "three", value: "3", onClick: e => this.clickNumber(e.target.value) }, "3"),
      React.createElement("button", { className: "btn", id: "divide", value: "/" }, "/"),
      React.createElement("button", { className: "btn", id: "zero", value: "0", onClick: e => this.clickNumber(e.target.value) }, "0"),
      React.createElement("button", { className: "btn", id: "decimal", value: "." }, "."),
      React.createElement("button", { className: "btn", id: "equals", value: "=", onClick: this.clickEqual }, "="))));




  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('root'));