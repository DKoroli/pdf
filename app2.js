//Required package
const pdf = require("pdf-creator-node");
const fs = require("fs");

// Read HTML Template
const html = fs.readFileSync("template2.html", "utf8");

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

const user = {
    name: 'Dmitri Coroliuc',
    idnp: '2002004092146',
    mun: 'Bălți',
    str: 'Decebal',
    num: '168',
    ap: '26'
}

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
  path: "./output2.pdf",
  type: "",
};

pdf
  .create(document)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
