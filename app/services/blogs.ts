import { title } from "process";

const blogData = [
  {
    id: 1,
    title: "Getting Started with JavaScript",
    slug: "getting-started-with-javascript",
    content: "JavaScript is a versatile programming language that runs in every modern browser. In this guide, we'll cover variables, functions, loops, and more."
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    slug: "understanding-react-hooks",
    content: "React Hooks were introduced in React 16.8 to allow state and lifecycle features in function components without writing a class."
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which",
    slug: "css-grid-vs-flexbox",
    content: "Both CSS Grid and Flexbox are powerful layout systems, but they serve different purposes. Grid is best for 2D layouts, Flexbox for 1D."
  },
  {
    id: 4,
    title: "Node.js Performance Optimization Tips",
    slug: "nodejs-performance-optimization",
    content: "Node.js is known for its non-blocking I/O, but there are many ways to optimize further, including caching, clustering, and profiling."
  },
  {
    id: 5,
    title: "Introduction to TypeScript Generics",
    slug: "introduction-to-typescript-generics",
    content: "Generics allow you to create components that work with a variety of types while maintaining type safety and code reusability."
  },
  {
    id: 6,
    title: "A Beginner's Guide to Git and GitHub",
    slug: "beginners-guide-git-github",
    content: "Git is a distributed version control system that helps developers track changes and collaborate. GitHub is a platform to host Git repositories."
  },
  {
    id: 7,
    title: "Building REST APIs with Express.js",
    slug: "building-rest-apis-expressjs",
    content: "Express.js is a minimal and flexible Node.js web framework that provides a robust set of features for web and mobile applications."
  },
  {
    id: 8,
    title: "Top 10 VS Code Extensions for Developers",
    slug: "top-vscode-extensions",
    content: "Visual Studio Code is one of the most popular code editors. These extensions will supercharge your development workflow."
  },
  {
    id: 9,
    title: "Understanding Async/Await in JavaScript",
    slug: "understanding-async-await",
    content: "Async/await is syntactic sugar built on top of Promises, making asynchronous code easier to read and write."
  },
  {
    id: 10,
    title: "Introduction to Docker for Developers",
    slug: "introduction-to-docker",
    content: "Docker allows you to package applications and their dependencies into containers, ensuring consistency across environments."
  }
];

 
 

export const getBlogData=()=>{
    return blogData
}


let nextId = 11

export const addBlog=(title:string,slug:string,content:string)=>{
    blogData.push({id:nextId++,content,slug,title})
    
}


export const blogById=(id:number)=>{
  return blogData.find((blog)=>blog.id===id)
}