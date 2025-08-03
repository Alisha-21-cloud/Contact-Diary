import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  // Fetch contacts from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/contacts')
      .then(res => setContacts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">📒 Contact Diary</h1>
      <ContactForm 
        setContacts={setContacts} 
        editingContact={editingContact} 
        setEditingContact={setEditingContact} 
      />
      <ContactList 
        contacts={contacts} 
        setContacts={setContacts} 
        setEditingContact={setEditingContact} 
      />
    </div>
  );
}

export default App;
