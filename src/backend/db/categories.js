import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Product Management",
    imgUrl:
      "https://www.smartsheet.com/sites/default/files/styles/1300px/public/2020-06/IC-Product-Portfolio-Management-Flowchart_PowerPoint.webp?itok=2Fg2sdEq",
    description:
      "Product management involves driving the vision, strategy, design, and execution of an organisation's product. While one can often quickly comprehend the basic responsibilities of the role, mastering each of these dimensions is truly an art form that one is constantly honing",
  },
  {
    _id: uuid(),
    categoryName: "Management Entrances",
    imgUrl: "https://www.livelaw.in/h-upload/2023/10/15/750x450_498605-iim-ahmedabad.webp",
    description:
      "After cracking the entrance exam, your next challenge is to perform well in the WAT-PI round. It is your one shot to make an impression on your dream B-school of why you'd make a great fit in the classroom. Students who crack this round prepare themselves for personal, technical and case study questions.",
  },
  {
    _id: uuid(),
    categoryName: "Software Development",
    imgUrl:
      "https://techcrunch.com/wp-content/uploads/2020/01/GettyImages-695646904.jpg?w=1390&crop=1",
    description:
      "Why use an engineering approach to software? Quite simply, because the alternative would be to use a disordered approach. An engineering approach means predictability and quantifiable results through the efficient application of theories, methodologies, frameworks, and tools to develop high-quality software in a cost-effective manner.",
  },
  {
    _id: uuid(),
    categoryName: "Public Sector Professions",
    imgUrl: "https://blog.madeeasy.in/wp-content/uploads/2018/05/psus-interview-guidance-800x445.jpg",
    description:
      "Services provided by the government for public purposes also have a competitive hiring process involving interviews testing how well does the candidate perform under pressure. Learning from the experiences of ones who cleared it make the candidate get familiar with what they are going to face in the final round.",
  },
];
