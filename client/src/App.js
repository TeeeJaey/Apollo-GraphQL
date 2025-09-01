import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ErrorLink } from "@apollo/client/link/error";
import { Stories, StoryDetail, PostStory } from "./components";
import { useState } from "react";

const errorLink = new ErrorLink((error, op) => {
  console.error(error);
});

const link = ApolloLink.from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3030" }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
function App() {
  const [open, setOpen] = useState("");
  const [add, setAdd] = useState(false);
  return (
    <ApolloProvider client={client}>
      <Stories
        openStory={(id) => {
          setAdd(false);
          setOpen(id);
        }}
      />
      <button
        style={{ margin: "20px" }}
        onClick={() => {
          setOpen();
          setAdd((a) => !a);
        }}
      >
        ADD NEW
      </button>
      {open && !add && <StoryDetail id={open} />}
      {!open && add && <PostStory />}
    </ApolloProvider>
  );
}

export default App;
