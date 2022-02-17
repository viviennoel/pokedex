import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoaderSuspense from './components/LoaderSuspense';
import Header from './components/Header';
import './assets/scss/App.scss';
const Homepage = React.lazy(() => import("./pages/Homepage"));
const Pokemon = React.lazy(() => import("./pages/Pokemon"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <React.Suspense fallback={
      <div>
        <Header></Header>
        <LoaderSuspense></LoaderSuspense>
      </div>
    }>
      
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/pokemon/:pokemonName" component={Pokemon} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
