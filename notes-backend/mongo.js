const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

console.log(process.argv);

const url = `mongodb+srv://notes-db:${password}@cluster0.ruxivx4.mongodb.net/noteApp?appName=Cluster0`;

mongoose.set("strict", false);

mongoose.connect(url, { family: 4 });

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "Mongo",
  important: false,
});

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note);
  });
  mongoose.connection.close();
})

// note.save().then((result) => {
//   console.log(result, "note saved!");
//   mongoose.connection.close();
// });
