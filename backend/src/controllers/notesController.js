function getAllNotes(req, res) {
  res.status(200).send("You just fetched your notes");
}

function createNote(req, res) {
  res.status(201).json({
    message: "Post created successfully",
  });
}

function updateNote(req, res) {
  res.status(200).json({
    message: "Post udpdated successfully",
  });
}

function deleteNote(req, res) {
  res.status(200).json({
    message: "Post deleted successfully",
  });
}

module.exports = { getAllNotes, createNote, updateNote, deleteNote };
