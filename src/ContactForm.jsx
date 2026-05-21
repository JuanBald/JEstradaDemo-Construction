import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    inquiry: ""
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_0qst4ak",
        "template_ljdbtk2",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          zip: formData.zip,
          inquiry: formData.inquiry
        },
        "yDYyabBUq9CQJnGRz"
      );

      alert("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zip: "",
        inquiry: ""
      });

    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again.");
    }

    setLoading(false);
  }

  return (
    <div id="contact" className="w-full min-h-screen bg-[#f8f8f8] flex items-center justify-center relative z-20 pointer-events-auto">
      
      <div className="w-full max-w-2xl flex flex-col gap-6">
        
        <span className="text-5xl font-semibold text-left">
          Contact Us
        </span>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <div className="flex gap-5">
            <input
              required
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-1/2 border border-gray-300 p-3 rounded bg-white"
            />
            <input
              required  
              name="lastName" 
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-1/2 border border-gray-300 p-3 rounded bg-white"
            />
          </div>

          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 p-3 rounded bg-white"
          />

          <div className="flex gap-5">
            <input
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-1/2 border border-gray-300 p-3 rounded bg-white"
            />
            <input 
              required
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Zip Code"
              className="w-1/2 border border-gray-300 p-3 rounded bg-white"
            />
          </div>

          <textarea
            required
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            placeholder="Inquiry"
            className="border border-gray-300 p-3 rounded h-40 bg-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#243010] text-white p-3 rounded hover:bg-gray-900"
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
      </div>
    </div>
  );
}