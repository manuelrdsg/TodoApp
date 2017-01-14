// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const taskSchema = new mongoose.Schema({
  priority: Number,
  name: String,
  date: String,
  completed: Boolean,
  id: Number
});

// create mongoose model
const Task = mongoose.model('Task', taskSchema);

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});

/* GET all users. */
router.get('/tasks', (req, res) => {
    Task.find({}, (err, tasks) => {
        if (err) res.status(500).send(error)

        res.status(200).json(tasks);
    });
});

/* GET one users. */
router.get('/tasks/:id', (req, res) => {
    Task.findById(req.param.id, (err, tasks) => {
        if (err) res.status(500).send(error)

        res.status(200).json(tasks);
    });
});

/* Create a user. */
router.post('/tasks', (req, res) => {
    let task = new Task({
        priority: req.body.priority,
        name: req.body.name,
        date: req.body.date,
        completed: false
    });

    task.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'Task created successfully'
        });
    });
});


//Delete an user

router.delete('/tasks/:id', (req, res) => {
    Task.findByIdAndRemove(req.params.id, (err, tasks) => {
        if (err) res.status(500).send(error)

        res.status(200).json(tasks);
    });
});

/* PUT /todos/:id */
router.put('/tasks/:id', (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, function (err, tasks) {
        if (err) res.status(500).send(error)

        res.status(200).json(tasks);
  });
});

module.exports = router;