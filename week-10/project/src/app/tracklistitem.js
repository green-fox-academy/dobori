'use strict';

var React = require('react');
require('./css/listitems.css');


class MyTrackListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onTrackListClick(this.props.item);
    }

    render(){
        return(
            <li>
                <div className="myplaylist-item">
                    <span className="item-name" onClick={this.handleClick}>{this.props.item}</span>
                    
                </div>
            </li>
        );
    }

};

module.exports = MyTrackListItem