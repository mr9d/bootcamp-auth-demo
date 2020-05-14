const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

let credits = [
  { id: 1, name: "Jane", purpose: "New cat", sum: "500", date: "2020-02-01" },
];

nextId = 2;

function checkCredentials(req, login, pass) {
  const userLogin = req.body.login;
  const userPass = req.body.pass;
  if (login !== userLogin || pass !== userPass) {
    return false;
  } else {
    return true;
  }
}

app.get('/credits', (req, res) => {
  res.json(credits);
});

app.get('/credits/:id', (req, res) => {
  res.json(credits.find(el => el.id === req.params.id));
});

app.delete('/credits/:id', (req, res) => {
  if (!checkCredentials(req, 'alex', '123456')) {
    res.sendStatus(401);
  } else {
    const id = +req.params.id;
    const toDelete = credits.find(el => el.id === id);
    if (!toDelete) {
      res.sendStatus(404);
    } else {
      credits = credits.filter(el => el !== toDelete);
      res.send(toDelete);
    }
    res.json();
  }
});

app.post('/credits', (req, res) => {
  if (!checkCredentials(req, 'creditCreator', 'superSecretPassword')) {
    res.sendStatus(401);
  } else {
    let credit = {
      id: nextId++,
      name: req.body.name,
      purpose: req.body.purpose,
      sum: +req.body.sum,
      date: req.body.date
    }
    console.log(credit);
    credits.push(credit);
    res.status(201).json(credit);
  }
});


app.listen(port, () => { console.log('Started server at port ' + port); });
