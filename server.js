'use strict';

const fs = require('fs');
const express = require('express');
const dayjs = require('dayjs');

const PORT = 8081;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  const time = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const message = `${time} Container Access!!!`;
  console.log(message);

  fs.appendFileSync('output.log', message, error => {
    if (error) throw new Error(error);
    console.log('ファイルが正常に出力されました。');
  });

  res.send('Hello World');
});

app.listen(PORT, HOST);
