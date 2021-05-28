import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home'
import TemplatePost from './components/Posts/TemplatePost/TemplatePost'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={TemplatePost} />
        <Route path="/template" component={TemplatePost} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
