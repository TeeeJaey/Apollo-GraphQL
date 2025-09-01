import { gql } from "@apollo/client";

export const POST_STORY = gql`
  mutation POST_STORY($name: String!, $author: String!, $genre: [String]!) {
    createStory(
      input: { name: $name, metadata: { author: $author, genre: $genre } }
    ) {
      id
      name
      qty
      liked
      metadata {
        author
        genre
      }
    }
  }
`;
