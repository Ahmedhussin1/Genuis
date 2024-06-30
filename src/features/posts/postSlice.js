import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  posts: [
    {
      title: "This Makes Me Feel Alive",
      text: "The piano, the echoing voice in the background, the distortion on his singing, the vocoder solo: every single element of this track is spine-tingling, hauntingly beautiful. Combine that with Pusha’s verse and it becomes Greek tragedy rap: it takes the clichéd ideas of power, sex, money and removes all the glamour from them.",
      songName: "runaway",
      rating: 5,
      id: "",
    },
    {
      title: "Daft Punk’s synths on this though…",
      text: "This is the perfect opener. He knew that many fans wouldn’t like Yeezus and he is basically saying that he doesn’t give a fuck and this album is gonna be what we need, not what we want.",
      rating: 5,
      id: "",
    },
  ],
};

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        addPost:{
            reducer(state,action){
                state.posts.push(action.payload)
            },
            prepare({title,text,songName,rating}){
                return{
                    payload:{
                        id: nanoid(),
                        title,
                        text,
                        songName,
                        rating,
                        createdAt:new Date().toISOString(),
                    }
                }
            }
        } 
    }
})

export const {addPost} = postSlice.actions;
export default postSlice.reducer;