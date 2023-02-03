const AbstractManager = require("./AbstractManager");

class DrugsManager extends AbstractManager {
  constructor() {
    super({ table: "drugs" });
  }

  insert(drugs) {
    return this.connection.query(
      `insert into ${this.table} (title)
       values (?)`,
      [drugs.title]
    );
  }

  update(drugs) {
    return this.connection.query(
      `update ${this.table}
       set title = ?
       where id = ?`,
      [drugs.title, drugs.id]
    );
  }
}

module.exports = DrugsManager;
