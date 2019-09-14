const Statement = require("./models").Statement;

module.exports = {
  getAllStatements(user, callback) {
    console.log('get all statements')
    return Statement.findAll({ where: { userId: user } })
      .then((statements) => {
        callback(null, statements);
      })
      .catch((err) => {
        callback(err);
      });
  },
  createStatement(newStatement, callback) {
    return Statement.create({
        statement: newStatement.statement,
        author: newStatement.author,
        comment: newStatement.comment,
        userId: newStatement.userId
      })
      .then((statement) => {
        callback(null, statement);
      })
      .catch((err) => {
        callback(err);
      })
  },
  updateStatement(req, updatedStatement, callback) {
    console.log(req.params.id)
    return Statement.findByPk(updatedStatement.id)
      .then((statement) => {
        if (!statement) {
          return callback("Statement not found");
        }
        statement.update(updatedStatement, {
            fields: Object.keys(updatedStatement)
          })
          .then(() => {
            callback(null, statement);
          })
          .catch((err) => {
            callback(err);
          });
      });
  }
}