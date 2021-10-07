const knex = require("knex")({
    client : 'mysql',
    connection :{
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
    console.log("Table Created");
  })
  .catch((err) => {
      // console.log(err)
    console.log("Table Already Exist!!");
  });
// knex.sechcma.hasTable('userpost').then(function (exits) {
//     if (!exits) {
//         return knex.sechcma.createTable('userpost', function (table) {
//             table.increments('id').primary();
//             table.string("Imgurl");
//             table.integer("Date");
//             table.string("Captionforimg");
//         })
//     }
// })
module.exports = knex