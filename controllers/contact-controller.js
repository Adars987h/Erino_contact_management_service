const ContactService = require('../services/contact-service');

class ContactController {
  // Create a new contact
  async create(req, res) {
    try {
      const contact = await ContactService.createContact(req.body);
      res.status(201).send(contact);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }

  // Get all contacts
  async findAll(req, res) {
    try {
      const contacts = await ContactService.getAllContacts();
      res.status(200).send(contacts);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }

  // Update a contact
  async update(req, res) {
    try {
      const { id } = req.params;
      const contact = await ContactService.updateContact(id, req.body);
      res.status(200).send(contact);
    } catch (err) {
      res.status(err.message === 'Contact not found' ? 404 : 400).send({ error: err.message });
    }
  }

  // Delete a contact
  async delete(req, res) {
    try {
      const { id } = req.params;
      await ContactService.deleteContact(id);
      res.status(204).send();
    } catch (err) {
      res.status(err.message === 'Contact not found' ? 404 : 500).send({ error: err.message });
    }
  }

  // Search contacts by query
  async search(req, res) {
    try {
      const { query } = req.query;
      const contacts = await ContactService.searchContacts(query);
      res.status(200).send(contacts);
    } catch (err) {
      res.status(err.message === 'Query parameter is required' ? 400 : 500).send({ error: err.message });
    }
  }
}

module.exports = new ContactController();
