import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import Modal from 'react-modal';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to server
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Message:', message);
    emailjs.sendForm('service_zjcigin', 'template_chnknaq', form.current, '4b35hCQFivBvVPHWY')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    setModalIsOpen(true);
    // Reset form fields
    setEmail('');
    setName('');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          className="bg-discordBlue text-white p-3 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          Email Support
        </button>
      )}
      {isOpen && (
        <div className="bg-discordDark p-4 rounded-lg shadow-lg max-w-sm">
          <h3 className="text-white text-lg font-semibold mb-2">Email Support</h3>
          <form ref={form} onSubmit={handleSubmit}>
            {/* ...form fields */}
            <div className="flex flex-row gap-4 justify-center">
              <button
                type="submit"
                className="bg-discordBlue text-white py-2 px-4 rounded-full focus:outline-none"
              >
                Send
              </button>
              <button
                className="bg-discordBlue text-white py-2 px-4 rounded-full focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Message Sent"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h3>Message Sent!</h3>
        <p>Please wait for the email support team to contact you through your email. Thank you!</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default FloatingChatButton;
