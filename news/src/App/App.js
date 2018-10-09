import React, {Component} from 'react';

import '../common/style/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import {Route} from 'react-router-dom'




class App extends Component {


  

    render() {
		return (
			<div>
				<Header
				/>
				<Route  path="/" component={Main}/>
				<Footer/>
			
			</div>
		)
	}

}


export default App;
