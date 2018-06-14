import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/main';
import { Category } from './components/category';
import { Modify } from './components/modify';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/category" component={Category} />
					<Route path="/modify" component={Modify} />
				</Switch>
			</div>
		);
	}
}

export default App;
