const statementQueries = require("../db/queries.statements.js");

module.exports = {
  index(req, res, next) {
    statementQueries.getAllStatements(req.user.dataValues.id, (err, statements) => {
      if (err) {
        res.send(err)
      } else {
        res.send(statements);
      }
    });
  },
  create(req, res, next) {
    let newStatement = {
      statement: req.body.statement,
      author: req.body.author,
      comment: req.body.comment,
      userId: req.user.dataValues.id
    };
    statementQueries.createStatement(newStatement, (err, statement) => {
      if (err) {
        res.send(err)
      } else {
          res.send('created');
      }
    });
  },
  update(req, res, next) {
    statementQueries.updateStatement(req, req.body, (err, statement) => {
      if (err || statement == null) {
        res.send(err)
      } else {
        res.send('changed')
      }
    });
  },
  delete(req, res, next) {
    statementQueries.deleteStatement(req, req.body, (err, statement) => {
      if (err) {
        res.send(err);
      } else {
        res.send('deleted');
      }
    });
  }
}