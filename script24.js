// <!--Создать сервер с помощью Express или Node.JS который бы по роуту http://localhost:4000/users отдавал захардкодженный массив пользователей.-->

const express = require('express')
const app = express()
const hostname = 'localhost';
const port = 4000;
const users = ['Helga', 'Yeugen', 'Ivan', 'Nik'];

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/users", (req, res) => {
    res.send(users);
});

function getUsers() {
    fetch("http://localhost:4000/users")
        .then((response) => {
            return response.json();
        })
        .then((users) => {
            for (elem of users) {
                console.log(elem);
            }
        });
}

getUsers();