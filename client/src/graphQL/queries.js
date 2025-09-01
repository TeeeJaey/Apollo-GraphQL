import { gql } from "@apollo/client";

export const GET_STORIES = gql`
  query GET_STORIES {
    stories {
      id
      name
    }
  }
`;

export const GET_STORY_DETAIL = gql`
  query GET_STORY_DETAIL($id: String!) {
    getStory(id: $id) {
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
