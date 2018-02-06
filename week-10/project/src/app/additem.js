'use strict';

var React = require('react');
require('./css/form.css');

class AddItem extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value)
    }

    render(){
        return(
            <form id="add-playlist" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem" />
                <input type="submit" value="Add playlist" />
            </form>
        );
    }
}

module.exports = AddItem;