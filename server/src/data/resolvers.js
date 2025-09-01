import { data, storiesDB } from "./data.js";

function createStoryObj(id, { name, metadata }) {
  return {
    id,
    name,
    qty: 1,
    liked: false,
    metadata,
  };
}

export const resolvers = {
  Query: {
    stories: () => Object.values(storiesDB),
    getStory: (_, { id }) => storiesDB[id],
  },
  Mutation: {
    createStory: (_, { input }) => {
      const id = crypto.randomUUID();
      const story = createStoryObj(id, input);
      storiesDB[id] = story;
      return story;
    },
  },
};
