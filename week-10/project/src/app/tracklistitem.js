'use strict';

var React = require('react');
require('./css/listitems.css');


class MyTrackListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        this.props.onDeleteTrack(this.props.item);
    }

    handleClick(){
        this.props.onTrackListClick(this.props.item);
    }

    render(){
        return(
            <li>
                <div className="myplaylist-item">
                    <span className="item-name" onClick={this.handleClick}>{this.props.item}</span>
                    <span className="item-remove" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
    }

};

module.exports = MyTrackListItem