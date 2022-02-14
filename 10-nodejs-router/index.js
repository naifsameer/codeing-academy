/* eslint-disable quotes */
const http = require('http');
const fs = require('fs');

const file = (fileName) => fs.createReadStream(fileName, 'utf-8');

http
  .createServer((req, res) => {
    if (req.url.startsWith('/style.css')) {
      res.setHeader('Content-Type', 'text/css');
      file('./public/css/style.css').pipe(res);
    }

    if (req.url.startsWith('/admin')) {
      if (req.url === '/admin?role=admin') {
        file('./public/admin.html').pipe(res);
      } else {
        file('./public/login.html').pipe(res);
      }
    } else if (req.url === '/') {
      file('./public/index.html').pipe(res);
    } else if (req.url === '/blog') {
      file('./public/blog.html').pipe(res);
    } else {
      file('./public/404.html').pipe(res);
    }
  })
  .listen(3000);
