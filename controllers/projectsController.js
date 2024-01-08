const { MongoClient } = require('mongodb');

exports.getProjects = async (res) => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'mydb';
    const collectionName = 'formData';

    try {
        const client = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const projects = await collection.find({}).toArray();
        res.json(projects);
    } catch (err) {
        console.error('Error fetching projects:', err);
        res.status(500).send('Error fetching projects');
    }
};