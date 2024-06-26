const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());


let tasks = [
    { id: 1, title: 'Design Website', description: 'Design a landing page for a Real Estate Website' },
    { id: 2, title: 'Create API', description: 'Create an API using Node.js and postman for CRUD (create / insert / update / delete)' }
];

// Retrieve all tasks
app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

// Retrieve a specific task by ID
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task);
});

// Create a new task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;


    if (!title || !description) {
        return res.status(400).json({ error: 'Title/Description Not found' }); // validating title and description
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update an existing task by ID
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'Title/Description Not found' }); // validating title and description
    }

    let taskUpdated = false;
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            task.title = title;
            task.description = description;
            taskUpdated = true;
        }
        return task;
    });

    if (taskUpdated) {
        res.status(200).json({ message: 'Task updated Successfully' });
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

// DELETE - Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const initialLength = tasks.length;

    tasks = tasks.filter(task => task.id !== taskId);

    if (tasks.length < initialLength) {
        res.status(204).send({message: 'Task Deleted Successfully'});
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
