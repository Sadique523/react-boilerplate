
import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Page2 extends Component {
    render() {
        return (
            <div>
                Go to <Link to="/">Page 1</Link> Page 2
            </div>
        )
    }
}
