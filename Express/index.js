const { json } = require("body-parser");
const express = require("express");
const app = express();
app.use(express.json());
let users = [
  {
    user: "Ashif",
    kidneys: [
      {
        health: true,
      },
      {
        health: false,
      },
    ],
  },
  {
    user: "rick",
    kidneys: [
      {
        health: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  //check kidneys and its health
  const ashKidney = users[0].kidneys;
  const kidneyLength = ashKidney.length;
  let goodKidney = ashKidney.filter((kidney) => kidney.health === true);
  let badKidneys = ashKidney.filter((kid) => kid.health === false);
  const goodKLength = goodKidney.length;
  const badKLength = badKidneys.length;
  console.log(users[0].kidneys);
  res.json({
    kidneyLength,
    goodKLength,
    badKLength,
  });
});

app.post("/", function (req, res) {
  //add new kidney
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    health: isHealthy,
  });
  res.json({
    msg: "DONE!",
  });
});

app.put("/", function (req, res) {
  //replace a kidney make it true
  if (checkAtLeastOne()) {
    users[0].kidneys.map((kidney) => (kidney.health = true));
    res.json({
      msg: "content modified",
    });
  } else {
    res.status(411).json({
      msg: "You didnt have any unhealthy kidneys",
    });
  }
});

app.delete("/", function (req, res) {
  //delete a kidney
  if (checkAtLeastOne()) {
    let newKidney = users[0].kidneys.filter((kidney) => kidney.health === true);
    users[0].kidneys = newKidney;
    res.json({
      msg: "new kidneys fixed",
    });
  } else {
    res.status(411).json({
      msg: "Sorry man didn't have any unhealthy kidney",
    });
  }
});

function checkAtLeastOne() {
  let atLeastOne = false;
  users[0].kidneys.forEach((kidney) => {
    if (kidney.health === false) {
      atLeastOne = true;
    }
  });
  return atLeastOne;
}

app.listen(3000);
