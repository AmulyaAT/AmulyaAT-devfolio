import React from "react";
import "./_Contact.scss";
import "./_Mediacontact.scss";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "35dca2d2-d1ab-4f06-a7a8-af059937392f"); // Replace with your Web3Forms access key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();

      if (result.success) {
        alert("Your message was sent successfully!");
      } else {
        alert("There was an error. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form.");
    }

    //Reset the form after submission
    event.target.reset();
  };

  return (
    <div className="Contact-container">
      <div className="title-header">
        <h2>Get in touch..</h2>
      </div>
      <div className="Form">
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;