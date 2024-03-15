import logo from './logo.svg';
import './App.css';
import {createRef, useState} from "react";
import './Components/Square';
import Square from "./Components/Square";



function App() {

    const [contador, setContador] = useState(0)

    const [inputValue, setInputValue] = useState(0)

    function initContador(){
        setContador(inputValue)
    }

    function increment (){
        setContador(contador + 1)
    }

    function onHandledInputChange(e){
        setInputValue(parseInt(e.target.value))
    }

    return (
        <div className="App-Container">
            <div className="Top-Container">
                <h1 className="Text-Test-Box">
                    Test text
                </h1>

                <div className="Counter-Box">{contador}</div>
            </div>
            <div className="Square-Container">
                <Square tema={{
                    backgroundColor: "chartreuse"
                }
                }>
                    <div>
                        <div
                            className={"Counter-Square-Title"}
                        >Counter Start
                        </div>
                        <input
                            className={"rounded-border border-0"}
                            value={inputValue}
                            onChange={onHandledInputChange}
                            type={"number"}/>
                    </div>
                </Square>
                <Square tema={{
                    backgroundColor: "darkblue"
                }}>
                    <button className={"Set-Button rounded-border border-0"} onClick={() => initContador()}>Set</button>
                </Square>
                <Square tema={{
                    backgroundColor: "red"
                }}>
                    <button className={"Plus-Button rounded-border border-0"} onClick={()=> increment()} >+</button>
                </Square>
            </div>
            <div className={"Blue-Box"}></div>
        </div>
    );
}

export default App;
