import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import Project from '../models/project';
import PROJECTS from '../models/mock-project';
import ProjectCard from '../components/project-card';
import './project-list.css';
import { ThemeContext } from '../Context/ThemeContext';
  
const ProjectList: FunctionComponent = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const {theme} = useContext(ThemeContext);
  
  useEffect(() => {
    setProjects(PROJECTS);
  }, []);
  
  return (
    <div className={theme ? 'contenu light' : 'contenu dark'}>
      <h1 className="center">Discographie</h1>
      <div className="container"> 
        <div className="row"> 
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        </div>
      </div>
    </div> 
  );
}
  
export default ProjectList;