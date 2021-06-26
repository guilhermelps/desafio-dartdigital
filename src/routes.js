import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header';
import FirstChallenge from './pages/FirstChallenge';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={FirstChallenge} />
      <Route exact path="/repositories" component={Repository} />
    </BrowserRouter>
  )
}