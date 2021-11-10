export default {
  title: "Part 2 - C Language",
  duration: "10 Minutes",
  technology: "Complete Intro and Part 1",
  summary: [
    "The first modern programming language",
    "What are the characteristics of C and how are they relevent?",
  ],
  page: [
    {
      type: "title",
      text: "Part 2 - The C Language"
    },
    {
      type: "duration",
      text: "10 Minutes"
    },
    {
      type: "technology",
      text: "What is C and how is it used?"
    },
    {
      type: "image",
      address: require("../../assets/part2-1.png")
    },
    {
      type: "paragraph",
      text: "In the last chapter, we learned about how Assembly is a powerful programming language that provides fast and customizable code. However, it takes too long to write any meaningful software quickly. As a result, programmers created a new language that allows many of the repetitive processes in Assembly to be automated, and that is our next language of interest."
    },
    {
      type: "paragraph",
      text: "C is the lowest-level programming language that is still in widespread use today. C code is somewhat readable but still logical and formal enough to be turned into machine code without any ambiguity. Rather than simply loading and saving directly onto a CPU’s registers, C allows the programmer to use variables, which assign a name to a value. "
    },
    {
      type: "paragraph",
      text: `The programmer can then use that variable in the code, and when they hit compile, the compiler will automatically figure out which variables will be stored on which registers at what time.
      Let’s look at some C code:`
    },
    {
      type: "code",
      code: `int main() {
        int x = 10 + 5;
        x = x - 12;
        const char* name = “Billy Bob”;
        printf(“My name is %s, my favourite number is %d\\n”, name, x)
}`
    },
    {
      type: "paragraph",
      text: "Let’s break down what’s going on here:"
    },
    {
      type: "paragraph",
      text: `"int main() { .... }" This tells the compiler where to start running the code from. Everything inside the curly brackets will run when the program is started`
    },
    {
      type: "paragraph",
      text: `"int x = 10 + 5" This creates a variable called x and assigns the value 10 + 5 = 15 to it`
    },
    {
      type: "paragraph",
      text: `"x = x - 12" This calculates x - 12 = 15 - 12 = 3 and stores that value in x. So x now has 3 in it`
    },
    {
      type: "paragraph",
      text: `"const car* name = “Billy Bob”" This creates a variable called “name” that has the value “Billy Bob” in it. The reason this variable has const char* instead of int is because C needs every variable to have a type. int means that the variable’s type is an integer (i.e. 5, 12, -452) and const char* means that the variable’s type is a string, which just means a bunch of characters ‘stringed’ together (i.e. “hello”, “how are you today”, “abcdefghij….”). Since “Billy Bob” is a string and not an int, we use const char*.`
    },
    {
      type: "paragraph",
      text: `"printf(“My name is %s, my favourite number is %d\n”, name, x)" This is one of the built-in methods in C, called printf. It prints some text to the console. We pass it three different values:`
    },
    {
      type: "paragraph",
      text: `“My name is %s, my favourite number is %d” This is the text that we want to print. Notice how there’s %s and %d in it. Those will be replaced by the next two values`
    },
    {
      type: "paragraph",
      text: `"name" is what we want to replace %s`
    },{
      type: "paragraph",
      text: `"x" is what we want to replace %d`
    },
    {
      type: "paragraph",
      text: "So running that printf statement will print “Hello, my name is Billy Bob and my favourite number is 3, since name has the value Billy Bob and x has the value 3."
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
        `Click different buttons to see how much C code is needed for different tasks.`
    },
    {
      type: "interactive",
      languages: ["c"]
    },
    {
      type: "paragraph",
      text: ""
    },
    {
      type: "subheader2",
      text: "What are the advantages of C?"
    },
    {
      type: "paragraph",
      text: "Even though it’s slower than assembly, C is still much, much faster than most other programming languages. Since C is compiled, the compiler can perform many different performance-improving tricks to make the program run significantly faster. C also generally tends to use less memory than other programming languages, since each variable has a different type (and therefore a known size) and each variable is discarded as soon as it is not needed."
    },
    {
      type: "subheader2",
      text: "What are the disadvantages of C?"
    },
    {
      type: "paragraph",
      text: "Compared to most languages, it is still quite difficult to work with. Since each variable has a different type, the programming has to manually keep track of what variable is storing what data type at any given time. For example, const char* x = “Hello” + “ World” is not a valid C code even though it seems obvious to us that x should store the value “Hello World”. However, the compiler doesn’t know what + means unless it is simply adding two numbers together, so the programmer will have to manually implement concatenating two strings together."
    },
    {
      type: "subheader2",
      text: "What is C used for today?"
    },
    {
      type: "paragraph",
      text: "C (And the closely-related C++) are both commonly used anywhere where speed is an important factor. Game Development is still commonly one through C since a faster-running program means that more complicated models and higher-resolution textures can be drawn on the screen without performance issues. C is also commonly used when programming an operating system (such as Windows or macOS) since the operating system needs to manage all the other programs on the computer, and thus can easily become the bottleneck."
    },
    {
      type: "subheader2",
      text: "Let's test your understanding!"
    },
    {
      type: "quiz",
      questions: [
        {
          description: "What does it mean when a language is “static” typed, and how does it impact speed?",
          options: ["Static means code does not move, slower", "Static means variable has a type, faster", "Static means code can be only interpreted one way, faster", "Static means the code was written using C, slower"],
          answer: "Static means variable has a type, faster"
        }
      ]
    },
    {
      type: "paragraph",
      text: ""
    },
    {
      type: "quiz",
      questions: [
        {
          description: "Why is C used for operating systems?",
          options: ["C is the most reliable programming language", "C is the oldest programming language, which means we know a lot about it.", "Many people are experienced in C", "C is much faster than other languages"],
          answer: "C is much faster than other languages"
        }
      ]
    },
    {
      type: "next-button",
      title: "Part 3 - Python",
      link: "/edci-335-website/code/part3"
    },
    {
      type: "paragraph",
      text: ""
    },
  ]
};
