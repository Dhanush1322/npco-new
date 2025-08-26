"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully sent and we will get back to you soon.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Define the shape of the form state
interface ContactState {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

// Form initial state
const INITIAL_STATE: ContactState = {
  name: "",
  email: "",
  number: "",
  subject: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [contact, setContact] = useState<ContactState>(INITIAL_STATE);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, message } = contact;
      const payload = { name, email, number, subject, message };
      const response = await axios.post(url, payload);
      console.log(response.data);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.error("Error submitting the contact form:", error);
    }
  };

  return (
    <>
      <div className="main-contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <span>Contact Us</span>
            <h2>Drop us a message for any query</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              quibusdam deleniti porro praesentium. Aliquam minus quisquam velit
              in at nam.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="contact-wrap contact-pages mb-0">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="form-control"
                            value={contact.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            value={contact.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="number"
                            placeholder="Phone number"
                            className="form-control"
                            value={contact.number}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="form-control"
                            value={contact.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            cols={30}
                            rows={6}
                            placeholder="Write your message..."
                            className="form-control"
                            value={contact.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-sm-12">
                        <button type="submit" className="default-btn btn-two">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-img">
                <Image
                  src="/images/contact-img.png"
                  alt="Image"
                  width={807}
                  height={704}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
