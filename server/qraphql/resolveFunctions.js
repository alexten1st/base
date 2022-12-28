const db = require("../db/models/note.model");

const deleteNote = async (id) => {
  const note = await db.findById(id);
  if (note) {
    await db.findByIdAndDelete(id);
    return true;
  }
  return false;
};

const updateNote = async (id, title, content) => {
  await db.findByIdAndUpdate(id, {
    title,
    content,
  });
  return await db.findById(id)
};

const createNote = async ( title, content) => {
    await db.insertMany([{ title, content}])
    return await db.findOne({ title, content})
  };
  
module.exports = {
  deleteNote,
  updateNote,
  createNote
};
