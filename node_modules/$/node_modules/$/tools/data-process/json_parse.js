'use strict'
let  path  = require ('path')
const pack = require("$/package.json")
const fs = require ('fs')
const { log } = require('console')
let BASE_PATH = pack.base_path

export function read_json_from_file(file_path){
    const txt_data = fs.readFileSync(path.resolve(BASE_PATH, file_path), 'utf-8')
    return JSON.parse(txt_data)
}
export function write_json_to_file(file_path, json_data){
    const txt_data = JSON.stringify(json_data)
    fs.writeFile(path.resolve(BASE_PATH, file_path))
}
// console.log(read_json_from_file('test-data/account-manager/login.json'));
// var  jsonData = read_json_from_file('test-data/account-manager/login.json')
// console.log(jsonData['data']);
// jsonData['data'].forEach(element => {
//     console.log(element['input']);
// });
