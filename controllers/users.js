const Users = require('../models/users');

module.exports = function (app) {
  app.get('/api/users', (_, res) => {
    Users.find(function(error, result) { 
      if (error) throw error;
      res.send(result);
    });
  })

  app.post('/api/users', (req, res) => {
    const newUser = Users({ name: req.body.name });

    newUser.save(function(err) {
      if (err) throw err;
      res.send(newUser);
  });
  })

  app.get('/api/users/:id', function(req, res) {
    Users.findById({ _id: req.params.id }, function(err, user) {
        if (err) throw err;
        
        res.send(user);
    });
 });
};
