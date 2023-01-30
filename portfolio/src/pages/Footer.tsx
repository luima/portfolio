import { withAddons, withMotion } from "@shared/index";

import { images } from "@constants/index";
import { client } from "../client";
import { useState } from "react";

interface ContactModel {
  _type?: string;
  name: string;
  email: string;
  message: string;
}

function Footer() {
  const [formData, setFormData] = useState<ContactModel>({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      ...formData,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex-1 w-full flex-col">
      <h2 className="heading">Take a coffee & chat with me</h2>

      <div className="w-full flex justify-evenly items-center flex-wrap mt-16 mb-8 max-[768px]:w-full">
        <div className="min-w-[290px] flex flex-row justify-start items-center my-2 mx-0 p-4 rounded-xl cursor-pointer bg-lightGray transition-all duration-300 ease-in-out max-[450px]:w-full shadow-[0_0_25px_#fef4f5]">
          <img src={images.email} alt="email" className="w-10 h-10 my-0 mx-3" />
          <a
            href="mailto:hello@micael.com"
            className="paragraph font-medium no-underline"
          >
            luima.rodriguez15@gmail.com
          </a>
        </div>
        <div className="min-w-[290px] flex flex-row justify-start items-center my-2 mx-0 p-4 rounded-xl cursor-pointer bg-lightGray transition-all duration-300 ease-in-out max-[450px]:w-full shadow-[0_0_25px_#fef4f5]">
          <img
            src={images.mobile}
            alt="phone"
            className="w-10 h-10 my-0 mx-3"
          />
          <a
            href="tel:+1 (123) 456-7890"
            className="paragraph font-medium no-underline"
          >
            +1 (849) 878-7169
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="w-full flex-centered flex-col my-4">
          <div className="flex-centered w-full my-3 mx-0 rounded-xl cursor-pointer bg-primary transition-all duration-300 ease-in-out">
            <input
              className="paragraph w-full p-4 border-none rounded-lg bg-primary text-secondary outline-0 hover:shadow-[0_0_25px_#fff]"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              autoComplete="off"
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex-centered w-full my-3 mx-0 rounded-xl cursor-pointer bg-primary transition-all duration-300 ease-in-out">
            <input
              className="paragraph paragraph w-full p-4 border-none rounded-lg bg-primary text-secondary outline-0 hover:shadow-[0_0_25px_#fff]"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              autoComplete="off"
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex-centered w-full my-3 mx-0 rounded-xl cursor-pointer bg-primary transition-all duration-300 ease-in-out">
            <textarea
              className="paragraph paragraph w-full h-44 p-4 border-none rounded-lg bg-primary text-secondary outline-0 hover:shadow-[0_0_25px_#fff]"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              autoComplete="off"
            />
          </div>
          <button
            type="button"
            className={`paragraph py-4 px-8 rounded-xl bg-secondary font-medium text-white outline-0 mt-8 mx-0 mb-0 ease-[bezier(0.55, 0.085, 0.68, 0.53)] cursor-pointer hover:bg-[#2430af]  ${
              loading ? "pointer-events-none" : ""
            }`}
            onClick={handleSubmit}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="heading">Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  );
}

export default withAddons(withMotion(Footer, ""), "contact", "bg-white");
