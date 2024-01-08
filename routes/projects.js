const express = require('express');
const router = express.Router();
const { projectsController } = require('../controllers/projectsController.js');

router.get('/myprojects', (req, res) => {
  projectsController.getProjects(res);
});

module.exports = router;