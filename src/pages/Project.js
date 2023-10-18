import BtnGithub from "../components/btnGithub/BtnGithub";


import {useParams} from "react-router-dom";
import {projects} from "../helpers/projectsList";

const Project = () => {
    const {id} = useParams();
    const projectId = parseInt(id, 10);
    const project = projects.find(p => p.id === projectId);
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <img src={project.bigImg} alt={project.title} className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>
                    {project.githubLink && <BtnGithub link={project.githubLink}/>}
                </div>
            </div>
        </main>
    );
}

export default Project