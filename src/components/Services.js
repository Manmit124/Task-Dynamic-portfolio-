import UserProfile from "../hooks/userdata";
import { filterAndSortData } from "../lib/filterandsort";
import SectionTitle from "./SectionTitle";

const Services = () => {
  const { loading, data, error } = UserProfile();
  if (loading) {
    return <h1>...Loading</h1>;
  }
  if (error) {
    return <div >Error: {error.message}</div>;
  }
  const filteredAndSortedServices = filterAndSortData(data?.user?.services);
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Services I Offer"} subHeading={"Services"} />
        <div className="row gy-4">
          {filteredAndSortedServices &&
            filteredAndSortedServices.map((service) => (
              <div className="col-sm-6 col-lg-4" key={service._id}>
                <div className="feature-box-01">
                  <div className="feature-content">
                    <div className="number">
                      <span>{service.charge}</span>
                    </div>
                    <h5>{service.name}</h5>
                    <p>{service.desc}</p>
                    <div className="icon">
                 <img src={service.image.url}/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
