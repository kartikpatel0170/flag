const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'm@y9h5H2',
});

function insertData(data) {
    const sql = 'INSERT INTO users SET ?';
    connection.query(sql, data, (err, result) => {
        if (err) return err;
        console.log('Data inserted into the database.');
        console.log('Inserted data:', data);
    });
}

connection.connect((err) => {
    if (err) return err;
    console.log('Successfully connected to the MySQL server.');

    // Insert some data into the database.
    const data = { name: 'John Doe', email: 'john.doe@example.com' };
    insertData(data);
});


// Close the connection to the MySQL server.
connection.end((err) => {
    if (err) return err;
    console.log('Connection to the MySQL server was closed.');
});