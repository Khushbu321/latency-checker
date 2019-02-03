
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/HostDB');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

var DBSchema = new mongoose.Schema({
  host: String,
  latency: {
    type: Number,
    default: null,
  }
}, {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
  });

var HostDB = mongoose.model('HostDB', DBSchema);

exports.addData = function (data) {
  HostDB.create(data, function (err, host) {
    if (err) return console.error(err);
  })
}

exports.getOutput = async function (host, searcKey ) {
  console.log("***", host);
  return await HostDB.find({ host: host }).select(`-_id latency`)
}

exports.HostDB = HostDB;

