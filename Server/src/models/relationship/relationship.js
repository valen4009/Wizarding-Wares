// 1_ Aqui importaremos nuestros modelos listos y conectados a sequelize
const Product = require("../Product.model");
const Categorie = require("../Categorie.model");
const Role = require("../Roles.model");
const User = require("../Users.model");



// 2_ Haremos las relaciones entre ellos
Categorie.hasMany(Product);
Product.belongsTo(Categorie);
User.belongsTo(Role);
Role.hasMany(User);

// 3_ Exportremos Los Modelos Con La Relacion Entre Estos Integrada
module.exports = {
	Product,
	Categorie,
};
// Y sera desde aqui que tomaremos los modelos para hacer el trabajo con rutas y controllers