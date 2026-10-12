
const express = require('express');
const path = require('path');
const routerUser = express.Router();
const user = require('../user.json');

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req, res) => {
    res.json(user);
});

/*
- Modify /login router to accept username and password as JSON body parameters
- Read data from user.json file
- Validate username and password
*/
routerUser.post('/login', (req, res) => {
    const { username, password } = req.body || {};

    if (username !== user.username) {
        return res.json({
            status: false,
            message: "User Name is invalid"
        });
    }

    if (password !== user.password) {
        return res.json({
            status: false,
            message: "Password is invalid"
        });
    }

    return res.json({
        status: true,
        message: "User Is valid"
    });
});

/*
- Modify /logout route to accept username as parameter
- Display message in HTML format
*/
routerUser.get('/logout/:username', (req, res) => {
    const username = req.params.username;

    res.type('html').send(
        `<b>${username.replace(/[&<>"']/g, c => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;',
            '"': '&quot;', "'": '&#39;'
        })[c])} successfully logged out.</b>`
    );
});

module.exports = routerUser;
