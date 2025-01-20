import mongoose from 'mongoose'
import Users from './users.js';
const Schema = mongoose.Schema;
const produit = new mongoose.Schema({
    nom_produit: String,
    categorie_produit: { type: String, enum:["CDD", "CDI", "CIVP", "CSC"]},
    etat: {type: String, enum:["Present", "Absent"]},
    Marque: String,
    Prix: Number,
    Description: String,
    user :{type :Schema.Types.ObjectId, ref: 'User'},
    image_name:String
});
const produits = mongoose.model("produitModel", produit);
 export default  produits