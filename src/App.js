import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
