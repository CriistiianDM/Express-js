const pool = require('../dataBase');

//obtener task
const getTask =  async (req, res) => {
    const consult = await pool.query('SELECT NOW()');
    console.log(consult);
    res.json(consult.rows[0].now);
}

//post task
const postTask = async (req, res) => {
    try {
    const { username , email} = req.body;
    const taskInsert = await pool.query('INSERT INTO estudiante (username,email) VALUES ($1 ,$2) RETURNING *', [username,email] ); 
    console.log(taskInsert);
    res.send('Method POST CON INSERTION');
    } catch (error) {
    console.log(error);
    }
}

//put task
const putTask =(req, res) => {
    res.send('Method PUT');
}

//delete task
const deleteTask =(req, res) => {
    res.send('Method DELETE');
}

//exportar el modulo
module.exports = {
    getTask,
    postTask,
    putTask,
    deleteTask
}