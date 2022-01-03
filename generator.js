var rsa = require('node-rsa');
var fs = require('fs');

function GeneratePair(){
    var key = new rsa().generateKeyPair();
    var publicKey = key.exportKey('public');
    var privateKey = key.exportKey('private');
    
    fs.openSync("./keys/public.pem", "w")
    fs.writeFileSync("./keys/public.pem", publicKey, "utf8")


    fs.openSync("./keys/private.pem", "w")
    fs.writeFileSync("./keys/private.pem", privateKey, "utf8")

}

GeneratePair();