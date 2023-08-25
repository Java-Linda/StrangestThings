const COHORT_NAME = '2306-GHP-ET-WEB-FT-SF';
const BASE_URL = `https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF`;
const URL_POSTS = `https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/posts`;

// getting all posts
export async function fetchAllPosts(){
    try {
        const response = await fetch(`${URL_POSTS}`);
        const listings = await response.json();
        //const allPosts = listings.data.posts;
        return listings;
    } catch (error) {
        console.error("Cannot fetch all posts", error)
    }
};