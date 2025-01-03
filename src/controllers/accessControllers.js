const pool = require('../config/connectDb');

const getAccess = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM access');
        res.status(200).json(result[0]);
    } catch (error) {
        return res.status(400).json({ error: error });
    }
};

const getAccessById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query("SELECT * FROM access WHERE id = ?", [id]);
        if (result[0].length === 0) {
            return res.status(404).json({ message: "Such piece of data doesn't exist" });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        return res.status(400).json({ error: error });
    }
};

const postAccess = async (req, res) => {
    const { access_type, User_id, Data_id } = req.body;

    if (!access_type || !User_id || !Data_id) {
        return res.status(400).json({ message: 'Required fields were not found' });
    }

    try {
        const result = await pool.query(
            "INSERT INTO access (access_type, User_id, Data_id) VALUES(?, ?, ?)",
            [access_type, User_id, Data_id]
        );
        res.status(201).json({ message: `Created new piece of data with id ${result[0].insertId}`});
    } catch (error) {
        return res.status(400).json({ error: error });
    }
};

const putAccess = async (req, res) => {
    const fields = [];
    const values = [];

    const { access_type, User_id, Data_id } = req.body;
    const id = req.params.id;

    try {
        if (access_type) {
            fields.push('access_type = ?');
            values.push(access_type);
        }
        if (User_id) {
            fields.push('User_id = ?');
            values.push(User_id);
        }
        if (Data_id) {
            fields.push('Data_id = ?');
            values.push(Data_id);
        }
        values.push(id);
        await pool.query(
            `UPDATE access SET ${fields.join(', ')} WHERE id = ?`,
            values,
        );
        const updatedAccess = await getAccessById(req, res);
        res.status(200).json(updatedAccess);
    } catch (error) {
        return res.status(400).json({ error: error });
    }
};

const deleteAccess = async (req, res) => {
    const { id } = req.body;

    try {
        const result = await pool.query("DELETE FROM access WHERE id = ?", [id]);
        if (result[0].affectedRows < 1) {
            return res.status(404).json({ message: `Failed to delete access` });
        }
        res.status(200).json({ message: `Deleted access with id ${id}` });
    } catch (error) {
        return res.status(400).json({ error: error });
    }
};

module.exports = { getAccess, getAccessById, postAccess, putAccess, deleteAccess };