import { gql } from "@apollo/client";

export const getNotes = gql`
    query {
      notes {
        title
        content
        id
      }
    }
`;