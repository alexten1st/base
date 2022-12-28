import { useState } from "react";
import { updateNoteMutation } from "../graphql/mutations/updateNote";
import { createNoteMutation } from "../graphql/mutations/createNote";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { getNote } from "../graphql/querrys/getNote";
import { getNotes } from "../graphql/querrys/getNotes";
export default function NoteForm({ setUpdatePhase }) {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [updateNote] = useMutation(updateNoteMutation, {
    variables: { id, title, content },
    refetchQueries: [{ query: getNote, variables: { id } }],
  });
  const [createNote] = useMutation(createNoteMutation, {
    variables: { title, content },
    refetchQueries: [{ query: getNotes }],
  });
  const clickHandler = (event) => {
    event.preventDefault();
    if (id) {
      updateNote();
    } else {
      createNote();
    }
    setUpdatePhase(false);
  };
  return (
    <form className="px-2 py-2">
      <div className="mb-3">
        <label className="form-label">title</label>
        <input
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          className="form-control"
          name="title"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">content</label>
        <input
          onChange={(event) => setContent(event.target.value)}
          type="text"
          className="form-control"
          name="content"
        />
      </div>
      <button onClick={clickHandler} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
