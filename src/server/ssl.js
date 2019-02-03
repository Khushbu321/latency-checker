const cron = require('node-cron');
const sslCertificate = require('get-ssl-certificate');
const hostDB = require('../db/index');

cron.schedule('1 * * * * *', () => {
  var hosts = [
    "www.gmail.com",
    "www.google.com",
    "www.twitter.com",
    "www.facebook.com"
  ]
  for (let i = 0; i < hosts.length; i++) {
  sslCertificate.get(hosts[i].substring(4)).then(function (certificate) {
      if (certificate) {
      console.log(hosts[i] , "-", certificate.valid_to)
      var expiry = certificate.valid_to;
      hostDB.addData({ host: hosts[i], sslCertificate: expiry });
      }
      else{
        console.log('Cannot ping host');
      }
    });
  }
});
