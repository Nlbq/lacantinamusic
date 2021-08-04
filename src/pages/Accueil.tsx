import React, { FunctionComponent, useContext } from 'react';
import './Accueil.css';
import { ThemeContext } from '../Context/ThemeContext';

  

const Accueil: FunctionComponent = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'contenu light' : 'contenu dark'}>
      <h1>La Cantina</h1>
          La Cantina est un groupe de musiciens français originaires de Toulouse, membres du collectif Tour de Manège. <br/>
          Genre musical :
          Instrumental, ChillHop, Electronic & Cinematographic Hip-hop depuis 2013.<br/>
          <strong>Page d'accueil en chantier</strong> 
    </div>
    
  );
}
  
export default Accueil;