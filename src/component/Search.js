import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." onChange={e => this.props.setKeyWord(e.target.value)}/>
            </div>
        )
    }
}

export default Search
