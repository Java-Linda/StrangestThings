import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API/Index";

export default function allPosts() {
  const [posts, setPosts] = useState ([]);
  const [error, setError] = useState (null);
  const [searchParam, setSearchParam] = useState ("");

  useEffect(() => {
      async function getAllPosts() {
          const APIResponse = await fetchAllPosts();
          if (APIResponse.success) {
              setPosts(APIResponse.data.posts);
          } else {
              setError(APIResponse.error.message);
          }
      }
      getAllPosts();
  }, []);

  const postsToDisplay = searchParam
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchParam)
      )
    : posts;
    return (
      <div>
        <div>
          <label>
            Search:{""}
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setSearchParam(e.target.value).toLowerCase()}
            />
          </label>
        </div>
        {postsToDisplay.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <h4>{post.description}</h4>
              <h4>{post.price}</h4>
              <button
                onClick={() => {
                  navigate(`/posts/${post.id}`);
                }}
              >
                Message Here
              </button>
            </div>
          );
        })}
      </div>
  );
}