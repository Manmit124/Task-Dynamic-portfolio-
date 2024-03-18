import { Swiper, SwiperSlide } from "swiper/react";
import {sliderProps} from "../lib/sliderProps"
import SectionTitle from "./SectionTitle";
import UserProfile from "../hooks/userdata";
import { filterAndSortData } from "../lib/filterandsort";

const Testimonial = () => {
  const { loading, data,error } = UserProfile();

  if(loading){
    return <h1>...Loading</h1>
  }
  if (error) {
    return <div >Error: {error.message}</div>;
  }
  const filteredAndSortedTestomonials = filterAndSortData(data?.user?.testimonials);
  return (
    <section className="section testimonial-section">
      <div className="container">
        <SectionTitle
          heading={"Client's Kind Word"}
          subHeading={"Testimonial"}
        />
        <Swiper {...sliderProps.testimonial} className="lightbox-gallery">
          { filteredAndSortedTestomonials &&
            filteredAndSortedTestomonials.map((testimonial) => (
              <SwiperSlide className="feature-box-03" key={testimonial.id}>
                <div className="feature-img">
                  <img src={testimonial.image.url} alt="image" />
                </div>
                <div className="feature-content">
                  <div className="icons">
                    <i className="fas fa-quote-left" />
                  </div>
                  <p>{testimonial.review}</p>
                  <h6>{testimonial.name}</h6>
                  <span>{testimonial.position}</span>
                </div>
              </SwiperSlide>
            ))}
          <div className="owl-dots"></div>
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonial;
