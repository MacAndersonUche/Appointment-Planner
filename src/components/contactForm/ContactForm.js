import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  //handle functions
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">First Name</label>
      <input
        type="text"
        id="name"
        aria-label="Name"
        placeholder="John"
        value={name}
        onChange={handleNameChange}
        required
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        aria-label="Phone Number"
        placeholder="(0000) 000-000"
        pattern="^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$ "
        value={phone}
        onChange={handlePhoneChange}
        required
      />
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        aria-label="Email"
        placeholder="example@nowhere.com"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <input type="submit" value="Add" />
    </form>
  );
};