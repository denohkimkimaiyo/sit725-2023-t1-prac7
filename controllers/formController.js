const { insertFormData } = require("../models/formDataModel.js");

exports.submitForm = async (req, res) => {
  const { first_name, last_name, email, message } = req.body;

  try {
    await insertFormData({ first_name, last_name, email, message });
    console.log("Form data inserted into MongoDB");
    res.send("Form submitted and data inserted into MongoDB!");
  } catch (err) {
    console.error("Error inserting form data into MongoDB:", err);
    res.status(500).send("Error inserting form data into MongoDB");
  }
};