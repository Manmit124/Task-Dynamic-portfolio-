import UserProfile from "../hooks/userdata";
import { filterAndSortData } from "../lib/filterandsort";
import SectionTitle from "./SectionTitle";

const Skill = () => {
  const { loading, data, error } = UserProfile();
  if (loading) {
    return <h1>...Loading</h1>;
  }
  if (error) {
    return <div >Error: {error.message}</div>;
  }
  function formatDateRange(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return `${start.toLocaleDateString(
      "en-US",
      options
    )} to ${end.toLocaleDateString("en-US", options)}`;
  }
  const filteredAndSortedTimeline = filterAndSortData(data?.user?.timeline);
  const filteredAndSortedSkills = filterAndSortData(data?.user?.skills);
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionTitle
              heading={"Skills and  Experience"}
              subHeading={"Experience"}
              text={
                "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores."
              }
            />

            <div className="skill-box">
              <h3>My Skills</h3>
              <div className="row g-3">
                {data?.user?.skills &&
                  filteredAndSortedSkills.map((skill) => (
                    <div className="col-6 col-md-4 col-lg-6" key={skill?.id}>
                      <div className="feature-box-02">
                        <div className="icon">
                          <img src={skill?.image?.url} />
                        </div>
                        <h6>{skill?.name}</h6>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
         

          <div className="col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0">
          <div className="">
            <h3>For Education</h3>
            <div className="experience-box">
              <ul>
                {filteredAndSortedTimeline &&
                  filteredAndSortedTimeline.map((experience) => (
                    experience.forEducation && (
                      <li key={experience.id}>
                        <div className="eb-right">
                          <span>{experience.company_name}</span>
                          <h5>{experience.jobTitle}</h5>
                          <p>{formatDateRange(experience.startDate, experience.endDate)}</p>
                          <span>{experience.summary}</span>
                          <br />
                          <span>{experience.jobLocation}</span>
                        </div>
                      </li>
                    )
                  ))}
              </ul>
            </div>
          </div>
          <div className="">
            <h3>Work Experience</h3>
            <div className="experience-box">
              <ul>
                {filteredAndSortedTimeline &&
                  filteredAndSortedTimeline.map((experience) => (
                    !experience.forEducation && (
                      <li key={experience.id}>
                        <div className="eb-right">
                          <span>{experience.company_name}</span>
                          <h5>{experience.jobTitle}</h5>
                          <p>{formatDateRange(experience.startDate, experience.endDate)}</p>
                          <span>{experience.summary}</span>
                          <br />
                          <span>{experience.jobLocation}</span>
                        </div>
                      </li>
                    )
                  ))}
              </ul>
            </div>
          </div>

          <div className="experience-user">
              <span className="eu-1">
                <img
                  src="assets/img/effect-3.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <span className="eu-2">
                <img
                  src="assets/img/effect-4.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <div className="avatar">
                <img src={data?.user?.about?.avatar?.url} alt="image" />
              </div>
              <a className="px-btn px-btn-theme2" href="#contactus">
                Hire me{" "}
              </a>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
