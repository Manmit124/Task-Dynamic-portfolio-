import React from "react";
import UserProfile from "../hooks/userdata";

const Footer = () => {
  const { loading, data, error } = UserProfile();
  const social_handles = data?.user?.social_handles;

  console.log(social_handles);
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3> {data?.user?.about?.name} Portfolio</h3>
          <p>
          {/* {data?.user?.about?.title}  */}
          {data?.user?.about?.subTitle} 
          </p>
        </div>

        <div className="box">
          <h3>Quick links</h3>
          <a href="/#home">
            <i className="fas fa-chevron-circle-right"></i> HOME
          </a>
          <a href="/#about">
            <i className="fas fa-chevron-circle-right"></i> ABOUT
          </a>
          <a href="/#services">
            <i className="fas fa-chevron-circle-right"></i> SERVICE
          </a>
          <a href="/#skill">
            <i className="fas fa-chevron-circle-right"></i> SKILLS
          </a>
          <a href="/#work">
            <i className="fas fa-chevron-circle-right"></i> PORTFOLIO
          </a>
          <a href="/#contactus">
            <i className="fas fa-chevron-circle-right"></i> CONTACT
          </a>
        </div>

        <div className="box">
          <h3>Socials</h3>

          <div className="share">
            <div>
              {social_handles &&
                social_handles.map((social) => (
                  <a className="footer-social" href={social?.url}>
                    <img src={social?.image?.url} />
                    <span>{social?.platform}</span>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

// import UserProfile from "../hooks/userdata";

// const platformIcons = {
//   Facebook: "fab fa-facebook-f",
//   Twitter: "fab fa-twitter",
//   Instagram: "fab fa-instagram",
//   LinkedIn: "fab fa-linkedin-in",
// };
// const Footer = () => {
//   const {  data } = UserProfile();
//   const social_handles = data?.user?.social_handles;
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-md-6 py-2">
//             <div className="nav justify-content-center justify-content-md-start">
//               {social_handles &&
//                 social_handles.map(
//                   (social) =>
//                     social.enabled && (
//                       <a key={social._id} href={social.url}>
//                         {platformIcons[social.platform] && (
//                           <i className={platformIcons[social.platform]} />
//                         )}
//                       </a>
//                     )
//                 )}
//             </div>
//           </div>
//           <div className="col-md-6 py-2 text-center text-md-end">
//             <p className="m-0">
//               © {new Date().getFullYear()} copyright all right reserved
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer;
