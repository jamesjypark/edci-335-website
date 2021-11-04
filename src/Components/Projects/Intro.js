import React from "react";

export default {
  title: "Intro",
  duration: "5 Minutes",
  technology: "No requirements",
  summary: [
    "Introduction to different programming languages",
    "Why starting with the right programming language is important",
  ],
  page: [
    {
      type: "title",
      text: "Intro"
    },
    {
      type: "duration",
      text: "5 Minute Read"
    },
    {
      type: "technology",
      text: "Introduction to different programming languages"
    },
    {
      type: "image",
      address: require("../../assets/intro-1.jpg")
    },
    {
      type: "paragraph",
      text:
        "Suppose that you have just taken a new job in a different city and need to find a place to live there. Your work has offered to help you find a place to live by hiring three contracting companies to make a plan to find you a house. Each contractor writes up a plan and presents you with their idea on how to best provide housing."
    },
    {
      type: "subheader",
      text: "Company One's plan"
    },
    {
      type: "image",
      address: require("../../assets/intro-2.jpg")
    },
    {
      type: "paragraph",
      text:
        "Company One has the simplest plan - they will just buy a home assembly kit and an empty plot of land. Then the company will simply assemble the house on the plot of land (hooking it up to the plumbing and electricity) after which you can move in. This is the fastest plan, as the company will only need a couple of days to fully assemble the house, as well as the cheapest. However, it provides the least amount of customization, as your only choices are choosing the location and assembly kit from a list the company has provided you."
    },
    {
      type: "subheader",
      text: "Company Two's plan"
    },
    {
      type: "paragraph",
      text:
        "Company Two’s plan allows for more customization: They will also buy a plot of land, buy write up blueprints for a house and build it from scratch, using planks of wood bought in bulk. This will allow you to be a part of the design process and have creative input into the design of the house. However, this plan will also take much longer than the first one, as company two will have to complete the designing and planning before purchasing any materials or beginning the construction. Their plan will also be more expensive not only due to the increased number of manhours, but also because buying the materials separately will cost more."
    },
    {
      type: "subheader",
      text: "Company Three's plan"
    },
    {
      type: "paragraph",
      text:
        "Finally, Company Three’s plan is the most ambitious. They propose buying raw materials (logs and iron and stone) and fashioning the building materials themselves. This will allow for an insane level of customization as well as the contracting company’s guarantee about the quality down to a single plank of wood. However, it is also the most expensive plan by far, as well as the slowest. Company three will have to complete an even more intense planning phase, and then begin preparing the material before construction can begin."
    },
    {
      type: "paragraph",
      text:
        "So which company do you choose?"
    },
    {
      type: "image",
      address: require("../../assets/intro-3.jpg")
    },
    {
      type: "paragraph",
      text:
        "The answer usually lies in the details. What is your budget for this house? How long are you willing to wait before moving in? How much customization do you need? What are your exact needs for your house, and what options does each plan provide to meet them? A regular employee would most likely choose option one, as being able to move in ASAP would be a big plus. However, if the employee was an eccentric millionaire living in a very nice hotel, they might be more inclined to choose option 3 since time or money are not a major concern for them."
    },
    {
      type: "paragraph",
      text:
        "Software developers have to make decisions like this all the time. Whenever starting a new project or extending an existing one, a programmer has to choose which language, libraries, environments, and platforms the project will use, taking into consideration the time constraints, budget, amount of work, and finished product. Thus, these decisions can often make or break a project. In this blog, we’re going to look at three different programming languages, their strengths and weaknesses, which projects they excel at and when they are often used in modern day."
    }
  ]
};
