import React, { Component } from 'react';
import * as API from '../services/api';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {categories: []};
        this.getCategories();
    }
    getCategories() {
        API.getCategories().then((categories) => {
            this.setState({categories});
            return true;
        })
    }

    renderCategories = () => {
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