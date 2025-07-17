import React, { useState } from "react";

export default function ContactPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Full name:", fullname);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto pt-32">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-600">Please fill in the form below</p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="fullname" className="mb-1 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="John Doe"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded-md px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 transition text-white py-2 px-4 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
}
