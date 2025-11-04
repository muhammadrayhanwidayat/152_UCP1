// Import express untuk membuat server
const express = require('express')
const app = express();
const PORT = 3000;
// Import folder models
const db = require("./models");

app.use(express.json());
app.use(express.urlencoded({
extended: false
}));

// Sinkronisasi model ke database (membuat tabel jika belum ada)
db.sequelize.sync()
.then((result) => {
app.listen(PORT, () => {
console.log(`Server started on port ${PORT}`);
})
})
.catch((err) => {
console.log(err);
})
// Endpoint untuk menambah data binatang baru
app.post("/kandang", async (req, res) => {
const data = req.body;
try {
const kandang = await db.Kebun_binatang.create(data);
res.send(kandang);
} catch (err) {
res.send(err);
}
});
// Endpoint untuk mendapatkan semua data hewan
app.get('/kandang', async (req, res) => {
try {
const kandang = await db.Kebun_binatang.findAll();
res.send(kandang);
} catch (err) {
res.send(err);
}
});
// Endpoint untuk mengupdate data hewan berdasarkan ID
app.put('/kandang/:id', async (req, res) => {
const id = req.params.id;
const data = req.body;
try {
const kandang = await db.Kebun_binatang.findByPk(id);
if (!kandang) {
return res.status(404).send({ message: "hewan tidak ditemukan" });
}
await kandang.update(data);
res.send({message: "hewan berhasil diupdate", kandang});
} catch (err) {
res.status(500).send(err);
}
});
// Endpoint untuk menghapus data soal berdasarkan ID
app.delete('/kandang/:id', async (req, res) => {
const id = req.params.id;
try {
const kandang = await db.Kebun_binatang.findByPk(id);
if (!kandang) {
return res.status(404).send({ message: "hewan tidak ditemukan" });
}
await kandang.destroy();
res.send({ message: "hewan berhasil dihapus" });
} catch (err) {
res.status(500).send(err);
}
});


