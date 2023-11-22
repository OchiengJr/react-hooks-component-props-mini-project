import React from "react";
import PropTypes from "prop-types";

const About = ({ image, altname, about }) => {
  return (
    <aside>
      <img src={image} alt={altname} />
      {/* If there is something in the about then create a paragraph with the about */}
      {about && <p>{about}</p>}
    </aside>
  );
};

About.propTypes = {
  image: PropTypes.string,
  altname: PropTypes.string,
  about: PropTypes.string,
};

About.defaultProps = {
  image: "https://via.placeholder.com/215",
  altname: "blog logo",
  about: "",
};

export default About;
