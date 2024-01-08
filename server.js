const express = require('express');
const bodyParser = require('body-parser');
const formController = require('./controllers/formController.js');
const projectsRouter = require('./routes/projects.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('views')); 

app.post("/submit-form", formController.submitForm);
app.use('/api/projects', projectsRouter); 

const port = process.env.PORT || 2022;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});