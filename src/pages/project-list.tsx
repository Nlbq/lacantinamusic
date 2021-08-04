import React, { FunctionComponent, useState, useEffect } from 'react';
import Project from '../models/project';
import PROJECTS from '../models/mock-project';
import ProjectCard from '../components/project-card';
  
const ProjectList: FunctionComponent = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    setProjects(PROJECTS);
  }, []);
  
  return (
    <div>
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