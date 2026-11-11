import conexao from "../config/conexao.js";
const MaterialEsportivoSchema = new conexao.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    categoria: { type: String, required: true }
});
const MaterialEsportivo = conexao.model("MaterialEsportivo", MaterialEsportivoSchema);
export default MaterialEsportivo;
