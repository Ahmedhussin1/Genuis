// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   posts: [
//     {
//       title: "This Makes Me Feel Alive",
//       text: "The piano, the echoing voice in the background, the distortion on his singing, the vocoder solo: every single element of this track is spine-tingling, hauntingly beautiful. Combine that with Pusha’s verse and it becomes Greek tragedy rap: it takes the clichéd ideas of power, sex, money and removes all the glamour from them.",
//       songName: "runaway",
//       rating: 5,
//       id: "",
//     },
//     {
//       title: "Daft Punk’s synths on this though…",
//       text: "This is the perfect opener. He knew that many fans wouldn’t like Yeezus and he is basically saying that he doesn’t give a fuck and this album is gonna be what we need, not what we want.",
//       songName: "on sight",
//       rating: 5,
//       id: "",
//     },
//   ],
// };

// const postSlice = createSlice({
//   name: "post",
//   initialState,
//   reducers: {
//     addPost: {
//       reducer(state, action) {
//         state.posts.push(action.payload);
//       },
//       prepare({ title, text, songName, rating }) {
//         return {
//           payload: {
//             id: nanoid(),
//             title,
//             text,
//             songName,
//             rating,
//             createdAt: new Date().toISOString(),
//           },
//         };
//       },
//     },
//   },
// });

// export const { addPost } = postSlice.actions;
// export default postSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8000/posts";

// fetching posts using user id
export const fetchPostsByUser = createAsyncThunk(
  "posts/fetchPostByUser",
  async (userId) => {
    const response = await axios.get(`${BASE_URL}?userId=${userId}`);
    return response.data;
  }
);

//adding posts 
export const addPosts = createAsyncThunk("posts/addPost", async (newPost) => {
  const response = await axios.post(BASE_URL, newPost);
  return response.data;
});

//delete posts 

export const deletePost = createAsyncThunk("posts/deletePost",async (postId)=>{
  await axios.delete(`${BASE_URL}/${postId}`)
  return postId
})

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsByUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostsByUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPostsByUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addPosts.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deletePost.fulfilled,(state,action)=>{
        state.posts = state.posts.filter(post => post.id !== action.payload)
      })
  },
});

export default postSlice.reducer;
