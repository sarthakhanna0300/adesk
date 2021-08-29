import './App.css';
import Header from './component/header-component/header';
import Signup from './component/sign-up-component/sign-up';
import Login from './component/login-component/login';
import Homepage from './component/homepage-component/homepage';
import SingleAdv from './component/single-ad-component/single-ad';
import Create from './component/create-component/create'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/create" exact component={Create}/>
          <Route path="/adv/:id" exact component={SingleAdv}/>
          <Route path={'/signup'} exact  component={Signup}></Route>
          <Route path={'/login'} exact  component={Login}></Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
