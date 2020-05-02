/**
 *  mongodb is the native driver for interacting with a mongodb instance and mongoose is an Object modeling tool for MongoDB.
 * db refers to the mongo URI, its a link automatically generated when you created your cloud mongodb.
 */

const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

/**
 *  database connection method
 */

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      // these statements needs to included to rid of some unexpected errors.
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    // wait till mongoose connected then execute
    console.log('Mongo DB connected')
    // print error message
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
