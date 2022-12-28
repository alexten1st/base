import { gql } from "@apollo/client";

export const createNoteMutation = gql`
  mutation ($content: String, $title: String) {
    createNote(title: $title, content: $content) {
      title
      content
    }
  }
`;
