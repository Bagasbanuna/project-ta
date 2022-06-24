#!/usr/bin/env bash

help() {
    echo "$(tput setaf 6)
    Usage: $1 [Option]
    Option:
    -h, --help          munculkan help
    -c, --create        untuk membuat project baru [bagas_project]
    -r, --run           menjalankan server
    -d, --database      setting database masukkan nama database dan user
    -s, --schema        mereset schema [menghapus schema]
    -m, --migration     membuat migration database
   $(tput sgr0)"
}

init() {
    echo " const express = require('express');
    const app = express();
    const port = 3000;
    const cors = require('cors');

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));
    app.use(express.static('views'));
    app.use((req, res) => {
        res.status(404).send('<h1>404 Not Found</h1>');
    })
    app.use((req, res) => {
        res.status(500).send('<h1>500 Internal Server Error</h1>');
    })

    app.listen(port, () => {
        console.log('Server is running on port ' + port);
    });" >index.js

    echo "<h1>Hello World</h1>" >views/index.html

}

prismaSchema() {
    echo "$(tput setaf 1)mereset chema prisma$(tput sgr0)"
    chema="generator client {
            provider = \"prisma-client-js\"
        }

        datasource db {
            provider = \"mysql\"
            url      = env(\"DATABASE_URL\")
        }
        "
    echo "${chema##*()}" >./prisma/schema.prisma

}

if [ $# -eq 0 ]; then
    help
else
    case $1 in
    -h | --help)
        help
        ;;
    -c | --create)
        mkdir -p bagas_project
        cd bagas_project
        npm init -y
        npm i express express-async-handler cors @prisma/client
        mv ../bagas.sh ./bagas.sh
        mkdir views
        init
        prisma init
        prismaSchema
        code .
        exit 0
        ;;
    -r | --run)
        nodemon .
        ;;
    -d | --database)
        echo "$(tput setaf 6)setting database !$(tput sgr0)"
        read -p "database name : " dbname
        read -p "database user : " dbuser
        read -p "database password : " dbpass

        env="DATABASE_URL=\"mysql://$dbuser:$dbpass@localhost:3306/$dbname\""
        echo "${env##*()}" >.env
        ;;
    -s | --schema)
        prismaSchema
        ;;
    -m | --migrate) 
        prisma migrate dev --name date
        prisma generate
        ;;
    *)
        echo "Pilihan $2 tidak ada"
        ;;

    esac
fi