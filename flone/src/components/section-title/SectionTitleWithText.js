import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Our Commitment to You</h1>
          <p>
          Bosphorus SARL is a creator and provider of high quality hotel and restaurant supplies in the Middle East, with a specialization in all hotel products (Amenities, Electronic, Textile Accessories and Equipments).{" "}
          </p>
          <p>

          Since its inception in Turkey , Bosphorus has managed to differentiate itself through products of high caliber. The company is the exclusive representative of numerous international suppliers that are leaders in their fields, thus bringing forth impeccable quality products and services to the region.


          </p>
          <p>Bosphorus reputation is that of an elegant provider of the most carefully crafted products, to the region’s best hotels. The company has managed to build a strong network of manufacturers and product suppliers, ensuring prompt and efficient service with guaranteed quality products.

</p>
<p>Bosphorus products highlight your commitment towards your guests and their absolute comfort.

</p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
