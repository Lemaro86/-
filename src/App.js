import './App.scss';

function App(props) {

    return (
        <div>
            <header
                className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}
                style={{ top: props.topPosition || '10px' }}>
                My SUPER puper app!
                <h3>MyName: {props.myName}</h3>
            </header>
        </div>
    );
}

export default App;
