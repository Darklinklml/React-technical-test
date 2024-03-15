import logo from './logo.svg';
import './App.css';
import {createRef, useState} from "react";





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
                <div className="Counter-Square">
                        <div className={"Counter-Square-Title"}>Counter Start</div><br/>
                        <input
                            className={"rounded-border"}
                            id={"contador-inicial-input"}
                            value={inputValue}
                            onChange={onHandledInputChange}
                            type={"number"}/>

                </div>
                <div className="Set-Square">
                <button className={"Set-Button rounded-border"} onClick={()=>initContador()}>
                        Set
                    </button>
                </div>
                <div className="Plus-Square">
                    <button className={"Plus-Button rounded-border"} onClick={()=> increment()} >+</button>
                </div>
            </div>
            <div className={"Blue-Box"}></div>
        </div>
    );
}

export default App;
