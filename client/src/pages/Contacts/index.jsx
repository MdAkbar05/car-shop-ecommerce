import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Your EmailJS service ID, template ID, and user ID
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setMessage("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          setIsSubmitting(false);
          setMessage("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-300 mb-8">
          Contact Us
        </h2>
        <div className="max-w-lg mx-auto bg-black p-8 shadow-md rounded-lg">
          <form ref={form} onSubmit={sendEmail}>
            {/* Name Field */}
            <div className="mb-6">
              <label
                className="block text-slate-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label
                className="block text-slate-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                className="block text-slate-300 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className={`bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Success or Error Message */}
            {message && (
              <div className="mt-4 text-center text-sm text-green-500">
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
