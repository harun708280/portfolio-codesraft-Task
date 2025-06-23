import React from "react";

const ContactFrom = () => {
  return (
    <div className="flex items-center justify-center w-full px-4 text-white ">
      <div className="w-full p-8 shadow-md bg-[#130a24] border-[#1e1038] hover:border-[#2e1c58] transition-colors5 rounded-2xl backdrop-blur-md">
        <h2 className="mb-6 text-3xl font-bold ">Get in Touch</h2>

        <form
          action="https://formspree.io/f/your-form-id" // <-- Replace with your Formspree ID or backend route
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 text-white placeholder-gray-400 border rounded bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="youmail@.com"
              className="w-full px-4 py-2 text-white placeholder-gray-400 border rounded bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your message..."
              className="w-full px-4 py-2 text-white placeholder-gray-400 border rounded bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition rounded bg-primary hover:bg-primary/80"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
