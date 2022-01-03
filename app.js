var rsa = require('node-rsa');
var fs = require('fs');
const { isContext } = require('vm');

var publicKey = new rsa();
var privateKey = new rsa();

var public = fs.readFileSync('./keys/public.pem', 'utf8');
var private = fs.readFileSync('./keys/private.pem', 'utf8');

publicKey.importKey(public);
privateKey.importKey(private);

function CreateLicence(mail){
    const saltOne = 'pathak@9211';
    const saltTwo = 'Pathak@35'

    const encrypted = privateKey.encryptPrivate(
        saltOne + mail + saltTwo,
        'base64'
    );
    return encrypted;
}

function CheckValidity(licence){
     
    const decrypted = publicKey.decryptPublic(licence, "utf8")
         
    if('pathak@9211chotapathak12@gmail.comPathak@35' == decrypted){
        return true;
    }else {
        return false
    }
} 
 
console.log(CheckValidity('baosNWkBTwdv+/otkSuw4aMg7j1mT5zw3FMSsRnXAuGPC/ZUcDYYCQcBnL0buhZeJIVHsIZCIeXMDb6eBz6kG39aouuAEYGq1YduBdgw2iZRfu8QXuMvcJdVOmaJVUinjyQjfFES+OqUo8mriYNgzDav2L71f113diRLL9vQq8VQS5MlB+v7GbHG8DhbHbkIJ1WUuyRxy5eGz4tBVkC7b8nED92a2Np1vkX03p6Jgy9lR2HYXp6tN24IovoMeBl/yMzVUY7lhEobG3X/ZaDoXHUOPzMuqXPZnLRKBPtxBcW2iM7IUAnCRPcBpkBG0KWq4DeOa3+xy2VUkR3oETGP+g=='));