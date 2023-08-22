import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API/Index";
import Searchbar from "./Searchbar"

export default function allPosts() {
    const [posts, setPosts] = useState ([]);
    const [error, setError] = useState (null);

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

     return (
         <div id="all-posts-gallery">
            <Searchbar />
			</div>
    );

}