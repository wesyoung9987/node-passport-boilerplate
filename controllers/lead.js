const LeadGroup = require('../models/leadGroup');
const Client = require('../models/client');

exports.getLeadGroupByDay = function(req, res, next) {
  const date = req.body.date;
  const userId = req.body.userId;
  // console.log('req is', req.body);
  // console.log('here', new Date(new Date(date).setHours(0,0,0,0)), userId);

  LeadGroup.findOne({ userId: userId, utcDateString: date }, (err, data) => {
    if (err) {
      return next(err);
    }

    console.log('data', data);

    res.json({contactData: data});
  });
}

exports.saveLeadGroup = function(req, res, next) {
  const leadGroupData = req.body.data;
  const date = req.body.date;
  const userId = req.body.userId;
  // console.log('req is', req);
  // console.log('here', date, userId);

  LeadGroup.findOne({ userId: userId, utcDateString: date }, (err, data) => {
    if (err) {
      return next(err);
    }

    if (data && data._id) {
      LeadGroup.findByIdAndUpdate(leadGroupData._id, leadGroupData, {new: true}, (err, data) => {
        if (err) {
          return next(err);
        }

        res.json({contactData: data});
      });
    } else {
      var leadGroup = new LeadGroup(leadGroupData);
      leadGroup.userId = userId;
      leadGroup.utcDateString = date;
      leadGroup.save((err, data) => {
        if (err) {
          return next(err);
        }

        exports.getLeadGroupByDay(req, res, next);
      });
    }
  });
}

exports.savePendingClose = function(req, res, next) {
  var leadGroupData = req.body.leadGroupData;
  var clientData = req.body.clientData;
  const userId = req.body.userId;
  clientData.userId = userId;

  var client = new Client(clientData);
  client.save((err, data) => {
    if (err) {
      return next(err);
    }
    leadGroupData.pendingClose.total = leadGroupData.pendingClose.total + 1;
    leadGroupData.pendingClose[clientData.type].push(data._id);
    req.body.data = leadGroupData;
    exports.saveLeadGroup(req, res, next);
  });
}

exports.saveClientClose = function(req, res, next) {
  var leadGroupData = req.body.leadGroupData;
  var clientData = req.body.clientData;

  Client.findByIdAndUpdate(clientData._id, clientData, {new: true}, (err, data) => {
    if (err) {
      return next(err);
    }
    leadGroupData.closed.total = leadGroupData.closed.total + 1;
    leadGroupData.closed[clientData.type].push(data._id);
    req.body.data = leadGroupData;
    exports.saveLeadGroup(req, res, next);
  });
}
