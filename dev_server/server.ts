// import express from 'express';
const express = require('express');
// const fs = require('fs')
const app = express();

const delay = () => 100 * Math.random();
const responseWithTimeout = (req, res, path?) => {
  setTimeout(() => {
    console.log('REEQUEST: ', req);
    if (path === '/') {
      const data = JSON.stringify({
        dashboardMenu: [
          { name: 'Dashboard', route: '/dashboard' },
          { name: 'Stavebni zakazky', route: '/stavebni-zakazky' },
        ],
      });
      console.log(' INIT : ', data);
      res.send(data);
    }
    res.send(202);
  }, delay());
};

app.get('/', (req, res) => responseWithTimeout(req, res, '/'));
app.get('/login', (req, res) => responseWithTimeout(req, res));
app.get('/stavebni-zakazky', (req, res) => responseWithTimeout(req, res));
app.get('/smlouvy', (req, res) => responseWithTimeout(req, res));
app.get('/nabidky', (req, res) => responseWithTimeout(req, res));
app.get('/pojisteni', (req, res) => responseWithTimeout(req, res));
app.get('/bankovni-zaruky', (req, res) => responseWithTimeout(req, res));
app.get('/vnitropodnikove-objednavky', (req, res) => responseWithTimeout(req, res));
app.get('/pohledavky-insolvence', (req, res) => responseWithTimeout(req, res));
app.get('/konsignace', (req, res) => responseWithTimeout(req, res));
app.get('/exporty-csu-mts', (req, res) => responseWithTimeout(req, res));
app.get('/evidence-smluvnich-subjektu', (req, res) => responseWithTimeout(req, res));
app.get('/rizena-dokumentace', (req, res) => responseWithTimeout(req, res));

const server = app.listen(3003, () => {
  console.log('PRAGIS app is listening at localhost: %\n', server.address());
});
