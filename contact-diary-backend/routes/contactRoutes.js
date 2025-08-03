const express = require('express');
const Contact = require('../models/Contact');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// GET all contacts for logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ userId: req.user.userId });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD a new contact for logged-in user
router.post('/', auth, async (req, res) => {
  try {
    const newContact = new Contact({
      ...req.body,
      userId: req.user.userId
    });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a contact
router.put('/:id', auth, async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE a contact
router.delete('/:id', auth, async (req, res) => {
  try {
    const contact = await Contact.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId
    });
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
