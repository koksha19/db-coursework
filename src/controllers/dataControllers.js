const pool = require("../config/connectDb");

const getData = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM data');
        res.status(200).json(result[0]);
    } catch (error) {
        return res.status(400).json({ error: error });
    }
};

const getDataById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query("SELECT * FROM data WHERE id = ?", [id]);
        if (result[0].length === 0) {
            return res.status(404).json({ message: "Such piece of data doesn't exist" });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        return res.status(400).json({ error: error });
    }
};

const postData = async (req, res) => {
    const { name, content, upload_date, last_edit_date, Category_id } = req.body;

    if (!name || !content || !upload_date || !last_edit_date || !Category_id) {
        return res.status(400).json({ message: 'Required fields were not found' });
    }

    try {
        const result = await pool.query(
            "INSERT INTO data (name, content, upload_date, last_edit_date, Category_id) VALUES(?, ?, ?, ?, ?)",
            [name, content, upload_date, last_edit_date, Category_id]
        );
        res.status(201).json({ message: `Created new piece of data with id ${result[0].insertId}`});
    } catch (error) {
        return res.status(400).json({ error: error });
    }
};

const putData = async (req, res) => {
    const fields = [];
    const values = [];

    const { name, content, Category_id } = req.body;
    const id = req.params.id;

    try {
        if (name) {
            fields.push('name = ?');
            values.push(name);
        }
        if (content) {
            fields.push('content = ?');
            values.push(content);
        }
        if (Category_id) {
            fields.push('Category_id = ?');
            values.push(Category_id);
        }
        values.push(id);
        await pool.query(
            `UPDATE Data SET ${fields.join(', ')} WHERE id = ?`,
            values,
        );
        const updatedData = await getDataById(req, res);
        res.status(200).json(updatedData);
    } catch (error) {
        return res.status(400).json({ error: error });
    }
};

const deleteData = async (req, res) => {
    const { id } = req.body;

    try {
        const result = await pool.query("DELETE FROM data WHERE id = ?", [id]);
        if (result[0].affectedRows < 1) {
            return res.status(404).json({ message: `Failed to delete data` });
        }
        res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error });
    }
};

module.exports = { getData, getDataById, postData, putData, deleteData };