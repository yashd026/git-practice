import React, { Component } from 'react'

export default class test3 extends Component {
    constructor(props) {
        super(props);
    }
    static getDerivedStateFromProps(props, state) {
        return null;
    }
    componentDidMount() {
        console.log('test3')
    }
    shouldComponentUpdate() {
        return true;
    }
    render() {
        return (
            <div>test3</div>
        )
    }
}
