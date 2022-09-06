import React from "react";

const DateBlog = () => {
  let d1: any = new Date(); //"now"
  let d2: any = new Date("2022/04/10/12:40:15"); // some date
  let diff = Math.abs(d1 - d2); // difference in milliseconds
  let showDiff: any;

  if (diff > 60000 && diff < 3600000) {
    diff = Math.floor(diff / 60000);
    showDiff = `${diff} minutes ago`;
  } else if (diff > 3600000 && diff < 86400000) {
    diff = Math.floor(diff / 3600000);
    showDiff = `${diff} hours ago`;
  } else if (diff > 86400000 && diff < 2629746000) {
    diff = Math.floor(diff / 86400000);
    showDiff = `${diff} days ago`;
  } else if (diff > 2629746000 && diff < 31557600000) {
    diff = Math.floor(diff / 2629746000);
    showDiff = `${diff} months ago`;
  }
  return (
    <>
      <span>{showDiff}</span>
    </>
  );
};

export default DateBlog;
