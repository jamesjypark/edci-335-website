import React from "react";

export default {
  title: "Meditap",
  duration: "2019 Spring - Present",
  technology: "React Native, React, NFC, Firebase",
  summary: [
    "Anticipated project launch in Nigeria in Early 2020",
    "Project acquired by the Canadian Network for International Surgery",
    "Joule Healthcare Innovation Award for Biggest Potential Impact"
  ],
  page: [
    {
      type: "title",
      text: "Meditap – Medical Records Through NFC Technology"
    },
    {
      type: "duration",
      text: "2019 Spring - Present"
    },
    {
      type: "technology",
      text: "React Native, React, NFC, Firebase"
    },
    {
      type: "image",
      address: require("../../assets/meditap1.png")
    },
    {
      type: "paragraph",
      text:
        "Meditap is a cross-platform application leveraging NFC (near-field communication) technology to make medical records accessible for marginalized populations. Meditap was acquired by the Canadian Network for International Surgery in June 2019 and is currently under development as part of the Community Maternal Danger Score project aimed at reducing maternal mortality in Nigeria."
    },
    {
      type: "subheader",
      text: "Project Overview"
    },
    {
      type: "paragraph",
      text:
        "Meditap started at Hatching Health 2019, a medical innovation event held at the University of British Columbia focusing on cross-disciplinary innovation from students in medical and technology fields. Our initial solution was an application leveraging NFC technology to empower marginalized populations with their personal health information on NFC tags."
    },
    {
      type: "image",
      address: require("../../assets/meditap2.jpg")
    },
    {
      type: "subheader",
      text: "Current Progress"
    },
    {
      type: "paragraph",
      text:
        "After winning the Joule Innovation Award for Biggest Potential Impact and being named Medical Device Design Centre’s Award Finalist, Meditap has been acquired by the Canadian Network for International Surgery (CNIS) in June 2019."
    },
    {
      type: "image",
      address: require("../../assets/meditap3.png")
    },
    {
      type: "paragraph",
      text:
        "CNIS is an international non-governmental organization focusing on improvements in health and safety in developing nations. I have been very closely working with Dr. Ronald Lett, the CEO of CNIS and adjunct professor at UBC and McGill, to construct an intuitive and efficient application that can save lives."
    },
    {
      type: "paragraph",
      text:
        "In May and June 2019, Meditap successfully completed beta-testing in Kenya and Tanzania. The app is currently under evaluation in Nigeria."
    },
    {
      type: "subheader",
      text: "Technical Overview"
    },
    {
      type: "paragraph",
      text:
        "Meditap is composed of three major components: mobile application, web application, and Firebase backend server. As the only software developer in the project, I learned to develop in different platforms and weave them together to create one coherent system."
    },
    {
      type: "subheader2",
      text: "Mobile Application"
    },
    {
      type: "paragraph",
      text:
        "Meditap started as a mobile application, and it continues to remain very much a mobile-oriented project. The app is built with React Native, using NDEF (NFC Data Exchange Format) to write patient medical information on NFC tags."
    },
    { type: "video", url: "https://www.youtube.com/embed/Sbqj1mVkeT8" },
    {
      type: "paragraph",
      text:
        "Because the project started as a prototype for a 24-hour hackathon, the process of modularizing the code and implementing a robust structure was challenging. However, I was able to encapsulate independent functionalities and structure the app from reusable components; creating a flexible and robust program."
    },
    {
      type: "paragraph-link",
      text: [
        "One of the challenges I ran into while storing patient information on NFC tags was that the memory size was insufficient to store patient data. After comparing different compression algorithms, I implemented a variation of the ",
        <a
          href="https://en.wikipedia.org/wiki/Huffman_coding"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Huffman coding
        </a>,
        " by creating a ",
        <a
          href="https://www.npmjs.com/package/generate-variable"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          simple npm library
        </a>,
        " and mapping patient object to a known list of constants. I was able to successfully compress the data and store data on NFC tags."
      ]
    },
    {
      type: "subheader2",
      text: "Web Application and Firebase Backend"
    },
    {
      type: "paragraph",
      text:
        "Another important aspect of the CMDS project is to analyze the information collected from the mobile device and conduct a study to further improve the project. In order to allow healthcare workers to easily access the data, I developed a data viewer using React web application connected to Firebase. "
    },
    {
      type: "paragraph",
      text:
        "Throughout the project, I spent countless nights modifying (and completely breaking) the application according to the feedback I received from Dr. Lett and medical professionals. The experience, despite being moderately painful, allowed me to deeply understand and appreciate design patterns that goes inside building a robust and flexible program."
    }
  ]
};
