import { createContext, useCallback, useMemo, useReducer } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    addInitialPosts:() => { },
    deletePost: () => { }
});

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currentPostList.filter(post => post.id !== action.payload.postId)
    }
    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currentPostList]

    }
    else if (action.type === 'ADD_INITIAL_POSTS') {
        newPostList = action.payload.posts;
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {

        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,

            },
        });
    };

    const addInitialPosts = (posts) => {

        dispatchPostList({
            type: 'ADD_INITIAL_POSTS',
            payload: {
                posts,

            },
        });
    };

    const deletePost = useCallback(
        (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            },
        });
     },
     [dispatchPostList]
);

const arr=[5,2,6,7,4]
const sortedArr=useMemo(()=>arr.sort(),[arr]);

    return (
        <PostList.Provider value={
            {
                postList,
                addPost,
                addInitialPosts,
                deletePost
            }

        }>
            {children}
        </PostList.Provider>
    );
};



export default PostListProvider;