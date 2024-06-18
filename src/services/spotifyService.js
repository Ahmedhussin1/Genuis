import axios from "axios";

const CLIENT_ID = "43e6f0c7d628499e98cd0188e624c741";
const CLIENT_SECRET = "3cd0062805f648b0801e32127646c47a";

// Function to get access token
const getAccessToken = async () => {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      },
    }
  );

  return response.data.access_token;
};

// function to search for items 

export const searchSpotify = async (
  query,
  type ,
  limit = 20,
  market = "US"
) => {
  const token = await getAccessToken();
  const response = await axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      q: query,
      type: type,
      limit: limit,
      market: market,
    },
  });
  return response.data;
};

