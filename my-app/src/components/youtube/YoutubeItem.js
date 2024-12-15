import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-img">
        <img src={props.img} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "Khong co ten phim"}
          </h3>
          <h4 className="youtube-author">
            {props.author || "Khong co ten tac gia"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
