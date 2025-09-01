import React, { useEffect } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_STORIES } from "../graphQL/queries";

export const Stories = ({ openStory }) => {
  const { data } = useQuery(GET_STORIES);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!data?.stories) return null;
  return (
    <div>
      {data?.stories?.map((story) => (
        <div style={storyCss} onClick={() => openStory(story.id)}>
          {story.name}
        </div>
      ))}
    </div>
  );
};

const storyCss = {
  backgroundColor: "lightgrey",
  border: "1px solid black",
  padding: "8px 16px",
  margin: "10px",
};
