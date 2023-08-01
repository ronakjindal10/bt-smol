const express = require('express');
const Contact = require('../models/Contact');
const asyncHandler = require('../utils/asyncHandler');

// Get all contacts for a user
exports.getContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.find({ userId: req.user.id });
  res.status(200).json({
    success: true,
    data: contacts
  });
});

// Store contacts for a user
exports.storeContacts = asyncHandler(async (req, res, next) => {
  const { contacts } = req.body;
  const userId = req.user.id;

  contacts.forEach(async contact => {
    const { name, phoneNumber } = contact;
    await Contact.create({ name, phoneNumber, userId });
  });

  res.status(200).json({
    success: true,
    message: 'Contacts stored successfully'
  });
});