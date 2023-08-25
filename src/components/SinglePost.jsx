// to fetch a single post if I got auth tokens working
export const fetchSinglePost = async (postId) => {
    try {
        const response = await fetch(`${URL_POSTS}/${postId}`);
        const listing = await response.json();
        const singleListing = listing.data.post;
        return singleListing;
    } catch (error) {
        console.error("Can't fetch post", error)
    }
};