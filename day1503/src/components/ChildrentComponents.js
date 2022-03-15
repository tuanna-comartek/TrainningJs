import { useEffect, useState } from "react";

export default function ChildComponents({ getData }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData("posts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  }, [getData]);
  return (
    <>
      <p>{JSON.stringify(posts)}</p>
    </>
  );
}
