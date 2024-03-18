import UserProfile from "../hooks/userdata";
import SectionTitle from "./SectionTitle";
import { filterAndSortData } from "../lib/filterandsort";
import Loading from "./Loading";

const Portfolio = () => {
  const { loading, data, error } = UserProfile();
  if (loading) {
    return <Loading/>
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
                    <a href={portfolio?.image?.url} className="gallery-link">
                      <img src={portfolio?.image?.url} alt="image" />
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h6>{portfolio.title}</h6>
                    <span>{portfolio.subtitle}</span>
                    {portfolio.techStack.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                    <a href={portfolio.githuburl} className="gallery-link" aria-label="GitHub Repository">
                      <i className="fab fa-github"  />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
