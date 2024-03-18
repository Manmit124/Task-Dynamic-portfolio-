"use client"
import UserProfile from "../hooks/userdata";

const Footer = () => {
  const { loading, data,error } = UserProfile();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 py-2">
            <div className="nav justify-content-center justify-content-md-start">


            {/* {data?.user?.social_handles &&
                data?.user?.social_handles?.map((social) => (
                  <li key={social._id} className="">
                  <a href={social.url} className=" icon">
                    <img src={social.image.url} alt="" />
                  </a>
                  </li>
                ))} */}
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest" />
              </a>
            </div>
          </div>
          <div className="col-md-6 py-2 text-center text-md-end">
            <p className="m-0">
              © {new Date().getFullYear()} copyright all right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
