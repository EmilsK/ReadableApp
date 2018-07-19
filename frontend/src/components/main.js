import React, { Component } from 'react';
import * as API from '../services/api';
import getCategories from "../actions/index";

export class Main extends Component {
    constructor(props) {
        super(props);
        //const store = this.props.store;
        //store.dispatch(getCategories(this.props.store.getState(), ["test","test2"]));
        //this.getCategories();
    }
    getCategories() {
        API.getCategories().then((categories) => {
            this.setState({categories});
            return true;
        })
    }

    renderCategories = () => {
        return "";
        let retValues: any[] = [];
        if(this.state.categories.length !== 0) {
            this.state.categories.map((category) => {
                retValues.push(<div key={category.name}>{category.name}</div>);
                return true;
            });
        }    
        return retValues;
    }

    render() {
        return <div>{this.renderCategories()}</div>;
    }
}