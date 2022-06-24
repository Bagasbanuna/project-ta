#!/usr/bin/env node

const Conn = require("./conn");
const Generator = require("./generator");
const Menu = require("./menus");
const fs = require("fs");

if (fs.existsSync("server")) {
  perintahMenu();
} else {
  console.log("pastikan berada di derectory project".red);
}

function perintahMenu() {
  Menu({
    generate: Generator,
    prismaMigrate: Conn.prismaMigrate,
    clientCommand: Conn.clientCommand,
    serverCommand: Conn.serverCommand,
    gitClearCache: Conn.gitClearCache,
    gitPush: Conn.gitPush,
    prismaGenerate: Conn.prismaGenerate,
    runClient: Conn.runClient,
    runServer: Conn.runServer,
  });
}

// Generator()
