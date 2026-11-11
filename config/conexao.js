import dns from 'dns';

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
]);

import mongoose from "mongoose";
const url = "mongodb+srv://admin:aluno@cluster0.yzm0l6k.mongodb.net/"


const conexao = await mongoose.connect(url)

export default conexao

