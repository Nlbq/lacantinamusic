import React, { FunctionComponent, useContext } from 'react';
import Project from '../models/project';
import './project-card.css';
// import formatDate from '../helpers/format-date';
import { useHistory } from 'react-router-dom';
// import {ThemeContext} from '../Context/ThemeContext';

  
type Props = {
  project: Project
  borderColor?: string
};
  
const ProjectCard: FunctionComponent<Props> = ({project}) => {
  ;
  // const [color, setColor] = useState<string>();
  const history = useHistory();
  // const showBorder = () => {
  //     setColor(borderColor);
  // }  

  // const hideBorder = () => {
  //     setColor('#f5f5f5');  
  // }

  const goToProject = (id: number) => {
      history.push(`/projects/${id}`);
  }
  return (

    <div>
      <div className="col s12 m6 l4" onClick={() => goToProject(project.id)}>
        <div className="card horizontal">
          <div className="card-image"> 
            <img src={project.picture} alt={project.name}/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{project.name}</p>
              <p><small>{project.created}</small></p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default ProjectCard;