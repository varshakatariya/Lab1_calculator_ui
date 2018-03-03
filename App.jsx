import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.initialize();
        this.calculate = this.calculate.bind(this);
        this.clear = this.clear.bind(this);
        this.numberClicked = this.numberClicked.bind(this);
        this.opClicked = this.opClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    initialize(){
        this.state = {
            numberClicked:0,
            number:[],
            firstNumber:0,
            secondNumber:0,
            operator:'',
            result: 0,
            sign:'',
            displayValue: 0
        }
    }

    handleChange(event) {
        this.state.displayValue = event.target.value;
        this.setState({displayValue: this.state.displayValue});
    }

    clear(){
        this.initialize();
    }

    changeSign(){

    }

    setFirstNumber(first) {
        if (this.state.firstNumber == 0) {
            this.initialize();
            this.state.firstNumber = first;
        }
        else {
            first = this.state.firstNumber + "" + first;
        }
        console.log("state first number : "+this.state.firstNumber);
        this.state.firstNumber = first;
        this.setState({
            firstNumber: this.state.firstNumber
        });
        this.state.displayValue = this.state.firstNumber;
        this.setState({
            displayValue: this.state.displayValue
        });
        console.log("this.state.firstNumber "+this.state.firstNumber);
    }

    setSecondNumber(sec){

        if(this.state.secondNumber == 0 )
            this.state.secondNumber = sec;
        else {
            sec = this.state.secondNumber + "" + sec;
        }
        console.log("state first number : "+this.state.secondNumber);

        this.state.secondNumber = sec;
        this.setState({
            secondNumber: this.state.secondNumber
        });
        this.state.displayValue = this.state.secondNumber;
        this.setState({
            displayValue: this.state.displayValue
        });
        console.log("this.state.secondNumber "+this.state.secondNumber);
    }

    numberClicked(event){

        if(this.state.operator == ""){
            this.setFirstNumber(event.target.value);
        }
        else{
            this.setSecondNumber(event.target.value);
        }
    }

    opClicked(event){
        console.log("Operator " + event.target.value);

        if(event.target.value == "="){
            this.calculate();
        }else {
            if(event.target.value =="+")
                this.state.operator = "add";
            else if(event.target.value =="-")
                this.state.operator = "sub";
            else if(event.target.value =="*")
                this.state.operator = "mult";
            else if(event.target.value =="/")
                this.state.operator = "div";
            this.setState({
                operator: this.state.operator
            });
        }

    }

    calculate(){
        console.log(this.state.operator);

          var n1 = Number(this.state.firstNumber);
          var n2 = Number(this.state.secondNumber);
          var r = 0;
          var op = this.state.operator;

         console.log(this.state.operator);

             axios.get('http://localhost:3001/', {
                 params: {number1: n1, number2: n2, operator: op}
             })
                 .then(response => {
                     r = response.data.result;
                     console.log(r, 'from Node jS!' + this.state.operator + "operator");
                     console.log(r+"r : ")
                     this.state.result = r;
                     this.setState({result: this.state.result});
                     console.log(this.state.result +"this.state.result");
                     document.getElementById("textbox1").value = this.state.result;
                     this.state.displayValue = this.state.result;
                     this.setState({
                         displayValue: this.state.result
                     });
                 })
                 .catch(err => {
                     console.log(err, 'No Response from Node JS');
                 });
    }
    render() {
        return (
                <div className="container">
                    <br/><br/><br/><br/>
                    <div className="form-group">
                        <div className="well table-bordered">
                            <div className="row align-items-center">
                                <div className="row">
                                    <div className="cols-sm-10 col-xs-10 col-md-10 col-sm-offset-4">
                                        <input id="textbox1" type="text" value={this.state.displayValue} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="cols-sm-10 col-xs-10 col-md-10 col-sm-offset-4">
                                        <button id="btnClr" value="C" className="btn btn-default" type="button" onClick={this.clear}> C </button>
                                        <button id="btnSign" value="+-" className="btn btn-default" type="button" onClick={this.changeSign('-')}> +- </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="cols-sm-10 col-xs-10 col-md-10 col-sm-offset-4">
                                        <button id="btn7" value="7" className="btn btn-default" onClick={this.numberClicked}>7</button>
                                        <button id="btn8" value="8" className="btn btn-default" onClick={this.numberClicked}>8</button>
                                        <button id="btn9" value="9" className="btn btn-default" onClick={this.numberClicked}>9</button>
                                        <button id="btnDiv" value="/" className="btn btn-default" onClick={this.opClicked}>/</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="cols-sm-10 col-xs-10 col-md-10 col-sm-offset-4">
                                        <button id="btn4" value="4" className="btn btn-default" onClick={this.numberClicked}>4</button>
                                        <button id="btn5" value="5" className="btn btn-default" onClick={this.numberClicked}>5</button>
                                        <button id="btn6" value="6" className="btn btn-default" onClick={this.numberClicked}>6</button>
                                        <button id="btnMult" value="*" className="btn btn-default" onClick={this.opClicked}>*</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="cols-sm-10 col-xs-10 col-md-10 col-sm-offset-4">
                                        <button id="btn1" value="1" className="btn btn-default" onClick={this.numberClicked}>1</button>
                                        <button id="btn2" value="2" className="btn btn-default" onClick={this.numberClicked}>2</button>
                                        <button id="btn3" value="3" className="btn btn-default" onClick={this.numberClicked}>3</button>
                                        <button id="btnSub" value="-" className="btn btn-default" onClick={this.opClicked}>-</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="cols-sm-10 col-xs-10 col-md-10 col-sm-offset-4">
                                        <button id="btn0" value="0" className="btn btn-default" onClick={this.numberClicked}>0</button>
                                        <button id="btnPt" value="." className="btn btn-default" onClick={this.opClicked}>.</button>
                                        <button id="btnAdd" value="+" className="btn btn-default" onClick={this.opClicked}>+</button>
                                        <button id="btnEql" value="=" className="btn btn-default" onClick={this.opClicked}>=</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}
export default App;