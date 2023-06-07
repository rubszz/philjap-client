import React, { useState } from 'react';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to server
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Message:', message);
    // Reset form fields
    setEmail('');
    setName('');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-10">
      {!isOpen && (
        <button
          className="bg-discordBlue text-white p-3 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          Chat Support
        </button>
      )}
      {isOpen && (
        <div className="bg-discordDark p-4 rounded-lg shadow-lg max-w-sm">
          <h3 className="text-white text-lg font-semibold mb-2">Chat Support</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-discordInput focus:outline-none text-white py-2 px-3 rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-discordInput focus:outline-none text-white py-2 px-3 rounded"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm mb-1">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-discordInput focus:outline-none text-white py-2 px-3 rounded h-20 resize-none"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-discordBlue text-white py-2 px-4 rounded-full focus:outline-none"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FloatingChatButton;
