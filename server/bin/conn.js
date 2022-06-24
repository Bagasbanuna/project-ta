const execSync = require("child_process").execSync;
const prompts = require("prompts");
const path = require("path");
const _client = path.join(__dirname, "./../../client");
const _server = path.join(__dirname, "./../../server");

function runClient() {
  execSync(`npm run`, { stdio: "inherit", cwd: _client });
}

function runServer() {
  execSync(`nodemon .`, { stdio: "inherit", cwd: _server });
}

function prismaMigrate() {
  execSync(`npx prisma migrate dev --name 'apa'`, {
    stdio: "inherit",
    cwd: _server,
  });
}

function prismaGenerate() {
  execSync(`npx prisma generate`, { stdio: "inherit", cwd: _server });
}

function gitPush() {
  execSync(`git add . && git commit -m 'apa' && git push origin main`, {
    stdio: "inherit",
    cwd: path.join(__dirname, "./../../"),
  });
}

function gitClearCache() {
  execSync(`git rm -r --cached .`, { stdio: "inherit", cwd: path.join(__dirname, './../../') });
}

function clientCommand() {
  prompts({
    type: "text",
    name: "command",
    message: "masukkan command",
  }).then(({ command }) => {
    execSync(command, { stdio: "inherit", cwd: _client });
  });
}

function serverCommand() {
  prompts({
    type: "text",
    name: "command",
    message: "masukkan command",
  }).then(({ command }) => {
    execSync(command, { stdio: "inherit", cwd: _server });
  });
}

const Conn = {
  runClient,
  runServer,
  prismaMigrate,
  prismaGenerate,
  gitPush,
  gitClearCache,
  clientCommand,
  serverCommand
};

module.exports = Conn;
