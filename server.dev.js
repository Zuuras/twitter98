import express from 'express';
import path from 'path';

const PORT = 7700;

const PUBLIC_PATH = path.join(__dirname, 'public');

const app = express();

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.babel').default;
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  hot: true,
  stats: {
    colors: true
  }
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get("/users", function(req, res) {
  res.send([
    { id: 1, name: "Alexey", age: 30 },
    { id: 2, name: "Ignat", age: 15 },
    { id: 3, name: "Sergey", age: 26 },
  ]);
});

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});