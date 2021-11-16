export default {
  title: "Outro",
  duration: "5 Minutes",
  technology: "Complete Intro, Part1, Part 2, and Part 3",
  summary: [
    "Ending thoughts",
    "Key takeaways",
  ],
  page: [
    {
      type: "title",
      text: "Outro"
    },
    {
      type: "duration",
      text: "5 Minutes"
    },
    {
      type: "technology",
      text: "What are our takeaways?"
    },
    {
      type: "image",
      address: require("../../assets/outro-1.png"),
    },
    {
      type: "paragraph",
      text: "Assembly, Python, and C are just a few of the programming languages that are used to create software programs that are ubiquitous in our lives. As evident from the blog posts, each of the languages has very different characteristics, and respective strengths and weaknesses."
    },
    {
      type: "subheader2",
      text: "The difference in lines of code"
    },
    {
      type: "paragraph",
      text: "Interact with the below code interactors to see the difference in the lines of code required to accomplish different tasks in different languages."
    },
    { 
      type: "interactive",
      languages: ["mips", "c", "python"]
    },
    {
      type: "paragraph",
      text: "As you can see, the amount of code required varies drastically between MIPS, C, and Python. However, we have learned that MIPS runs much faster than C, and C runs much faster than Python. "
    },
    {
      type: "subheader2",
      text: "Finishing thoughts"
    },
    {
      type: "paragraph",
      text: "This learning resource could lead to the reader feeling that there are too many languages that they’ll need to learn. However, just like how different types of housing are still housing, different programming languages are, at the core, just a tool to express our thoughts with the computer."
    },
    {
      type: "paragraph",
      text: "We hope you've found this learning resource helpful and we wish you the best in your programming endeavours in the future!"
    },
    {
      type: "button",
      button_text: "Final Assessment",
      link: "https://docs.google.com/forms/d/1juK3Pr_H9Tor5OjrU3amXQOrMXEzf0npJ8XU7JJ2YBU/edit"
    },
    {
      type: "next-button",
      title: "Rationale",
      link: "/edci-335-website/code/rationale"
    }
  ]
};
