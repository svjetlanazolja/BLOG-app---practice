// import moment from "moment";
import React from "react";
// import { faker } from "@faker-js/faker";

const DateBlog = () => {
  // const myTime = moment().startOf("day").fromNow();
  // console.log(moment("20111031", "YYYYMMDD").fromNow());

  let d1: any = new Date(); //"now"
  let d2: any = new Date("2022/04/10/12:40:15"); // some date
  let diff = Math.abs(d1 - d2); // difference in milliseconds
  let showDiff: any;

  if (diff > 60000 && diff < 3600000) {
    // console.log(
    //   "diff je u minutama: " + Math.floor(diff / 60000) + " minutes ago"
    // );
    diff = Math.floor(diff / 60000);
    showDiff = `${diff} minutes ago`;
  } else if (diff > 3600000 && diff < 86400000) {
    // console.log(
    //   "diff je u satima: " + Math.floor(diff / 3600000) + " hours ago"
    // );
    diff = Math.floor(diff / 3600000);
    showDiff = `${diff} hours ago`;
  } else if (diff > 86400000 && diff < 2629746000) {
    // console.log(
    //   "diff je u danima: " + Math.floor(diff / 86400000) + " days ago"
    // );
    diff = Math.floor(diff / 86400000);
    showDiff = `${diff} days ago`;
  } else if (diff > 2629746000 && diff < 31557600000) {
    // console.log(
    //   "diff je u mjesecima: " + Math.floor(diff / 2629746000) + " months ago"
    // );
    diff = Math.floor(diff / 2629746000);
    showDiff = `${diff} months ago`;
  }

  // let a = moment([2022, 1, 29, 1, 21, 23]);
  // let b = moment([2022, 8, 28, 12, 20, 3]);
  // let c = a.diff(b, "months"); // 1
  // console.log("c je" + Math.abs(c));
  // console.log(moment(1318874398806).valueOf());

  // console.log(diff);
  return (
    <>
      <span>{showDiff}</span>
    </>
  );
};

export default DateBlog;
