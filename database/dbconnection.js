const knex = require("knex")({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Sandhya@563',
    database: 'mvc'
  }
})
knex.schema
  .createTable("userDetailes", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("email");
    table.string("password");
  })
  .then((data) => {
    // console.log(data)
    console.log("UserDetailes table has created");
  })
  .catch((err) => {
    // console.log(err)
    console.log("UserDetailes table already exist!!");
  });
// 
knex.schema
  .createTable('userPost', (table) => {
    table.increments('id').primary();
    table.string("imgurl");
    table.integer("date");
    table.string("captionforimg");
  })
  .then((data) => {
    // console.log(data)
    console.log("Userpost table has created");
  })
  .catch((err) => {
    // console.log(err)
    console.log("Userpost table  already exist!!");
  });
// 
knex.schema
  .createTable("questionAnswers ", (table) => {
    table.increments("id").primary();
    table.string("question");
    table.string("answer");
  })
  .then((data) => {
    // console.log(data)
    console.log("questionAnswers table has created");
  })
  .catch((err) => {
    // console.log(err)
    console.log("questionAnswers table already exist!!");
  })

module.exports = knex