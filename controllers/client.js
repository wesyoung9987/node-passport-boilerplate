const Client = require('../models/client');

exports.getPendingUserClients = function(req, res, next) {
  const userId = req.body.userId;
  const clientType = req.body.clientType;

  Client.find({ userId: userId, type: clientType, actualSalePrice: 0 }, (err, data) => {
    if (err) {
      return next(err);
    }

    res.json({ pendingClients: data });
  });
}
