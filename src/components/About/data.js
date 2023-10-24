import js from "../../assets/js.png";
import ts from "../../assets/ts.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import nest from "../../assets/nest.png";
import postgres from "../../assets/postgres.png";
import mysql from "../../assets/mysql.png";
import redis from "../../assets/redis.png";
import typeorm from "../../assets/typeorm.png";
import prisma from "../../assets/prisma.jpg";
import jest from "../../assets/jest.png";
import mocha from "../../assets/mocha.png";
import chai from "../../assets/chai.png";
import docker from "../../assets/docker.png";
import jenkins from "../../assets/jenkins.jpg";
import github from "../../assets/github.png";
import gitlab from "../../assets/gitlab.png";
import jira from "../../assets/jira.png";
import confluence from "../../assets/confluence.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";
import front from "../../assets/front.jpg";
import react from "../../assets/react.png";

const data = [
  {
    id: 1,
    icon: "icon-location-pin",
    title: "Location",
    desc: ["Hamburg, Germany"],
  },
  {
    id: 2,
    icon: "icon-globe",
    title: "Languages",
    desc: [
      "Ukrainian - Native ",
      "English - Fluent (C1)",
      "German - Intermidiate (B1)",
    ],
  },
  {
    id: 3,
    icon: "icon-heart",
    title: "Hobbies",
    desc: ["Dancing", "Literature", "Sports"],
  },
];

const timeline = [
  {
    id: 1,
    icon: "icon-briefcase",
    year: "2021 - present",
    title: "Node.js Developer at LeverX Poland",
    desc: "LeverX is an outsourcing IT company specifically targeting SAP implementation and customization as well as innovative solutions for startups and enterprises.",
    text: "During my time at the company my main responsibilities included designing, implementing, testing and managing web applications using Node.js. Throughout the past 2 years I've gained valuable experience and got an opportunity to work on diverse projects, collaborate in cross-functional teams, and stay updated with the latest technologies.",
  },
  {
    id: 2,
    icon: "icon-graduation",
    year: "2019 - 2023",
    title:
      "Bachelor of Science in Software Engineering from Igor Sikorsky Kyiv Polytechnic Institute",
    desc: "In my pursuit of a computer science degree I have acquired strong problem-solving abilities and a robust technological foundation preparing me for diverse fields in the tech industry.",
    text: "I have completed fundamental computer science courses such as Algorithms and Data structures, OS and Networking, Math Analysis and Discreet Math. Additionally I've gained proficiency in more nuanced subjects such as Software Architecture, Database Management and Cloud Computing.",
  },
];

const skills = [
  {
    id: 1,
    title: "Languages",
    content: "JavaScript, TypeScript",
    images: [js, ts],
  },
  {
    id: 2,
    title: "Environment",
    content: "Node.js",
    images: [node],
  },
  {
    id: 3,
    title: "Frameworks & Libraries",
    content: "Express.js, Nest.js",
    images: [nest, express],
  },
  {
    id: 4,
    title: "Databases",
    content: "PostgreSQL, MySQL, Redis",
    images: [mysql, postgres, redis],
  },
  {
    id: 5,
    title: "ORMs",
    content: "TypeORM, PrismaORM",
    images: [prisma, typeorm],
  },
  {
    id: 6,
    title: "Testing tools",
    content: "Jest, Mocha, Chai",
    images: [jest, mocha, chai],
  },
  {
    id: 7,
    title: "DevOps",
    content: "Docker, Jenkins",
    images: [docker, jenkins],
  },
  {
    id: 8,
    title: "Version control systems",
    content: "GitHub, GitLub",
    images: [github, gitlab],
  },
  {
    id: 9,
    title: "PM tools",
    content: "Jira, Confluence",
    images: [jira, confluence],
  },
];

const secondarySkills = [
  {
    id: 1,
    title: "Languages",
    content: "Java, Python",
    images: [python, java],
  },
  {
    id: 2,
    title: "Front-End technologies",
    content: "HTML, CSS",
    images: [front],
  },
  {
    id: 3,
    title: "Frameworks & Libraries",
    content: "React",
    images: [react],
  },
]

export { data, timeline, skills, secondarySkills };
