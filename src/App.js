import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home'
import TemplatePost from './components/Posts/TemplatePost/TemplatePost'
import TutorialPythonIntro from './pages/tutorials/python/tutorial/TutorialPythonIntro'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={TutorialPythonIntro} />
        <Route path="/template" component={TemplatePost} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
