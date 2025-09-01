import React, { useEffect } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_STORY_DETAIL } from "../graphQL/queries";

export const StoryDetail = ({ id }) => {
  const { data } = useQuery(GET_STORY_DETAIL, {
    variables: { id },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!data?.getStory) return null;
  return (
    <div>
      <div style={storyDetailCss}>
        <div>{data.getStory.id}</div>
        <div>{data.getStory.name}</div>
        <div>QTY : {data.getStory.qty}</div>
        <div>LIKED : {data.getStory.liked ? "YES" : "NO"}</div>
        <div>{data.getStory.metadata[0].author}</div>
        <div>{data.getStory.metadata[0].genre.join(" | ")}</div>
      </div>
    </div>
  );
};

const storyDetailCss = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "lightgrey",
  border: "1px solid black",
  padding: "8px 16px",
  margin: "10px",
};
