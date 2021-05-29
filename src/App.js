import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home'

//PythonTutorials
import PythonIntro from './pages/tutorials/python/tutorial/PythonIntro'
import PythonHelloWorld from './pages/tutorials/python/tutorial/PythonHelloWorld'
import PythonVariables from './pages/tutorials/python/tutorial/PythonVariables'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* Python Tutorial */}
        <Route path="/tutorials/python/intro" component={PythonIntro} />
        <Route path="/tutorials/python/hello-world" component={PythonHelloWorld} />
        <Route path="/tutorials/python/variables" component={PythonVariables} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
