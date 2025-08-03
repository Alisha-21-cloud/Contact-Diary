import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api"; // Axios instance with token
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import "../styles/ContactDiary.css";

function ContactsPage() {
    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState(null);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login"; // redirect to login page
    };

    // Fetch contacts from backend
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirect if not logged in
            return;
        }

        API.get("/contacts")
            .then((res) => setContacts(res.data))
            .catch((err) => {
                console.error(err);
                if (err.response && err.response.status === 401) {
                    alert("Session expired. Please login again.");
                    localStorage.removeItem("token");
                    navigate("/login");
                }
            });
    }, [navigate]);

    return (
        <div className="contact-diary-container">
            <h1 className="contact-diary-title">📒 Contact Diary</h1>


            {/* Contact Form for Adding or Editing */}
            <div className="contact-form">
                <ContactForm
                    setContacts={setContacts}
                    editingContact={editingContact}
                    setEditingContact={setEditingContact}
                />
            </div>

            {/* Contact List to Display, Edit, or Delete */}
            <ContactList
                contacts={contacts}
                setContacts={setContacts}
                setEditingContact={setEditingContact}
            />

            <button className="btn-logout" onClick={handleLogout}>
                Logout
            </button>

        </div>
    );
}

export default ContactsPage;
