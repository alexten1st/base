import { gql } from "@apollo/client";

export const getNote = gql`
  query ($id: ID!) {
    note(id: $id) {
      title
      content
      id
    }
  }
`;
