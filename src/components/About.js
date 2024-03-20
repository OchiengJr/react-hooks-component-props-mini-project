import React from "react";
import PropTypes from "prop-types";

const About = ({ image, altname, about }) => {
  return (
    <aside>
      <img src={image} alt={altname} />
      {/* If there is content in the 'about' prop, render a paragraph */}
      {about && <p>{about}</p>}
    </aside>
  );
};

// PropTypes for type checking
About.propTypes = {
  image: PropTypes.string,
  altname: PropTypes.string,
  about: PropTypes.string,
};

// Default props to provide fallback values
About.defaultProps = {
  image: "https://via.placeholder.com/215",
  altname: "Placeholder Image",
  about: "",
};

export default About;
