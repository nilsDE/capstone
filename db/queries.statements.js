const Statement = require("./models").Statement;

module.exports = {
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