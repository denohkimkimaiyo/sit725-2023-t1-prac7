const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "mydb";

exports.insertFormData = async (formData) => {
  let client;
  try {
    client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(dbName);
    const collection = db.collection("formData");
    await collection.insertOne(formData);
  } catch (err) {
    if (client) {
      client.close();
    }
    throw err;
  } finally {
    if (client) {
      client.close();
    }
  }
};