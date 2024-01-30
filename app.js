//Required package
const pdf = require("pdf-creator-node");
const fs = require("fs");

// Read HTML Template
const html = fs.readFileSync("template.html", "utf8");

const options = {
  format: "A4",
  orientation: "portrait",
  border: "0mm",
  header: {
    height: "15mm",
  },
  footer: {
    height: "28mm",
  },
};

const users = [
  {
    name: "Shyam",
    age: "26",
  },
  {
    name: "Navjot",
    age: "26",
  },
  {
    name: "Vitthal",
    age: "26",
  },
];

const document = {
  html: html,
  data: {
    users: users,
  },
  path: "./output.pdf",
  type: "",
};

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
