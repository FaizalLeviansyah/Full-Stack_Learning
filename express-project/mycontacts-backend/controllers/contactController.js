// @desc Get all contacts
// @route GET/api/contacts
// @access public 
const getContact = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
}

// @desc Get specific contacts
// @route GET/api/contacts:ID
// @access public
const getspecificContact = (req, res) => {
    res.status(200).json({ message: `Get contacts for ${req.params.id}` });
}

// @desc create contacts
// @route POST/api/contacts
// @access public 
const createContact = (req, res) => {
    res.status(200).json({ message: "Create Contact" });
}

// @desc Update all contacts
// @route UPDATE /api/contacts/id
// @access public 
const updateContact = (req, res) => {
    res.status(200).json({ message: "edit all contacts" });
}

// @desc Edit all contacts
// @route DELETE /api/contacts/id
// @access public 
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contacts for ${req.params.id}` });
}

module.exports = { getContact, createContact, getspecificContact, updateContact, deleteContact};