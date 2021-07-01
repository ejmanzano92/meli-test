require('dotenv').config()
const app = require('./src/Config/Routes');
const database = require('./src/Database/init');
const port = process.env.PORT || 3000;
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
  
    // Fork workers.
    for (let i = 0; i < numCPUs; i += 1) {
      cluster.fork();
    }
  
    cluster.on('exit', () => cluster.fork());
  } else {
      database.run();
      app.listen(port, () => console.log('App Ready!'));
  }