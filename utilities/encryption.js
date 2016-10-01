var node_cryptojs = require('node-cryptojs-aes');
var CryptoJS = node_cryptojs.CryptoJS;
var JsonFormatter = node_cryptojs.JsonFormatter;
    
    
var encryption =function(message,r_pass_base64) {
    var encrypted = CryptoJS.AES.encrypt(message, r_pass_base64, { format: JsonFormatter });
    var encrypted_json_str = encrypted.toString();
    return encrypted_json_str;
}


module.exports=encryption;


