import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }
        this.calculate = this.calculate.bind(this);
        this.clear = this.clear.bind(this);
         //this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        /*this.set.result = 0;
        this.setState({
            result:this.set.result
        });*/
    }

    clear(){
        document.getElementById("textbox1").value = 0;
    }

    changeSign(){

    }

    append(val){
        var val = this.state.result + "" + val;

    }

    numberClicked(value){
        console.log("Number "+value);
    }

    opClicked(value){
        console.log("Operator "+value);
    }

    calculate(){
        console.log(this);
        /*console.log("subtraction "+document.getElementById("btnSub").value);
          var n1 = Number(document.getElementById("textbox1").value);
          var n2 = Number(document.getElementById("textbox2").value);
          var r = 0;
          //var op = document.getElementById("opList").value;

         // console.log(document.getElementById("opList").value);

          axios.get('http://localhost:3001/add', {params: { number1: n1, number2: n2 }
              })
                  .then(response => {
                      this.state.result = response.data.result;
                      this.setState({result:this.state.result});
                      console.log(response.data.result, 'from Node jS!');
                  })
                  .catch(err => {
                      console.log(err, 'No Response from Node JS');
                  });
              this.setState({result:r});
              console.log(this.state.result);*/

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
                                        <input id="textbox1" type="text" defaultValue="0"/>
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
                                        <button id="btn7" value="7" className="btn btn-default" onClick={this.numberClicked(7)}>7</button>
                                        <button id="btn8" value="8" className="btn btn-default" onClick={this.numberClicked(8)}>8</button>
                                        <button id="btn9" value="9" className="btn btn-default" onClick={this.numberClicked(9)}>9</button>
                                        <button id="btnDiv" value="/" className="btn btn-default" onClick={this.opClicked('/')}>/</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="cols-sm-10 col-xs-10 col-md-10 col-sm-offset-4">
                                        <button id="btn4" value="4" className="btn btn-default" onClick={this.numberClicked(4)}>4</button>
                                        <button id="btn5" value="5" className="btn btn-default" onClick={this.numberClicked(5)}>5</button>
                                        <button id="btn6" value="6" className="btn btn-default" onClick={this.numberClicked(6)}>6</button>
                                        <button id="btnMult" value="*" className="btn btn-default" onClick={this.opClicked('*')}>*</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="cols-sm-10 col-xs-10 col-md-10 col-sm-offset-4">
                                        <button id="btn1" value="1" className="btn btn-default" onClick={this.numberClicked(1)}>1</button>
                                        <button id="btn2" value="2" className="btn btn-default" onClick={this.numberClicked(2)}>2</button>
                                        <button id="btn3" value="3" className="btn btn-default" onClick={this.numberClicked(3)}>3</button>
                                        <button id="btnSub" value="-" className="btn btn-default" onClick={this.opClicked('-')}>-</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="cols-sm-10 col-xs-10 col-md-10 col-sm-offset-4">
                                        <button id="btn0" className="btn btn-default" onClick={this.numberClicked(0)}>0</button>
                                        <button id="btnPt" className="btn btn-default" onClick={this.opClicked('.')}>.</button>
                                        <button id="btnAdd"className="btn btn-default" onClick={this.opClicked('+')}>+</button>
                                        <button id="btnEql" className="btn btn-default" onClick={this.opClicked('=')}>=</button>
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