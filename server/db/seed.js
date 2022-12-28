const mongoose = require("mongoose");
const Note = require("./models/note.model")

const notes = [
    {title:"some title", content: "some content"},
    {title:"anyone title", content: "some content"},
    {title:"one more title", content: "some content"},
    {title:"new title", content: "some content"},
    {title:"old-fashion title", content: "some content"}
];
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect("mongodb://localhost:27017/noteList", options);
mongoose.set('strictQuery', false);

async function seed() {
    const notePromises = notes.map((element) => {
        let post = new Note ({
            title: element["title"],
            content: element["content"],
        })
        return post.save();
    });
    await Promise.all(notePromises)
    await mongoose.disconnect();
}
seed();