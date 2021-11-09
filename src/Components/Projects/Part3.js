export default {
  title: "Part 3 - Python",
  duration: "10 Minutes",
  technology: "Complete Intro, Part 1, and Part 2",
  summary: [
    "High-level language used and loved by everyone",
    "When is Python a good time to use? When is it not?",
  ],
  page: [
    {
      type: "title",
      text: "Part 3 - Python"
    },
    {
      type: "duration",
      text: "10 Minutes"
    },
    {
      type: "technology",
      text: "What does Python do and how is it so simple?"
    },
    {
      type: "image",
      address: require("../../assets/part3-1.png")
    },
    {
      type: "paragraph",
      text: "Python is the last language we’re going to look at. It is a very high-level language that is much easier to use than C. For example, our C program example could be written in python as simply:"
    },
    {
      type: "code",
      code: `x = 10 + 5
name = “Billy Bob”
print(“Hello, my name is %s and my favourite number is %s” % (x, name))`
    },
    {
      type: "paragraph",
      text: "No need for int main or variable types. Every variable in python can hold any data type (an int, a string, etc). This makes python much easier to work with than C, but slower since it has to type-check everything and manage the sizes of all the variables on the go."
    },
    {
      type: "paragraph",
      text: "However, it’s so high level that sometimes it can almost pass for English. For example, the following code is perfectly valid in python:"
    },
    {
      type: "code",
      code: `if name is “John Doe”:
  print(“Hello Anonymous”)
else:
  print(“Hello ” + name”)`
    },
    {
      type: "paragraph",
      text: ""
    },
    {
      type: "subheader2",
      text:
        `Try it yourself!`
    },
    {
      type: "paragraph",
      text:
        `Click different buttons to see how Python accomplishes different tasks.`
    },
    {
      type: "interactive",
      languages: ["python"]
    },
    {
      type: "paragraph",
      text: "As you can see, Python requires a fraction of the code required by other programming languages. This is the power of Python - it allows programmers to implement software programs quickly without being tied to the specifics of the computer."
    },
    {
      type: "subheader2",
      text: "What are the advantages of Python?"
    },
    {
      type: "paragraph",
      text: "Python is much, much faster to write programs than C. Like the analogy of house building kits, Python provides many pre-existing functionalities. Thus, programmers work much quicker in Python than in most other languages. Since they don’t have to manually manage all the variable types or wait for (sometimes quite long) compile times, Python (and other languages like it) are often used by developers who need to create a working product quickly. "
    },
    {
      type: "image-caption",
      address: require("../../assets/part3-2.png"),
      caption: "Python package manager (PIP) allows developers to integrate from thousands of existing code modules."
    },
    {
      type: "paragraph",
      text: "Python also has a package manager built into it, which means that developers can share code quickly and securely. This has led to thousands of Python libraries available for free to use in any project, meaning that it’s even easier to start working in Python as most of your work may be already done for you."
    },
    {
      type: "subheader2",
      text: "What are the disadvantages of Python?"
    },
    {
      type: "paragraph",
      text: "Python is quite a bit slower than C since it has to manage everything that the programmer does not. It needs to dynamically figure out what size each variable is, what type each variable is, whether two variables can be added together, as well as a lot of other things going on under the hood. Python also uses a memory management system called garbage collection, which is necessary to figure out which variables are no longer needed but slows down runtime even more."
    },
    {
      type: "subheader2",
      text: "What is Python used for today?"
    },
    {
      type: "paragraph",
      text: "One of Python’s main uses today is to make a web server application. Since the information is being sent over the internet, using slower, easier languages makes sense since they can be quite slow but still be negligible compared to transmitting data over the internet. Django is one of the top server application libraries, with 60.5K starts (the equivalents of likes) on GitHub. Python is also quite often used in data science since it’s easy for non-programmers or amateur programmers to work with and speed is less important since each query is often only run a couple of times to generate graphs filled with the collected data. Thus, the developer saves more time on development than they lose when running the program."
    },
    {
      type: "next-button",
      title: "Outro",
      link: "/edci-335-website/code/outro"
    }
  ]
};
