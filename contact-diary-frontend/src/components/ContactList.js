import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import axios from 'axios';

function ContactList({ contacts, setContacts, setEditingContact }) {
  
  // Delete a contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      setContacts(prev => prev.filter(contact => contact._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-4">
      <h3>Saved Contacts</h3>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">No contacts found</td>
            </tr>
          ) : (
            contacts.map(contact => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <button 
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => setEditingContact(contact)}
                  >
                    <FaEdit />
                  </button>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteContact(contact._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
