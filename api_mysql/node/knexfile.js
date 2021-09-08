// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: "db",
      database:"produtos",
      user:"root",
      password:"root"
    }
  },
  migrations:{

    directory: "./database/migrations"
  }
};
