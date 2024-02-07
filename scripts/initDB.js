const sqlite = require('sqlite3');

let db = new sqlite.Database('./demo.db', (err) => {
    if (err) {
        console.log(err.message);
    }

    console.log('Connected to demo.db');
})


db.run('CREATE TABLE IF NOT EXISTS users(name,password)', (err, row) => {
    if (err) {
        console.log(err.message)
        return
    }

    console.log('Created users table')

    if (process.argv[2] === 'users') {
        [{name: 'Maks', password: '123123'}, {name: 'Erica', password: '321321'}].map((user) => {
            db.run(`INSERT INTO users(name,password) VALUES(?, ?)`, [user.name, user.password], (err) => {
                if (err) console.log(err.message)

            })
        })
    }

});


db.close();