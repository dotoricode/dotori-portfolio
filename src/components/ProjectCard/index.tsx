import React from 'react';
import { Project } from '@site/src/data/projects';
import styles from './styles.module.css';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props): JSX.Element {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.period}>{project.period}</p>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.techStack}>
        {project.techStack.map((tech) => (
          <span key={tech} className={styles.tag}>{tech}</span>
        ))}
      </div>
      <div className={styles.links}>
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button button--sm button--secondary">GitHub</a>}
        {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="button button--sm button--primary">Demo</a>}
      </div>
    </div>
  );
}
