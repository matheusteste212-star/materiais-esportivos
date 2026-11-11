import conexao from "../config/conexao.js";
const FabricanteSchema = new conexao.Schema({
    nome: { type: String, required: true },
    anoFundacao: { type: Number, required: true }
});
const Fabricante = conexao.model("Fabricante", FabricanteSchema);
export default Fabricante;
