var cron = require('node-cron');
var ping = require('jjg-ping');
var hostDB = require('../db/index');

cron.schedule('1 * * * * *', () => {
  var hosts = [
    "www.gmail.com",
    "www.google.com",
    "www.twitter.com",
    "www.facebook.com"
  ]
  for(let i = 0; i< hosts.length; i++){
    ping.system.ping(hosts[i], function (latency, status) {
      if (status) {
        console.log('Host is reachable (' + latency + ' ms ping).');
        hostDB.addData({ host: hosts[i], latency: latency });
      }
      else {
        console.log('Cannot ping host');
      }
    });
  }
});
