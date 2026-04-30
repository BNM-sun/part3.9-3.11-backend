const mongoose = require ('mongoose')
if (process.argv.length < 3) {
    console.log ('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://bathomakgau4_db_user:${password}@cluster0.gxupxhh.mongodb.net/phonebook?appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })
  .then(() => console.log('connected to MongoDB'))
  .catch(err => console.log('error:', err.message))

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String, 
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

const phonebook = new Phonebook ({
    name: process.argv[3],
    number: process.argv[4]
})
if (process.argv.length === 3) {
  Phonebook.find({}).then(result => {
    result.forEach(person => {
      console.log(person.name, person.number)
    })
mongoose.connection.close()
})
}
else {
    const phonebook = new Phonebook ({
        name: process.argv [3],
        number: process.argv [4]
    })
     phonebook.save().then(result => {
    console.log('Addition saved!')
    mongoose.connection.close()
  })
}


