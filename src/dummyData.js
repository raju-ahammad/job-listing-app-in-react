const date = new Date()

export default [
  {
    id: 1,
    postedOn: date.getHours(),
    title: "Frontend Developer",
    type: "Full time",
    location: "Remote",
    companyName: "Google",
    companyUrl: "Google.com",
    skills: ["Javascript", "React.js", "Node.js"],
    link: "https://google.com/careers",
  },
  {
    id: 2,
    postedOn: date.getHours(),
    title: "Backend Developer",
    type: "Part time",
    location: "Office",
    companyName: "Yahoo",
    companyUrl: "Yahoo.com",
    skills: ["Angular", "Node.js"],
    link: "https://yahoo.com/jobs",
  },
  {
    id: 3,
    postedOn: date.getHours(),
    title: "Mobile dev",
    type: "Contract",
    location: "Remote",
    companyName: "Facebook",
    companyUrl: "https://facebook.com",
    skills: ["flutter"],
    link: "https://facebook.com/careers",
  },
];
