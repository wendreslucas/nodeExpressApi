import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://wendreslucas:NewHorizons7@node-project.nodes.mongodb.net/nodelivros'
)

let db = mongoose.connection

export default db
