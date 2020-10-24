import React, { useState, useEffect } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyAh32w91Dsh7-u4PwWq2YFRyH0-ZePFwUw",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setvideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
