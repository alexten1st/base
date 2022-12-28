import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import NoteForm from "./NoteForm";
import {getNotes} from "../graphql/querrys/getNotes"

export default function NotesList() {
  const [updatePhase, setUpdatePhase] = useState(false);
  const { loading, error, data } = useQuery(getNotes);
  return (
    <>
    {loading ? <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>: <>
        <div className="d-flex mb-4">
        <h2>Notes list</h2>
        <button
          onClick={() => setUpdatePhase((prev) => !prev)}
          type="button"
          className="btn btn-outline-info mx-4"
        >
          Update Form
        </button>
      </div>

      {updatePhase ? (
        <NoteForm setUpdatePhase={setUpdatePhase}/>
      ) : (
        <div className="list-group">
          {data.notes.map((note) => (
            <Link
            key={note.id}
              to={`/notes/${note.id}`}
              className="list-group-item list-group-item-action list-group-item-dark"
              aria-current="true"
            >
              {note.title}
            </Link>
          ))}
        </div>
      )}
      </>}
      
    </>
  );
}
