const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs').promises;
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
    try {
        const data = await fs.readFile('students-copy.json', 'utf-8');
        const users = JSON.parse(data);
        if (users.length === 0) {
            return res.render('index', { users: [], message: 'No students registered yet.' });
        }
        res.render('index', { users, message});
    } catch (err) {
        res.render('index', { users: [] });
    }
});

app.post('/add', async (req, res) => {
    try {
        const data = await fs.readFile('students.json', 'utf-8');
        const users = JSON.parse(data);
        if(users.length === 0){
            users.push({ 
                id: 1,
                name: req.body.name,
                age: req.body.age,
                branch: req.body.branch
            });
        } else {
            users.push({ 
                id: users.length + 1,
                name: req.body.name,
                age: req.body.age,
                branch: req.body.branch
            });
        }

        await fs.writeFile('students-copy.json', JSON.stringify(users, null, 2));

        res.redirect('/');
    } catch (err) {
        res.send('Error saving student');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});