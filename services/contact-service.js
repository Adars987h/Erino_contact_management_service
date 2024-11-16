const { Op } = require('sequelize');
const Contact = require('../models/contact-model');

class ContactService {
  // Create a new contact
  async createContact(contactData) {
    return await Contact.create(contactData);
  }

  // Get all contacts
  async getAllContacts() {
    return await Contact.findAll();
  }

  // Find a contact by ID
  async findContactById(id) {
    return await Contact.findByPk(id);
  }

  // Update a contact
  async updateContact(id, updateData) {
    const contact = await this.findContactById(id);
    if (!contact) {
      throw new Error('Contact not found');
    }
    return await contact.update(updateData);
  }

  // Delete a contact
  async deleteContact(id) {
    const contact = await this.findContactById(id);
    if (!contact) {
      throw new Error('Contact not found');
    }
    return await contact.destroy();
  }

  // Search contacts by query
  async searchContacts(query) {
    if (!query) {
      throw new Error('Query parameter is required');
    }

    return await Contact.findAll({
      where: {
        [Op.or]: [
          { first_name: { [Op.like]: `%${query}%` } },
          { last_name: { [Op.like]: `%${query}%` } },
          { email: { [Op.like]: `%${query}%` } },
          { phone_number: { [Op.like]: `%${query}%` } },
          { company: { [Op.like]: `%${query}%` } },
          { job_title: { [Op.like]: `%${query}%` } },
        ]
      }
    });
  }
}

module.exports = new ContactService();
