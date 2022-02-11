import './App.scss';
import React, {useEffect, useState} from "react";
import Example from "./Example";

const listInitial = [
    {
        text: 'первый',
        author: 'me'
    },
    {
        text: 'второй',
        number: 8
    }, {
        text: "третий",
        author: 'bot'
    }
    ];

function App(props) {
    const [list, setList] = useState(listInitial)

    useEffect(()=>{

    }, [list]);

    return (
        <>
            <header
                className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}
                style={{top: props.topPosition || '10px'}}>
                My SUPER puper app!
                <h3>MyName: {props.myName}</h3>

                <>Наш массив:
                    <ul>
                        {list.map((item, index) => (
                            <li>
                                text: {item.text}<br/>
                                number: {item.number}
                                <hr/>
                            </li>
                        ))}
                    </ul>
                </>
                <Example/>
            </header>
        </>
    );
}

export default App;
