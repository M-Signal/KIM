    var crypto = require('crypto');
    var r_pass = crypto.randomBytes(128);    
    var r_pass_base64 = r_pass.toString("base64");



    module.exports=r_pass_base64;