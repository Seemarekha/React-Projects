import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currentPostList.filter(post => post.id !== action.payload.postId)
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = () => {

    }
    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            }
        })

    }

    return (
        <PostList.Provider value={
            {
                postList,
                addPost,
                deletePost
            }

        }>
            {children}
        </PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going to Goa',
        body: 'Hi friens, I am going to Goa for my vacation. Hope to enjoy a lot. Peace out.',
        reactions: 2,
        userId: 'user-13',
        tags: ['vacation', 'Goa', 'Enjoying']
    },
    {
        id: '2',
        title: 'Pass ho gya bhai',
        body: '4 saal ki masti k baad v ho gye hain pass. Hard to believe.',
        reactions: 15,
        userId: 'user-9',
        tags: ['Graduating', 'Unbelievable']
    }
];

export default PostListProvider;