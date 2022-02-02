import Image from "next/image"
import { Hero } from "@components/common"
import { CourseList, CourseCard } from "@components/course"

const data = [
  {
    id: 1410474,
    type: "Next JS",
    title: "Next JS & Typescript - Full Guide",
    description: "Learn modern Next JS(Next 10+). Code everything in Typescript and integrate with Sanity CMS.",
    coverImage: "https://thrangra.sirv.com/Next_TypeScript_Shopify_Final.jpg",
    author: "Luca Lo Forte",
    link: "https://academy.eincode.com/courses/next-js-typescript-with-shopify-integration-full-guide",
    slug: "next-js-typescript-with-shopify-integration-full-guide",
    wsl: [
      "Build Next JS apps on your own",
      "Build ecommerce apps with modern technologies",
      "Use Shopify to your advantage"
    ],
    createdAt: ""
  },
  {
    id: 1331625,
    type: "Gatsby JS",
    title: "Gatsby JS Developer's Guide - Blog App",
    description: "Learn popular Gatsby JS(Gatsby v3) framework. Use React/GraphQL to build your own blog page with JAMStack architecture.",
    coverImage: "https://thrangra.sirv.com/Gatsby.jpeg",
    author: "Luca Lo Forte",
    link: "https://academy.eincode.com/courses/gatsby-js-developer-s-guide-important-parts-blog-app",
    slug: "gatsby-js-developer-s-guide-important-parts-blog-app",
    wsl: [
      "Build Gatsby JS apps on your own",
      "Build static page apps with modern technologies",
      "Understand meaning and benefits of JAMStack",
      "Use GraphQL to your advantage"
    ],
    createdAt: ""
  },
  {
    id: "1112431",
    type: "Unity",
    title: "The Complete Unity Guide 3D - Game Dev in C#",
    description: "Build 3 games & learn Unity practical way! Start with fundamentals and finish with an RPG game. Using Unity 2020 and C#",
    coverImage: "https://thrangra.sirv.com/UnityJS.jpeg",
    author: "Filip Jerga",
    link: "https://academy.eincode.com/courses/the-complete-unity-guide-3d-beginner-to-rpg-game-dev-in-c",
    slug: "the-complete-unity-guide-3d-beginner-to-rpg-game-dev-in-c",
    wsl: [
      "The practical approach by creating cool games",
      "Fundamentals and core concepts of game development",
      "Create a RPG game with tons of features",
      "Math explanations behind the code."
    ],
    createdAt: ""
  },
  {
    id: "925927",
    type: "Electron JS",
    title: "Electron & React JS - Chat App",
    description: "Learn how to build a chat app with Electron & React JS. Utilize React JS + Firebase(DB) to create a fully native app",
    coverImage: "https://thrangra.sirv.com/Electron.jpeg",
    author: "Filip Jerga",
    link: "https://academy.eincode.com/courses/electron-react-js-build-native-chat-app-with-javascript",
    slug: "electron-react-js-build-native-chat-app-with-javascript",
    wsl: [
      "Understand how Electron JS works",
      "Create a 'real-life' chat application",
      "Create native apps with Javascript, Html + CSS",
      "Learn how to use React JS in combination with Electron"
    ],
    createdAt: ""
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <section className="relative">
        <div className="container">
          <h2 className="text-white font-bold text-5xl mb-24">Latest courses</h2>
          <CourseList courses={data}>
            {
              (course, index) => <CourseCard key={course.id} course={course} index={index}/>
            }
          </CourseList>
        </div>
      </section>
    </>
  )
}
