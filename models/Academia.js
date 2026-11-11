import conexao from "../config/conexao.js";
const AcademiaSchema = new conexao.Schema({
    cidade: { type: String, required: true },
    nome: { type: String, required: true },
    tipoesporte: { type: String, required: true }
});
const Academia = conexao.model("Academia", AcademiaSchema);
export default Academia;
