import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Product Management",
    imgUrl: "https://pmschool.io/static/media/img2.e2a239f4.png",
    description:
      "Product management involves driving the vision, strategy, design, and execution of an organisation's product. While one can often quickly comprehend the basic responsibilities of the role, mastering each of these dimensions is truly an art form that one is constantly honing",
  },
  {
    _id: uuid(),
    categoryName: "Management Entrances",
    imgUrl: "https://xlrij.remotexs.in/sites/default/files/5-5.jpg",
    description:
      "After cracking the entrance exam, your next challenge is to perform well in the WAT-PI round. It is your one shot to make an impression on your dream B-school of why you'd make a great fit in the classroom. Students who crack this round prepare themselves for personal, technical and case study questions.",
  },
  {
    _id: uuid(),
    categoryName: "Software Development",
    imgUrl:
      "https://techcrunch.com/wp-content/uploads/2020/01/GettyImages-695646904.jpg?w=1390&crop=1",
    description:
      "Software Engineering why use an engineering approach to software? Quite simply, because the alternative would be to use an ad-hoc or disordered approach. An engineering approach means predictability and quantifiable results through the application of theories, methodologies, frameworks, and tools. When applied efficiently, the result is high-quality software created in a cost-effective manner.",
  },
  {
    _id: uuid(),
    categoryName: "Public Sector Professions",
    imgUrl:
      "https://pbs.twimg.com/media/FOBpsu1VIAIonlX?format=jpg",
    description:
      "Business Organisations/Public services run by the government for public purpose also have a competitive hiring process involving interviews testing technical abilities of an individual and how well does the candidate perform under pressure. Considered as one of the toughest learning from the experiences of ones who cleared it make the candidate get familiar with what they are going to face in the final round.",
  },
];
