import PropTypes from "prop-types";
import React, { Fragment,useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";
import Form from "./Form"
import Data from "../../Datas";
import Success from './Success';
const Contact = ({ location }) => {
  const { pathname } = location;
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [subject,setsubject] = useState("");
  const [message,setmessage] = useState("");
  const type="contact"
  const change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("name: "+name+" value = "+value +"\n");
    const  changeName=(nam)=>{
      return "set"+nam;
        }
        const setss = changeName(name);
  
        eval(setss)(value);
  }
  const cancel = () => {
  }
  const [errors,setErrors] = useState([]);
  const [success,setSuccess] = useState([]);
  const submit = () => {
    const user = {
      type,
      name,
      email,
      subject,
      message
    }
    const d = new Data();
    d.sendEmail(user).then(errors=>{
      if(errors.length>0){
       setErrors(errors)
      }
  
    })
    .catch(err=>{
      console.log(err.message);
      
    
    });
   

    d.sayHi();
    setTimeout((req,res)=>{
      console.log('Hello, World!')
res.redirect('/success')
      return(
        
        <Success/>
      )
    },6000)
  }
  return (
    <Fragment>
      <MetaTags>
        <title>Bosphorus | Contact</title>
        <meta
          name="description"
          content="Contact of Bosphorus react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <LocationMap latitude="47.444" longitude="-122.176" />
            </div>
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+012 345 678 102</p>
                      <p>+012 345 678 102</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:urname@email.com">urname@email.com</a>
                      </p>
                      <p>
                        <a href="//urwebsitenaem.com">urwebsitenaem.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Address goes here, </p>
                      <p>street, Crossroad 123.</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//vimeo.com">
                          <i className="fa fa-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch With Us</h2>
                  </div>
                  <Form 
           cancel={cancel}
            errors={errors}
            success={success}
            submit={submit}

            elements={() => (
              <React.Fragment>
              <div className="contact-form-style"> 
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Name*" type="text"
                          onChange={change} 
                           value={name}
                         />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Email*" type="email" 
                            onChange={change} 
                           value={email}
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Subject*"
                          type="text"
                          onChange={change} 
                           value={subject}
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                          defaultValue={""}
                          onChange={change} 
                           value={message}

                        />
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                    </div>
                      </React.Fragment>
            )} />
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
