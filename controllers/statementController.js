const statementQueries = require("../db/queries.statements.js");

module.exports = {
  index(req, res, next) {
    statementQueries.getAllStatements((err, statements) => {
      console.log('statements:', statements)
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
          res.send('ok');
      }
    });
  }
}