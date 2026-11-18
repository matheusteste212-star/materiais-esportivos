import conexao from "../config/conexao.js";
const MaterialEsportivoSchema = new conexao.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    categoria: { type: String, required: true },
    foto: {type:Buffer,
        get: (valor) => {
           if (!valor) return null;
             return `data:image/png;base64,${valor.toString('base64')}`;}
    }
});
const MaterialEsportivo = conexao.model("MaterialEsportivo", MaterialEsportivoSchema);
export default MaterialEsportivo;
