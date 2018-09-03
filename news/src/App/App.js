import React from 'react';

import '../common/style/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';


const App = () => (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
)


export default App;
