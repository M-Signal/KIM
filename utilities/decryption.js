
var decryption=function(encrypted_json_str,base64){
var node_cryptojs = require('node-cryptojs-aes');
// var crypto = require('crypto');
var CryptoJS = node_cryptojs.CryptoJS;
var JsonFormatter = node_cryptojs.JsonFormatter;

var decrypted = CryptoJS.AES.decrypt(encrypted_json_str, base64, { format: JsonFormatter });
var decrypted_str = CryptoJS.enc.Utf8.stringify(decrypted);

return decrypted_str;
}
module.exports=decryption;
