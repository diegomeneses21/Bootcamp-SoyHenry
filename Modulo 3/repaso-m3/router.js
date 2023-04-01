const express = require('express');
const router = express.Router();
const axios = require('axios');

// router.Method('path', (req, res, next) => {...});

function isLogged() {
    return true;
};

router.use('/', (req, res, next) => {
    // console.log('Ingresando...');
    if (isLogged()) next();
    else res.send('Usuario no logueado!!!');
    // next();
});

router.get('/', (req, res) => {
    res.send('ROOT');
});

router.get('/home', (req, res) => {
    res.send('HOME');
});

// CRUD: Create(post), Read(get), Update(put), Delete(delete)
let todos = [];
let id = 1;
// {id: 1, completed: true/false, content: 'tarea', priority: '1-5'}

router.post('/todo', (req, res) => {
    const { content, priority } = req.body;
    if (!content) return res.send('Falta el contenido').sendStatus(400);
    if (!content) return res.send('Falta la prioridad').sendStatus(400);
    const newTodo = {
        id: id++,
        completed: false,
        content,
        priority
    }
    todos.push(newTodo);
    res.json(newTodo);
});

// POST /todo/params/:content?priority=5
router.post('/todo/params/:content', (req, res) => {
    const { content } = req.params;
    const { priority } = req.query;
    if (!content) return res.send('Falta el contenido').sendStatus(400);
    if (!content) return res.send('Falta la prioridad').sendStatus(400);
    const newTodo = {
        id: id++,
        completed: false,
        content,
        priority
    }
    todos.push(newTodo);
    res.json(newTodo);
});

// router.get('/todo', (req, res) => {
//     if (!todos.length) return res.send('No hay tareas!').sendStatus(400);
//     res.json(todos);
// })

// router.get('/todo/:id', (req, res) => {
//     if (!todos.length) return res.send('No hay tareas!').sendStatus(400);
//     const { id } = req.params;
//     if(!id) return res.json(todos);
//     const filteredTodo = todos.filter(t => t.id === +id); // [{...}]
//     if (!filteredTodo.length) return res.json(todos);
//     console.log(filteredTodo);
//     res.json(filteredTodo);
// })

router.get('/todo', (req, res) => {
    if (!todos.length) return res.send('No hay tareas!').sendStatus(400);
    res.json(todos);
})

router.get('/todo/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        const filteredTodo = todos.filter(t => t.id === +id); // [{...}]
        if (!filteredTodo.length) return res.send('No hay tarea con ese id!').sendStatus(400);
        res.json(filteredTodo);
    };
})

router.put('/todo/completed/:id', (req, res) => {
    const { id } = req.params;
    if (!id) return res.send('Debe ingresar un id!').sendStatus(400);
    const filteredTodo = todos.find(t => t.id === +id); // {...}
    if (!filteredTodo) return res.send('No hay tareas con el id ingresado').sendStatus(400);
    filteredTodo.completed = true;
    return res.send('Tarea completada');
})

router.delete('/todo', (req, res) => {
    const { id } = req.body;
    if (!id) return res.send('Debe ingresar un id!').sendStatus(400);
    const todoToDelete = todos.filter(t => t.id === +id);
    if (!todoToDelete.length) return res.send('No hay tarea con ese id!').sendStatus(400);
    todos = todos.filter(t => t.id !== +id);
    return res.json(todos);
})

router.get('/games', (req, res) => {
    axios('https://www.freetogame.com/api/games') // promesa
        .then(response => {
            // console.log(response) // reponse = {data: ''}
            res.json(response.data)
        })
})

module.exports = router;