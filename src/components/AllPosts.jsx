import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API/Index";
import Searchbar from "./Searchbar"

//creating my main function to be exported
export default function allPosts() {
    const [posts, setPosts] = useState ([]);
    const [error, setError] = useState (null);

//action to get posts
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

// posts being returned with a searchbar above    
     return (
         <div id="all-posts-gallery">
            <Searchbar />
			</div>
    );

}