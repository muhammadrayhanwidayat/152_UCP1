module.exports = (sequelize, DataTypes) => {
const kandang = sequelize.define("kandang", {
id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true
},
Nama_hewan: {
type: DataTypes.STRING,
},
Nama_petugas: {
type: DataTypes.STRING,
},
Usia_hewan: {
type: DataTypes.STRING,
},
Jenis_hewan: {
type: DataTypes.INTEGER,
},
Tahun_lahir:{
type: DataTypes.STRING,
}
});
return kandang;
}