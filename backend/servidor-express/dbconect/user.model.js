// import sql from "./dbConnect.js";

class User {
  constructor(user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.registertime = user.registertime;
  }
}

User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("ERROR ", err);
      result(err, null);
      return;
    }
    console.log('Created user: ', { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.getAll = (title, result) => {
  let query = "SELECT * FROM users";

  if (title) {
    query += ` WHERE title LIKE '%${title}%' `;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log('Users: ', res);
    result(null, res);
  });
}

export default User;
