import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import NoteForm from "./NoteForm";
import { getNote } from "../graphql/querrys/getNote";
import { deleteNoteMutation } from "../graphql/mutations/deleteNote";
import { getNotes } from "../graphql/querrys/getNotes";

export default function Note() {
  const [updatePhase, setUpdatePhase] = useState(false);
  const { id } = useParams();
  const { loading, error, data } = useQuery(getNote, { variables: { id } });
  const [deleteNote] = useMutation(deleteNoteMutation, { variables: { id }, refetchQueries: [{query: getNotes}] });
    const onDeleteClick = () => {
        deleteNote();
    }
  return (
    <>
        <Link class="btn btn-primary mb-4" to="/notes" role="button">Назад</Link>
      {loading ? (
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      ) : (
        <div className="card border-success mb-3" style={{ minWidth: "30rem" }}>
          <h5 className="card-header bg-transparent border-success card-title">
            {data.note.title}
          </h5>

          <div className="card-body text-success">
            <p className="card-text">{data.note.content}</p>
          </div>
          <div className="card-footer bg-transparent border-success d-flex justify-content-around">
            <Link to="/notes" onClick={onDeleteClick} type="button" className="btn btn-outline-danger">
              Delete
            </Link>
            <button
              onClick={() => setUpdatePhase((prev) => !prev)}
              type="button"
              className="btn btn-outline-info"
            >
              Update Form
            </button>
          </div>
          {updatePhase && <NoteForm setUpdatePhase={setUpdatePhase}/>}
        </div>
      )}
    </>
  );
}
