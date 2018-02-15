const app = require('./server/server');

// PORT will be set by Heroku if app is in Production
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Listening on port 4000');
});
