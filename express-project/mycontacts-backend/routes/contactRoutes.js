const express = require("express");
const router = express.Router();
const {getContact, createContact, getspecificContact, updateContact, deleteContact} = require("../controllers/contactController")


router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").get(getspecificContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;