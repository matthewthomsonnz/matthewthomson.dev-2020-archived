import React from "react"
import styled from "styled-components"

export default class VerticalPositioner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transform: 'translateY(calc(' + 0+ 'px - ' + 0 + 'px))',
            opacity: 0
        }

    }
    verticalAlign(prevState){

        if (prevState.transform !== 'translateY(calc(' + window.innerHeight / 2 + 'px - ' + this.myElement.clientHeight / 2 + 'px))') {
            // console.log("prevState.transform was not equal to calculated, set the state now, this is the old state:", this.state.transform)
            this.setState({ transform: 'translateY(calc(' + window.innerHeight / 2 + 'px - ' + this.myElement.clientHeight / 2 + 'px))' })
            // console.log("and so now this is the new state", this.state.transform)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        document.documentElement.classList[2] === "wf-active" ? this.verticalAlign(prevState) : setTimeout(() => this.verticalAlign(prevState), 200);
        
    }
    componentDidMount(prevProps, prevState) {
        var scope = this
        document.fonts.onloadingdone = function (fontFaceSetEvent) {
            scope.setState({
                transform: 'translateY(calc(' + window.innerHeight / 2 + 'px - ' + scope.myElement.clientHeight / 2 + 'px))',
                opacity: 1
            })
        };


    }
    render() {
        return (
            <Div className="verticalPositioner" style={{ transform: `${this.state.transform}`, opacity: `${this.state.opacity}` }} ref={(input) => { this.myElement = input; }} >
        {/* <h1>Hello, {this.props.name}</h1> */}
                {this.props.children}
        </Div>
        )
    }
}

const Div = styled.div`
max-width: 700px;
margin: 0 auto;
    max-height: 100vh;
    transition: all 0.4s ease;

`;