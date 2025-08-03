const Contact = require('../models/Contact');

// Get all contacts
exports.getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

// Add contact
exports.addContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = new Contact({ name, email, phone });
  await newContact.save();
  res.status(201).json(newContact);
};

// Update contact
exports.updateContact = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

// Delete contact
exports.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact deleted' });
};
