import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    posts:[]
}

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