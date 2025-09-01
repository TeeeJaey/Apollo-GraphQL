export const typeDefs = `
    type Meta {
        author: String
        genre: [String]
    }
    
    type Story {
        id: ID
        name: String
        qty: Int
        liked: Boolean
        metadata: [Meta]!
    } 

    type Query {
        stories: [Story]
        getStory(id: String): Story
    }

    input MetaInput {
        author: String
        genre: [String]
    }
    
    input StoryInput {
        id: ID
        name: String
        metadata: [MetaInput]!
    }

    type Mutation {
        createStory(input: StoryInput): Story
    }
`;
