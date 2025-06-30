import React, { useContext, useEffect, useState } from "react";
// import { ProjectCard } from "../../components/ProjectsPage/ProjectCard/ProjectCard";
import { projectContext } from "../../context/projectsContext";
import { Filteration } from "../../components/projects/Filtration/Filtration";
import { ProjectCard } from "../../components/projects/projectCard/projectCard";

function Projects() {
  const {
    projects: originalProjects,
    projectFilter,
    filteredProjects,
    term,
    setTerm,
  } = useContext(projectContext);

  useEffect(() => {
    setTerm({
      name: { text: "" },
      client: { text: "" },
      industry: { text: [] },
      subIndustry: { text: [] },
      year: { text: [] },
      location: { text: [] },
      status: { text: "" },
    });
  }, []);
  useEffect(() => {
    projectFilter(term);
  }, [term, originalProjects]);
  return (
    <>
      <div className="md:mt-20 mt-8 lg:px-20 px-8">
        <h1 className="text-white text-xxl font-berlin text-center">
          Projects
        </h1>
        <hr />
        <Filteration />

        <hr />
        <div className="flex justify-center">
          <div className="space-x-8"></div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5">
          {filteredProjects.map((project, index) => {
            return (
              <React.Fragment key={index}>
                <div className="col-span-1">
                  <ProjectCard project={project} />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
