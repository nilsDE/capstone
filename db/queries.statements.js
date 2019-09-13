const Statement = require("./models").Statement;

module.exports = {
  getAllStatements(callback) {
    console.log('get all statements')
    return Statement.findAll()
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
  }
}