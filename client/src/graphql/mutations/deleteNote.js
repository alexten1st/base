import { gql } from "@apollo/client";

export const deleteNoteMutation = gql`
  mutation ($id: ID) {
    deleteNote(id: $id)
  }
`;
