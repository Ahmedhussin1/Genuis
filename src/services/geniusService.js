import axios from 'axios';


const ACCESS_TOKEN =
  "KVPjXzyOZS-Q0erJmKB8QiQSeb1RTRD-wXgnRmhUiU6SlD5DPt6ookplNmrPXYHC";


const geniusApi = axios.create({
  baseURL: "/api",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});


// function to search for a song by name

export const searchSong =async (title) => {
  try{
    const response = await geniusApi.get('/search',{
      params:{q:title}
    })
    return response.data.response.hits
  }catch(error){
    console.error('Error Fetching Data From Genius API', error)
    throw error
  }
}

// function to fetch a song by its id 

export const randomSong = async (id) =>{
  try{
    const response = await geniusApi.get(`/songs/${id}`)
    return response.data.response.song
  }catch(error){
    console.error('Error Fetching Song Data From Genius API', error)
    throw error
  }
}