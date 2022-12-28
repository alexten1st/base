import { gql } from "@apollo/client";

export const updateNoteMutation = gql`
  mutation ($id: ID, $content: String, $title: String) {
    updateNote(id: $id, title: $title, content: $content) {
      title
      content
    }
  }
`;
