const express = require('express');
const db = require('./db');
const htmlSup = require('./htmlsupport')

const app = express();
module.exports = app;

app.use((req, res, next)=> {
    db.getUsers()
        .then(users => {
            req.users = users;
            next();
        })
        .catch(next);
})

app.get('/', (req, res, next)=> {
    res.send(htmlSup.homePage());
});

app.get('/employees', (req, res)=> {
    res.send(htmlSup.employeesPage());
});

app.get('/contact', (req, res)=> {
    res.send(htmlSup.contact());
});

app.get('/users/:id', (req, res, next)=> {
    db.getUser(req.params.id)
    .then(user => res.send(`
    <html>
            <title>
                Acme: Employees
            </title>
            <head>
                <link rel = "stylesheet" href = "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
            </head>
        <body>
            <div class = "container">
                    <h1>
                        Acme Web
                    </h1>
                    <ul class="nav nav-tabs" style="margin-bottom: 20px">
                        <li class="nav-item">
                            <a href="/" class="nav-link active">
                            Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/employees" class="nav-link active">
                            Employees
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/contact" class="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                <ul>
                ${req.users.map(user => {
                    return `
                    <li>
                        <a href='/users/${user.id}'>
                        ${user.email}
                        </a>
                    </li>
                    `
                }).join('')}
                </ul>
                <div>
                you chose ${user.email}
                </div>
            </div>
        </body>
    </html>
    `))
    .catch(next);
});