#!/usr/bin/env node
const fs = require('fs');
const args = process.argv;

if (args.length == 2 || args[2] == "-h" || args[2] == "--help") {
    console.log(`================= HELP =================
Usage
    ./index.js [OPTION] [VALUES]...
1.Making directories
    ./index.js -d [dir_name]...
    Eg. $./index.js -d first_dir second_dir
2.Deleting directories
    ./index.js -dd [dir_name]...
    Eg. $./index.js -dd my_dir
3.Renaming
    ./index.js -r [old_name] [new_name]
    Eg. $./index.js -r old_dir new_dir
4.Writing to files
    ./index.js -w [file_name] [content]
    Eg. $./index.js -w my_dir/hello.txt Hello
5.Appending to files
    ./index.js -a [file_name] [content]
    Eg. $./index.js -a my_dir/hello.txt World
    `);
}else {
    if (args[2] == "-d") {
        if (args.length <= 3) {
            console.log(`Making directories
    ./index.js -d [dir_name]...
    Eg. $./index.js -d first_dir second_dir`);
        }else {
            args.slice(3).forEach(ele => {
                fs.mkdirSync(ele);
            })
        }
    }else if (args[2] == "-dd") {
        if (args.length <= 3) {
            console.log(`Deleting directories
    ./index.js -dd [dir_name]...
    Eg. $./index.js -dd my_dir`);
        }else {
            args.slice(3).forEach(ele => {
                fs.rmdirSync(ele);
            })
        }
    }else if (args[2] == "-r") {
        if (args.length <= 3) {
            console.log(`Renaming
    ./index.js -r [old_name] [new_name]
    Eg. $./index.js -r old_dir new_dir`);
        }else if (args.length <= 4) {
            console.log("-r help");
        }else {
            fs.renameSync(args[3], args[4]);
        }
    }else if (args[2] == "-w") {
        if (args.length <= 3) {
            console.log(`Writing to files
    ./index.js -w [file_name] [content]
    Eg. $./index.js -w my_dir/hello.txt Hello`);
        }else {
            fs.writeFileSync(args[3], args[4]);
        }
    }else if (args[2] == "-a") {
        if (args.length <= 3) {
            console.log(`Appending to files
    ./index.js -a [file_name] [content]
    Eg. $./index.js -a my_dir/hello.txt World`);
        }else {
            fs.appendFileSync(args[3], args[4]);
        }
    }
}