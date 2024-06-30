import axios from "axios";

const KEY = "72a6a718235fc540d1ede44a6b5aead0";

export const fetchTopTrack = async (
  country,
  chartName,
  page = "1",
  pageSize = "20"
) => {
  try {
    const response = await axios.get("/api/musixmatch", {
      params: {
        apiKey: KEY,
        country: country,
        chart_name: chartName,
        page: page,
        page_size: pageSize,
      },
    });
    const trackList = response.data.message.body.track_list;
    return trackList
  } catch (err) {
    console.error("error fetching top chart " + err);
    return [];
  }
};
