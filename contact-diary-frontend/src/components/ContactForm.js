import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../api";

function ContactForm({ setContacts, editingContact, setEditingContact }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (editingContact) {
      setFormData({
        name: editingContact.name,
        email: editingContact.email,
        phone: editingContact.phone,
      });
    } else {
      setFormData({ name: "", email: "", phone: "" });
    }
  }, [editingContact]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingContact) {
        const res = await API.put(`/contacts/${editingContact._id}`, formData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setContacts((prev) =>
          prev.map((c) => (c._id === editingContact._id ? res.data : c))
        );
        setEditingContact(null);
      } else {
        const res = await API.post("/contacts", formData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setContacts((prev) => [...prev, res.data]);
      }
      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Operation failed");
    }
  };

  return (
    <form className="contact-form d-flex gap-2 mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        className="form-control"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        className="form-control"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn btn-success px-4">
        {editingContact ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default ContactForm;
