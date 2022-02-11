import React, {useEffect, useState} from "react";

// export class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log('constructor')
//
//         this.state = {
//             count: 0
//         }
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount')
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log('componentDidUpdate')
//     }
//
//     handleButton = () => {
//         this.setState({ count: this.state.count +1 })
//     }
//
//     render() {
//         console.log('render');
//
//         return (
//             <div>
//                 <span className='counter'>rendered!</span>
//                 <button onClick={this.handleButton}>Parent button</button>
//                 <Child />
//             </div>
//         )
//     }
// }

// class Child extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log('child constructor')
//     }
//
//     componentDidMount() {
//         console.log('child componentDidMount')
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log('child componentDidUpdate')
//     }
//
//     render() {
//         console.log('child render');
//         return (
//             <div>
//                 Children
//             </div>
//         );
//     }
// }

const Counter = (props) => {

    useEffect(() => {

    }, []);


    return (
        <div>
            <span className={'counter'}>{props.count}</span>
        </div>
    )
}

export default Counter
