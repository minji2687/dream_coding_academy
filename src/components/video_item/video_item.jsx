import React from "react";
import style from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={style.container}>
      <div className={style.video}>
        <img
          className={style.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="thumbnails"
        />
        <div className={style.medadata}>
          <p className={style.title}>{snippet.title}</p>
          <p className={style.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
