import React, { Component } from 'react'
import Loader from '../components/Loader.js'

export default class landing extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>

                <h3>This is my new website! However, it's still in development, so please be patient.</h3>

                <Loader />
            </div>
        )
    }
}
