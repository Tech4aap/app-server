const express = require('express');
const mysql = require('mysql2');

const app = express();
const connection = mysql.createConnection({
    host: '184.168.108.252',
    user: 'pscc_db',
    password: 'll&4v=$U~5ey',
    database: 'db_pscc'
});

// Connect to the database

// GET all items
app.get('/items', (req, res) => {
    connection.connect();
    connection.query('SELECT `NAME` FROM product_types', (err, rows) => {
        if (err) res.status(500).send(err);
        else {
            res.json(rows).status(200);
        }
    });
    
    connection.destroy();
});

// GET one item by id
app.get('/items/:id', (req, res) => {
    connection.query('SELECT * FROM items WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) res.status(500).send(err);
        else res.json(rows);
    });
});

// POST (create) a new item
app.post('/items', (req, res) => {
    const item = req.body;
    connection.query('INSERT INTO items SET ?', item, (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
    });
});

// PUT (update) an existing item
app.put('/items/:id', (req, res) => {
    const item = req.body;
    connection.query('UPDATE items SET ? WHERE id = ?', [item, req.params.id], (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
    });
});

// DELETE an existing item
app.delete('/items/:id', (req, res) => {
    connection.query('DELETE FROM items WHERE id = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});