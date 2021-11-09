import React from "react";

export default {
  title: "Part 1 - Assembly (MIPS)",
  duration: "5 Minutes",
  technology: "Complete Introduction",
  summary: [
    "The building blocks of programming languages",
    "Why is assembly still relevant to us?",
  ],
  page: [
    {
      type: "title",
      text: "Part 1 - Assembly (MIPS)"
    },
    {
      type: "duration",
      text: "5 Minute Read"
    },
    {
      type: "technology",
      text: "Why is Assembly still relevant to us?"
    },
    {
      type: "image-caption",
      address: require("../../assets/part1-1.jpg"),
      caption: "Assembly is the closest programming language to machine code"
    },
    {
      type: "paragraph",
      text:
        "The most primitive programming language is called Assembly. Assembly is a long list of instructions that is assembled (hence the name) into machine code. Each assembly instruction is 1-1 with instruction in machine code, so assembly is basically what is happening in the computer when it runs the code. Most of the instructions use registers, which are just places to store a number on a CPU. Let’s look at some assembly code:"
    },
    {
      type: "code",
      code: `li $1, 10
      addi $2, $1,  5
      sub $3, $2,  $1`
    },
    {
      type: "paragraph",
      text:
        "What exactly does this code do? Let’s look at it line-by-line:"
    },
    {
      type: "paragraph",
      text:
        `"li $1, 10" loads the constant value 10 into register 1. So at this point, register 1 has the value 10 in it`
    },
    {
      type: "paragraph",
      text:
        `"addi $2, $1, 5" Adds 5 to the value in register 1 and stores the result in register 2. So now, Register 1 has the value 10 in it and register 2 has the value 5 + 10 = 15 in it`
    },
    {
      type: "paragraph",
      text:
        `"sub $3, $2, $1" Subtracts the value in register 1 from the value in register 2 and places the result in register 3. So now, register 1 still has the value 10 in it, register 2 has the value 15 in it, and register 3 has 15 - 10 = 5 in it.`
    },
    {
      type: "paragraph",
      text:
        `This is a very simple MIPS program. Doing anything even slightly complicated (like multiplication or division) can use a lot of lines to write.`
    },
    {
      type: "subheader2",
      text:
        `Try it yourself!`
    },
    {
      type: "paragraph",
      text:
        `Click different buttons to see how much code is required for the same functionality in Python, C, and Assembly (MIPS).`
    },
    {
      type: "interactive"
    },
    {
      type: "subheader2",
      text: "What are the advantages of MIPS/Assembly?"
    },
    {
      type: "paragraph",
      text: "Speed! Assembly is much faster than using a proper programming language because it’s exactly what is happening in the CPU. The code doesn’t sacrifice speed to be easier to work with, so it allows doing more complicated processing in less time."
    },
    {
      type: "subheader2",
      text: "What are the disadvantages of MIPS/Assembly? "
    },
    {
      type: "paragraph",
      text: "It is very difficult to use. If you are making any kind of complicated program, there will be a lot of assembly code that is pretty difficult to read. Furthermore, assembly never “crashes” or stops running the program when something incorrect happens, because it is simply following a list of instructions. If you’re lucky, the program will just run a section of code over and over, but otherwise, you will have to search through potentially thousands of lines of code to try and figure out what’s going on."
    },
    {
      type: "subheader2",
      text: "When is MIPS/Assembly used? "
    },
    {
      type: "paragraph",
      text: "Today, basically never. Any practical application will be programmed in at least C, as the C compiler has gotten so good that the speed advantage assembly provides is negligible in today’s hardware. Some notable uses of assembly are NES and SNES games, the code used in the Apollo missions (including the lunar landing), and earlier versions of MS-DOS."
    },
    {
      type: "next-button",
      title: "Part 2 - C",
      link: "/edci-335-website/code/part2"
    }
  ]
};
