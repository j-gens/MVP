import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import CurrentArenas from './pages/current-arenas/current-arenas.component.jsx';
import BucketList from './pages/bucket-list/bucket-list.component.jsx';

import './App.css';


const App = () => (
  <>
    <Header />
    <div className='app-bin'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={SignInSignUp} />
        <Route path='/arenas' component={CurrentArenas} />
        <Route path='/list' component={BucketList} />
      </Switch>
    </div>
  </>
);


export default App;
