import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactForm({ setContacts, editingContact, setEditingContact }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  // When editingContact changes, fill the form
  useEffect(() => {
    if (editingContact) {
      setFormData({
        name: editingContact.name,
        email: editingContact.email,
        phone: editingContact.phone
      });
    }
  }, [editingContact]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form for Add or Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingContact) {
        // Update existing contact
        const res = await axios.put(
          `http://localhost:5000/api/contacts/${editingContact._id}`,
          formData
        );
        setContacts(prev => prev.map(contact => 
          contact._id === editingContact._id ? res.data : contact
        ));
        setEditingContact(null);
      } else {
        // Add new contact
        const res = await axios.post('http://localhost:5000/api/contacts', formData);
        setContacts(prev => [...prev, res.data]);
      }
      setFormData({ name: '', email: '', phone: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary w-100">
            {editingContact ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
