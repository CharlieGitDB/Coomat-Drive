import React, { Component } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import './HeaderSearch.css'

class HeaderSearch extends Component {
    onSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="HeaderSearch navbar-form">
                <FormGroup>
                    <FormControl 
                        type="text"
                        ref={input => {this.search = input}}
                        placeholder="Search.."
                    />
                </FormGroup>
            </form>
        )
    }
}

export default HeaderSearch