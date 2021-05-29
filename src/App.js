import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home'
import PythonIntro from './pages/tutorials/python/tutorial/PythonIntro'
import PythonHelloWorld from './pages/tutorials/python/tutorial/PythonHelloWorld'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* Python Tutorial */}
        <Route path="/tutorials/python/intro" component={PythonIntro} />
        <Route path="/tutorials/python/hello-world" component={PythonHelloWorld} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
