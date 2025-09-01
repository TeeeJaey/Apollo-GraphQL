import React, { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { POST_STORY } from "../graphQL/mutations";

export const PostStory = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const [createStory, { error }] = useMutation(POST_STORY);

  const addStory = () => {
    createStory({
      variables: {
        name,
        author,
        genre: genre.split(",").map((g) => g.trim()),
      },
    });
    if (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "20px",
        padding: "10px",
      }}
    >
      <br />
      Name: <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      Author:
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <br />
      Genre:(comma seperated)
      <input value={genre} onChange={(e) => setGenre(e.target.value)} />
      <br />
      <button onClick={addStory}>ADD</button>
    </div>
  );
};
