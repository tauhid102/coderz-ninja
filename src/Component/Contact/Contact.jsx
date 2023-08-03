import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillClockFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import sendMailFromContactUsForm from "../../utilities/sendMail";
import {
  emailValidate,
  messagelValidate,
  nameValidate,
  subjectlValidate,
} from "../../utilities/validateInput";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [filled, setFilled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    name.length > 0 &&
      email.length > 0 &&
      subject.length > 0 &&
      message.length > 0 &&
      setFilled(true);

    if (!filled || nameError || emailError || subjectError || messageError) {
      toast.error("Please fill up the form properly!!");
      setSubmitted(false);
      return;
    } else {
      const pr = sendMailFromContactUsForm({
        name,
        email,
        subject,
        message,
      });
      toast
        .promise(pr, {
          loading: "Please, Wait a bit. We are sending your email",
          success: (data) =>
            `🥳 ${data.message}.\n\n We will get back to you soon.`,
          error: (err) => `🙁 ${err.message}.\n\n Please try again later`,
        })
        .then(() => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setSubmitted(false);
        })
        .catch(() => setSubmitted(false));
    }
  };

  return (
    <div className="aboutUs" id="contact">
      <div className="container paddingTopBottom headingUnderline">
        <h2 className="text-center contactBody svg-container">Contact</h2>
        <div
          className="row g-4 mt-5"
          // data-aos="fade-up"
          // data-aos-delay="50"
          // data-aos-duration="1000"
        >
          <div className="col-12 col-lg-4 contactLeftBG">
            <div className="insideContact hoverEffect">
              <div className="icon contactBorder">
                <span className="">
                  <FaLocationDot />
                </span>
              </div>
              <div className="contactText">
                <h5>Location</h5>
                <p>Mirpur, Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="insideContact mt-3 hoverEffect">
              <div className="icon contactBorder">
                <span>
                  <MdEmail />
                </span>
              </div>
              <div className="contactText">
                <h5>Email</h5>
                <p>contact@coderzninja.com</p>
              </div>
            </div>
            <div className="insideContact mt-3 hoverEffect">
              <div className="icon contactBorder">
                <span>
                  <FaPhone />
                </span>
              </div>
              <div className="contactText">
                <h5>Phone</h5>
                <p>+8801837184946</p>
              </div>
            </div>
            <div className="insideContact mt-3 hoverEffect">
              <div className="icon contactBorder">
                <span>
                  <BsFillClockFill />
                </span>
              </div>
              <div className="contactText">
                <h5>Open Hours</h5>
                <p>Mon-Sat: 11AM - 23PM</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 p-5 contactFrom">
            <form className="row g-3 mt-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter Your Name"
                  value={name}
                  onBlur={(e) => {
                    setName(e.target.value);
                  }}
                  onChange={(e) =>
                    nameValidate(e.target.value, setName, setNameError)
                  }
                />
                {nameError && (
                  <span className="text-danger">
                    Name must be at least 5 character
                  </span>
                )}
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter Your Email"
                  value={email}
                  onBlur={(e) => {
                    setEmail(e.target.value);
                  }}
                  onChange={(e) =>
                    emailValidate(e.target.value, setEmail, setEmailError)
                  }
                />
                {emailError && (
                  <span className="text-danger">
                    Please enter a valid email address
                  </span>
                )}
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="inputSubject"
                  placeholder="Enter The Email Subject"
                  value={subject}
                  onBlur={(e) => {
                    setSubject(e.target.value);
                  }}
                  onChange={(e) =>
                    subjectlValidate(
                      e.target.value,
                      setSubject,
                      setSubjectError
                    )
                  }
                />
                {subjectError && (
                  <span className="text-danger">
                    Please enter at least 10 character
                  </span>
                )}
              </div>
              <div className="col-12">
                <textarea
                  type="text"
                  className="form-control"
                  id="inputMessage"
                  placeholder="Enter Your Message"
                  rows="6"
                  value={message}
                  onBlur={(e) => {
                    setMessage(e.target.value);
                  }}
                  onChange={(e) =>
                    messagelValidate(
                      e.target.value,
                      setMessage,
                      setMessageError
                    )
                  }
                />
                {messageError && (
                  <span className="text-danger">
                    Please enter at least 10 character
                  </span>
                )}
              </div>
              <div className="col-12 d-flex align-center">
                {submitted ? (
                  <button
                    type="button"
                    className="btn-primary mx-auto contactButtonDisabled"
                    disabled
                  >
                    Send Message
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="mx-auto contactButton"
                    onClick={(e) => {
                      setSubmitted(true);
                      handleSubmit(e);
                    }}
                  >
                    Send Message
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
