'use strict';

var React = require('react');
require('./css/listitems.css');


class MyPlayListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        this.props.onDelete(this.props.item);
    }

    render(){
        return(
            <li>
                <div className="myplaylist-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-remove" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
    }

};

module.exports = MyPlayListItem