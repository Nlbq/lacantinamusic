import React, { FunctionComponent } from 'react';
import ProjectList from './pages/project-list';
import ProjectsDetail from './pages/project-detail'
import Navbar from './Navbar/navbar';
import Accueil from './pages/Accueil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
// import Contenu from './components/Contenu/Contenu';
import ThemeContextProvider from './Context/ThemeContext';
import BtnToggle from './components/BtnToggle/BtnToggle';



  
const App: FunctionComponent = () => {

  

 return (
  <Router>
      <div className="App">
      {/* La barre de navigation*/}
        <Navbar />
        <ThemeContextProvider>
          <BtnToggle />
        </ThemeContextProvider>
      {/* Le système de gestion des routes de l'appli*/}
        <Switch>
          <ThemeContextProvider>
          <BtnToggle />
          <Route exact path="/" component={Accueil} />
          <Route exact path="/Accueil" component={Accueil} />
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/:id" component={ProjectsDetail} />         
        </ThemeContextProvider>
        <Route component={PageNotFound} />
          
          
          
        </Switch>
      </div>
  </Router>
 )
}
  
export default App;