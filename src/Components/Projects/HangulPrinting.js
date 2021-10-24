import React from "react";

export default {
  title: "Hangul Printing",
  duration: "2018 Winter",
  technology: "SolidWorks, MakerBot Print",
  summary: ["Design Applications of the Korean Alphabet"],
  page: [
    {
      type: "title",
      text: "Hangul Printing — Design Applications of the Korean Alphabet"
    },
    {
      type: "duration",
      text: "2018 Winter"
    },
    {
      type: "technology",
      text: "SolidWorks, MakerBot Print"
    },
    {
      type: "paragraph",
      text: "Designing physical objects using the Korean alphabet"
    },
    {
      type: "image",
      address: require("../../assets/hangul1.jpg")
    },
    {
      type: "subheader",
      text: "Project Overview"
    },
    {
      type: "paragraph",
      text:
        "The Korean alphabet — commonly known as Hangul (한글) — is a syllabic writing system that allows the entire Korean vocabulary to be scribed with a combination of just 14 consonants and 10 vowels. Largely due to its simplicity and symmetrical structure, many designers take the alphabet as a design inspiration."
    },
    {
      type: "paragraph-link",
      text: [
        "While reading about the different aspects of the alphabet, I was inspired by ",
        <a
          href="https://medium.com/@minzikang/design-lessons-from-the-korean-alphabet-383191ee7d4d"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Minzi Kang’s article
        </a>,
        " on design applications of Hangul, and decided to use it on my own design."
      ]
    },
    {
      type: "paragraph",
      text:
        "I began by going through the shape of everyday objects and trying to identify overlaps with the shape of the word in Hangul. Below are some of my favourite outcomes."
    },
    {
      type: "subheader",
      text: "책, book"
    },
    {
      type: "paragraph",
      text:
        "By moving the characters ㅊ and ㄱ to the side, 책 turned into a book holder."
    },
    {
      type: "image",
      address: require("../../assets/hangul2.png")
    },
    {
      type: "paragraph",
      text:
        "After initial sketch, I used SolidWorks to turn the sketch into a CAD model."
    },
    {
      type: "image",
      address: require("../../assets/hangul3.png")
    },
    {
      type: "image",
      address: require("../../assets/hangul4.png")
    },
    {
      type: "paragraph",
      text:
        "Using the 3D printers available at the university's digital commons, I 3D-printed the CAD model."
    },
    {
      type: "image",
      address: require("../../assets/hangul5.jpg")
    },
    {
      type: "image",
      address: require("../../assets/hangul6.jpg")
    },
    {
      type: "subheader",
      text: "공, ball"
    },
    {
      type: "paragraph",
      text: "By using the ㅇ as the ball, 공 turned into a ball with a grip."
    },
    {
      type: "image",
      address: require("../../assets/hangul7.png")
    },
    {
      type: "paragraph",
      text: "After the sketch, I made a CAD model again"
    },
    {
      type: "image",
      address: require("../../assets/hangul8.png")
    },
    {
      type: "image",
      address: require("../../assets/hangul9.png")
    },
    {
      type: "paragraph",
      text: "and 3D-printed the CAD again using MakerBot printer."
    },
    {
      type: "image",
      address: require("../../assets/hangul10.jpg")
    }
  ]
};
