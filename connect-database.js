const { Client } = require("cassandra-driver");
require("dotenv").config();

async function run() {
  const client = new Client({
    cloud: {
      secureConnectBundle: process.env.SECURE_CONNECT_FILE_LOCATION,
    },
    credentials: {
      username: process.env.DB_USER_NAME,
      password: process.env.DB_USER_PASSWORD,
    },
  });

  await client.connect();

  // Execute a query
  const rs = await client.execute("SELECT * FROM system.local");
  console.log(`Your cluster returned ${rs.rowLength} row(s)`);
  await client.shutdown();
}

// Run the async function
run();
