#!/usr/bin/env node
const prompts = require("prompts");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { Seeds } = require("../seeds/seeds");

(async (x) => {
  const menu = await prompts({
    type: "select",
    name: "value",
    message: "What do you want to do?",
    choices: [
     
      { title: "seed v2", value: "seed_v2" },
      { title: "prisma migrate", value: "migrate" },
      { title: "prisma generate", value: "generate" },
      { title: "seed", value: "seed" },
    ],
  });

  switch (menu.value) {
    case "migrate":
      execSync('npx prisma migrate dev --name "date()"', { stdio: "inherit" });
      break;
    case "generate":
      execSync("npx prisma generate", { stdio: "inherit" });
      break;
    case "seed":
      execSync("node seed.js", { stdio: "inherit" });
      break;
    case "seed_v2":
      Seeds();
      break;
    default:
      break;
  }
})();
