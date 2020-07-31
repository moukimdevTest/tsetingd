import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BlogFeaturedSingle = ({ singlePost }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="blog-wrap mb-30 scroll-zoom">
        <div className="blog-img">
        <a href={singlePost.url} target="_blank">
            <img src={process.env.PUBLIC_URL + singlePost.image} alt="" />
          </a>
          <div className="blog-category-names">
            {singlePost.category.map((singleCategory, key) => {
              return (
                <span className="purple" key={key}>
                  {singleCategory}
                </span>
              );
            })}
          </div>
        </div>
        <div className="blog-content-wrap">
          <div className="blog-content text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + singlePost.url}>
                {singlePost.title}
              </Link>
            </h3>
            <span>
             
              <a href={singlePost.url} target="_blank"> 

               
                </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogFeaturedSingle.propTypes = {
  singlePost: PropTypes.object
};

export default BlogFeaturedSingle;
