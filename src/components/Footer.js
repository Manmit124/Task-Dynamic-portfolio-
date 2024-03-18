import UserProfile from "../hooks/userdata";

const platformIcons = {
  Facebook: "fab fa-facebook-f",
  Twitter: "fab fa-twitter",
  Instagram: "fab fa-instagram",
  LinkedIn: "fab fa-linkedin-in",
};
const Footer = () => {
  const {  data } = UserProfile();
  const social_handles = data?.user?.social_handles;
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 py-2">
            <div className="nav justify-content-center justify-content-md-start">
              {social_handles &&
                social_handles.map(
                  (social) =>
                    social.enabled && (
                      <a key={social._id} href={social.url}>
                        {platformIcons[social.platform] && (
                          <i className={platformIcons[social.platform]} />
                        )}
                      </a>
                    )
                )}
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
