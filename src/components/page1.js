
import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class   extends Component {
    render() {
        return (
            <div>
                Page 1 Go to<Link to="/page-2">Page 2</Link>
            </div>
        )
    }
}

