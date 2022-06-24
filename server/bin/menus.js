const prompts = require('prompts')

function Menu({
    generate,
    runClient,
    runServer,
    prismaMigrate,
    prismaGenerate,
    gitPush,
    gitClearCache,
    clientCommand,
    serverCommand
}) {
    prompts({
        type: "select",
        name: "pilihan",
        message: "pilih menu",
        choices: [{
            title: "generate",
            value: "generate"
        }, {
            title: "run client",
            value: "runClient"
        }, {
            title: "run server",
            value: "runServer"
        }, {
            title: "prisma migrate",
            value: "prismaMigrate"
        }, {
            title: "prisma generate",
            value: "prismaGenerate"
        }, {
            title: "git push",
            value: "gitPush"
        }, {
            title: "git clear cache",
            value: "gitClearCache"
        }, {
            title: "client command",
            value: "clientCommand"
        }, {
            title: "server command",
            value: "serverCommand"
        }]
    }).then(({
        pilihan
    }) => {
        switch (pilihan) {

            case "generate":
                generate();
                break;
            case "runClient":
                runClient();
                break;
            case "runServer":
                runServer();
                break;
            case "prismaMigrate":
                prismaMigrate();
                break;
            case "prismaGenerate":
                prismaGenerate();
                break;
            case "gitPush":
                gitPush();
                break;
            case "gitClearCache":
                gitClearCache();
                break;
            case "clientCommand":
                clientCommand();
                break;
            case "serverCommand":
                serverCommand();
                break

            default:
                console.log("menu belum ada")
        }
    })
}

module.exports = Menu