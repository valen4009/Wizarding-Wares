const { arrojarError, validateString } = require("../utils/utils");
const {Categorie} = require("../models/relationship/relationship");


// CREAR UNA CATEGORIA
const crearCategoria = async (name) => {
  // Si no pasan un dato, se arroja un error
  if(!name) {
    arrojarError("Parametro necesario Inexistente");
  }

  // validamos si el dato ingresado es un string de solo letras y espacios
  const isValidate = validateString(name);

  // En caso de que contenga otro tipo caracteres arrojara un error
  if(!isValidate) {
    arrojarError("Nombre de categoria solo debe contener letras y espacios");
  }
  
  // Comprobamos si ya tenemos la categoria guardada en nuestra base de datos
  const isRepeat = await Categorie.findAll({
    where: {
      name : name
    }
  });

  // Si encuentra la categoria en base de datos, arrojamos un error
  if(isRepeat.length > 0 ){
    arrojarError("Categoria Ya Existe");
  }

  // Caso Contrario La Creamos
  const newCategorie = await Categorie.create({name});
  // return newCategorie;
  return `Categorie ${name}. Created Successfully`;
};

module.exports = {
  crearCategoria,
};