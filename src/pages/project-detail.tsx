import React, { FunctionComponent, useState, useEffect ,useContext } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Project from '../models/project';
import PROJECTS from '../models/mock-project';
import './project-detail.css';
import { ThemeContext } from '../Context/ThemeContext';


  
type Params = { id: string };
  
const ProjectsDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [project, setProject] = useState<Project|null>(null);
  const {theme} = useContext(ThemeContext);
  
  useEffect(() => {
    PROJECTS.forEach(project => {
      if (match.params.id === project.id.toString()) {
        setProject(project);
      }
    })
  }, [match.params.id]);
    
  return (
    <div className={theme ? 'contenu light' : 'contenu dark'}>
      { project ? (
        <div className="row">
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ project.name }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
                <img src={project.picture} alt={project.name} style={{width: '250px', margin: '0 auto'}}/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr> 
                        <td>Nom:</td> 
                        <td><strong>{ project.name }</strong></td> 
                      </tr>
                      <tr> 
                        <td>Songs:</td> 
                        <td>
                          {project.songs.map(song => (
                           <span key={song} >{song}<br/></span>
                          ))}</td> 
                      </tr> 
                      <tr> 
                        <td>Date de sortie:</td> 
                        <td>{project.created}</td> 
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/projects">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center">Aucun projet à afficher !</h4>
      )}
    </div>
  );
}
  
export default ProjectsDetail;