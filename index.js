const app = require('./src/Config/Routes');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('App Ready!'));