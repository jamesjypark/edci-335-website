import React from "react";

export default {
  title: "ASKEY",
  duration: "2019 Spring",
  technology: "React, Sketch, FFmpeg, TTYD",
  summary: [
    "nwHacks 2019 Runner-up Winner",
    "Hootsuite Hack that Best Champions the Power of Human Connection",
    "The Wolfram Award"
  ],
  page: [
    {
      type: "title",
      text: "ASKEY – Efficient Video Calling with ASCII Characters"
    },
    {
      type: "duration",
      text: "2019 Spring"
    },
    {
      type: "technology",
      text: "React, Sketch, FFmpeg, TTYD"
    },
    {
      type: "image",
      address: require("../../assets/askey1.gif")
    },
    {
      type: "paragraph",
      text:
        "ASKEY is an ASCII-representation video calling web application. By converting image frames into ASCII characters resembling the image, the application provides key features of video calling while providing a stable video calling experience for users in low bandwidth environments. "
    },
    {
      type: "subheader",
      text: "Project Overview"
    },
    {
      type: "paragraph",
      text:
        "While video calling has brought the world closer together over the past couple decades, stable video connection remains a luxury only for internet users in high bandwidth and low latency environments."
    },
    {
      type: "paragraph",
      text:
        "At nwHacks 2019, our team decided to tackle this problem by coming up with a solution to preserve key features of videotelephony while reducing the amount of data needed to be exchanged for stable video calling."
    },
    {
      type: "paragraph",
      text:
        "Our solution was to convert each image into a string of ASCII characters with recognizable facial features and exchanging the string instead of image frames. Using ffmpeg, an open-source library for manipulating input, we were able to successfully make a video connection while using 44 times less data compared to 480p video call."
    },
    {
      type: "paragraph",
      text:
        "ASKEY was presented at nwHacks 2019, Western Canada’s largest hackathon with over 133 competing teams. ASKEY was the runner-up winner and won the following awards:"
    },
    {
      type: "list",
      list: [
        "nwHacks 2019 Finalists 2nd place",
        "Hootsuite - Hack that Best Champions the Power of Human Connection",
        "The Wolfram Award",
        ".TECH - Best Hack on .TECH Domain"
      ]
    },
    {
      type: "image",
      address: require("../../assets/askey2.jpg")
    },
    {
      type: "paragraph-link",
      text: [
        "Checkout our ",
        <a
          href="https://github.com/ValRat/ascii-chat"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Github repo
        </a>,
        " and ",
        <a
          href="https://devpost.com/software/ascii-chat-zh6x7m"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Devpost
        </a>
      ]
    }
  ]
};
