const prompts = require('prompts')
const colors = require('colors')
const execSdync = require('child_process').execSync
const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const jb = require('js-beautify').js


/** @type {[]} */
const model = require(path.join(__dirname, './pkg.json')).pkg

function Generator(){

    /** @type {[]} */
    let item = model.map(e => {
        return `{title: "${e}", value: "${_.camelCase(e)}"}`
    })

     /** @type {[]} */
    let param = model.map(e => {
        return _.camelCase(e)
    })

    let cs = model.map(e => {
        return `
        case "${_.camelCase(e)}": 
        ${_.camelCase(e)}();
        break
        `
    })
    
    let template = `
    const prompts = require('prompts')
    function Menu({${param.join(', ')}}){
        prompts({
            type: "select",
            name: "pilihan",
            message: "pilih menu",
            choices: [${item.join(', ')}]
        }).then(({pilihan}) => {
            switch(pilihan){
                ${cs.join('; ')}
                default: console.log("menu belum ada")
            }
        })
    }

    module.exports = Menu
    `

    fs.writeFileSync(path.join(__dirname, './menus.js'), jb(template))
    
    console.log("menu generage success".yellow)
}


// prompts({
//     type: "select",
//     name: "pilihan",
//     message: "pilih menu",
//     choices: [
//         {title: "", value: ""}
//     ]
// }).then(e => {
//     switch(e){
//         case "": 
//         break;
//         default: console.log("menu belum ada")
//     }
// })


module.exports = Generator