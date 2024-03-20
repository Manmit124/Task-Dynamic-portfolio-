import UserProfile from "../hooks/userdata";
import SectionTitle from "./SectionTitle";
import { filterAndSortData } from "../lib/filterandsort";
import Loading from "./Loading";
import { Profiler, useState } from "react";
import ProjectModal from "./ProjectModel";
import ImageView from "./popup/ImageView";
import useClickOutside from "../hooks/useClickOutside";
import ProjectModel from "./ProjectModel";

const Portfolio = () => {
  // let domNode = useClickOutside(() => {
  //   handleClose(false);
  // });
  const { loading, data, error } = UserProfile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    console.log("cliked");
    console.log(isModalOpen);
    console.log(selectedProject);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const filteredAndSortedPortfolio = filterAndSortData(data?.user?.projects);
  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} />
        <div className="row g-4 lightbox-gallery">
          {filteredAndSortedPortfolio &&
            filteredAndSortedPortfolio.map((portfolio) => (
              <div className="col-sm-6 col-lg-4" key={portfolio._id}>
                <div className="portfolio-box">
                  <div className="portfolio-img">
                    <a
                      onClick={() => openModal(portfolio)}
                      // href={portfolio?.image?.url}
                      className="gallery-link"
                    >
                      <img src={portfolio?.image?.url} alt="image" />
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h6>{portfolio.title}</h6>
                    <span>{portfolio.subtitle}</span>
                    {portfolio.techStack.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                    <a
                      href={portfolio.githuburl}
                      className="gallery-link"
                      aria-label="GitHub Repository"
                    >
                      <i className="fab fa-github" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {isModalOpen && (
          <>
            <div
              className="mfp-bg mfp-ready"
              onClick={() => handleClose()}
            ></div>
            <div
              className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
              tabIndex={-1}
              style={{ overflow: "hidden auto" }}
            >
              <div className={` popup-container `}>
                <ProjectModel
                  project={selectedProject}
                  setIsModalOpen={setIsModalOpen}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default Portfolio;
