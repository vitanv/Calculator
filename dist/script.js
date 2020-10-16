"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.clickNumber = function (value) {
            if (!_this.state.solved) {
                var val = '';
                if (_this.state.display.length > 18) {
                    var storeNumber_1 = _this.state.display;
                    _this.setState({
                        display: "MAX DIGITS",
                    });
                    setTimeout(function () {
                        _this.setState({
                            display: storeNumber_1,
                        });
                    }, 1000);
                }
                else {
                    if (_this.state.display == '0') {
                        val = value;
                    }
                    else {
                        val = _this.state.display + value;
                    }
                    _this.setState({
                        display: val,
                    });
                }
            }
            else {
                _this.setState({
                    display: value,
                    formula: "0",
                    solved: false,
                });
            }
        };
        _this.clickAC = function () {
            _this.setState({
                display: "0",
                formula: "0",
                solved: false,
            });
        };
        _this.clickCE = function () {
            _this.setState({
                display: "0",
            });
        };
        _this.clickOperator = function (value) {
            if (!_this.state.solved && _this.state.display != "0") {
                if (_this.state.formula == "0") {
                    _this.setState({
                        formula: _this.state.display + value,
                        display: '0',
                    });
                    console.log(_this.state.formula);
                }
                else {
                    _this.setState({
                        formula: _this.state.formula + _this.state.display + value,
                        display: '0',
                    });
                }
                ;
            }
            else if (_this.state.display != "0") {
                _this.setState({
                    formula: _this.state.display + value,
                    display: '0',
                    solved: false,
                });
            }
            else if (!_this.state.solved && value == "-") {
                _this.setState({
                    display: '-',
                });
            }
        };
        _this.clickEqual = function () {
            if (!_this.state.solved) {
                var val = void 0;
                if (_this.state.display != "0") {
                    val = _this.state.formula + _this.state.display;
                }
                else {
                    val = _this.state.formula.splice(0, -1);
                }
                console.log(eval(_this.state.formula + _this.state.display));
                var solution = eval(_this.state.formula + _this.state.display);
                _this.setState({
                    formula: val,
                    display: solution,
                    solved: true,
                });
            }
            ;
        };
        _this.clickDecimal = function () {
            console.log(_this.state.display.indexOf("."));
            if (_this.state.display.indexOf(".") < 0) {
                _this.setState({
                    display: _this.state.display + ".",
                });
            }
        };
        _this.state = {
            display: '0',
            formula: '0',
            solved: false,
        };
        return _this;
    }
    ;
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "App" },
            React.createElement("div", { className: "container", id: "calculator" },
                React.createElement("div", { className: "display", id: "formula" }, this.state.formula),
                React.createElement("div", { className: "display", id: "display" }, this.state.display),
                React.createElement("button", { className: 'btn', id: "clear", onClick: this.clickAC }, "AC"),
                React.createElement("button", { className: 'btn', id: "delete", onClick: this.clickCE }, "CE"),
                React.createElement("button", { className: 'btn', id: "multiply", value: "*", onClick: function (e) { return _this.clickOperator(e.target.value); } }, "x"),
                React.createElement("button", { className: 'btn', id: "seven", value: "7", onClick: function (e) { return _this.clickNumber(e.target.value); } }, "7"),
                React.createElement("button", { className: 'btn', id: "eight", value: "8", onClick: function (e) { return _this.clickNumber(e.target.value); } }, "8"),
                React.createElement("button", { className: 'btn', id: "nine", value: "9", onClick: function (e) { return _this.clickNumber(e.target.value); } }, "9"),
                React.createElement("button", { className: 'btn', id: "subtract", value: "-", onClick: function (e) { return _this.clickOperator(e.target.value); } }, "-"),
                React.createElement("button", { className: 'btn', id: "four", value: "4", onClick: function (e) { return _this.clickNumber(e.target.value); } }, "4"),
                React.createElement("button", { className: 'btn', id: "five", value: '5', onClick: function (e) { return _this.clickNumber(e.target.value); } }, "5"),
                React.createElement("button", { className: 'btn', id: "six", value: "6", onClick: function (e) { return _this.clickNumber(e.target.value); } }, "6"),
                React.createElement("button", { className: 'btn', id: "add", value: "+", onClick: function (e) { return _this.clickOperator(e.target.value); } }, "+"),
                React.createElement("button", { className: 'btn', id: "one", value: "1", onClick: function (e) { return _this.clickNumber(e.target.value); } }, "1"),
                React.createElement("button", { className: 'btn', id: "two", value: "2", onClick: function (e) { return _this.clickNumber(e.target.value); } }, "2"),
                React.createElement("button", { className: 'btn', id: "three", value: "3", onClick: function (e) { return _this.clickNumber(e.target.value); } }, "3"),
                React.createElement("button", { className: 'btn', id: "divide", value: "/", onClick: function (e) { return _this.clickOperator(e.target.value); } }, "/"),
                React.createElement("button", { className: 'btn', id: "zero", value: "0", onClick: function (e) { return _this.clickNumber(e.target.value); } }, "0"),
                React.createElement("button", { className: 'btn', id: "decimal", value: ".", onClick: this.clickDecimal }, "."),
                React.createElement("button", { className: 'btn', id: "equals", value: "=", onClick: this.clickEqual }, "="))));
    };
    return App;
}(React.Component));
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));