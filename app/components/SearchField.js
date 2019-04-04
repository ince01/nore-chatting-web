import React from 'react';
import './style.css'

class SearchField extends React.Component {
    render () {
        console.log ('ssssss   ')
        return (
            <div className="form-group">
                <form className="form-group has-search inner-addon left-addon">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search.." name="search"/> 
                </form>
            </div>
        )
    }
}

export default SearchField 