import React from "react";
import selfPic from "../assets/img/selfpic.jpg";

export default function Top() {
  const firstName = "Sofiane";
  const lastName = "Belkessa";

  return (
    <div className="top">
      <div>
        <span className="name">
          {firstName} {lastName}
        </span>
      </div>
      <img src={selfPic} alt="Profile Picture" className="profile-picture" />
    </div>
  );
}
