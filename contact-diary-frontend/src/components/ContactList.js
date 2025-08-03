import React from "react";

function ContactList({ contacts, setContacts, setEditingContact }) {
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/contacts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        setContacts((prev) => prev.filter((c) => c._id !== id));
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete contact");
    }
  };

  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <p className="text-center text-muted">No contacts added yet.</p>
      ) : (
        contacts.map((contact) => (
          <div className="contact-card" key={contact._id}>
            <div>
              <h5>{contact.name}</h5>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
            </div>
            <div>
              <button
                className="btn btn-sm btn-primary me-2"
                onClick={() => setEditingContact(contact)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(contact._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ContactList;
