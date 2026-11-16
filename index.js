import express from 'express';
import './config/conexao.js';
import Fabricante from './models/Fabricante.js';
import MaterialEsportivo from './models/MaterialEsportivo.js';
import Academia from './models/Academia.js';

const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

// FABRICANTES
app.get('/fabricantes', async (req, res) => {
    const fabricantes = await Fabricante.find();
    res.render('fabricantes/lst', { fabricantes });
});
app.get('/fabricantes/add', (req, res) => res.render('fabricantes/add'));
app.post('/fabricantes', async (req, res) => {
    const { nome, anoFundacao } = req.body;
    await Fabricante.create({ nome, anoFundacao: Number(anoFundacao) });
    res.redirect('/fabricantes');
});
app.get('/fabricantes/upd/:id', async (req, res) => {
    const item = await Fabricante.findById(req.params.id);
    if (!item) return res.status(404).send('Fabricante não encontrado.');
    res.render('fabricantes/upd', { item });
});
app.post('/fabricantes/upd/:id', async (req, res) => {
    const { nome, anoFundacao } = req.body;
    await Fabricante.findByIdAndUpdate(req.params.id, { nome, anoFundacao: Number(anoFundacao) });
    res.redirect('/fabricantes');
});
app.post('/fabricantes/del/:id', async (req, res) => {
    await Fabricante.findByIdAndDelete(req.params.id);
    res.redirect('/fabricantes');
});

// MATERIAIS ESPORTIVOS
app.get('/materiais', async (req, res) => {
    const materiais = await MaterialEsportivo.find();
    res.render('materiaisesportivos/lst', { materiais });
});
app.get('/materiais/add', (req, res) => res.render('materiaisesportivos/add'));
app.post('/materiais', async (req, res) => {
    const { nome, preco, categoria } = req.body;
    await MaterialEsportivo.create({ nome, preco: Number(preco), categoria });
    res.redirect('/materiais');
});
app.get('/materiais/upd/:id', async (req, res) => {
    const item = await MaterialEsportivo.findById(req.params.id);
    if (!item) return res.status(404).send('Material não encontrado.');
    res.render('materiaisesportivos/upd', { item });
});
app.post('/materiais/upd/:id', async (req, res) => {
    const { nome, preco, categoria } = req.body;
    await MaterialEsportivo.findByIdAndUpdate(req.params.id, { nome, preco: Number(preco), categoria });
    res.redirect('/materiais');
});
app.post('/materiais/del/:id', async (req, res) => {
    await MaterialEsportivo.findByIdAndDelete(req.params.id);
    res.redirect('/materiais');
});

// ACADEMIAS
app.get('/academias', async (req, res) => {
    const academias = await Academia.find();
    res.render('academias/lst', { academias });
});
app.get('/academias/add', (req, res) => res.render('academias/add'));
app.post('/academias', async (req, res) => {
    const { cidade, nome, tipoesporte } = req.body;
    await Academia.create({ cidade, nome, tipoesporte });
    res.redirect('/academias');
});
app.get('/academias/upd/:id', async (req, res) => {
    const item = await Academia.findById(req.params.id);
    if (!item) return res.status(404).send('Academia não encontrada.');
    res.render('academias/upd', { item });
});
app.post('/academias/upd/:id', async (req, res) => {
    const { cidade, nome, tipoesporte } = req.body;
    await Academia.findByIdAndUpdate(req.params.id, { cidade, nome, tipoesporte });
    res.redirect('/academias');
});
app.post('/academias/del/:id', async (req, res) => {
    await Academia.findByIdAndDelete(req.params.id);
    res.redirect('/academias');
});

// Rota para pesquisar fabricante por nome
app.post('/fabricantes/lst', async (req, res) => {
    const { pesquisar } = req.body;

    const fabricantes = await Fabricante.find({
        nome: new RegExp(pesquisar, 'i')
    });

    res.render("fabricantes/lst", { fabricantes });
});

// Rota para pesquisar material por nome
app.post('/materiais/lst', async (req, res) => {
    const { pesquisar } = req.body;

    const materiais = await MaterialEsportivo.find({
        nome: new RegExp(pesquisar, 'i')
    });

    res.render("materiaisesportivos/lst", { materiais });
});

// Rota para pesquisar academia por nome
app.post('/academias/lst', async (req, res) => {
    const { pesquisar } = req.body;

    const academias = await Academia.find({
        nome: new RegExp(pesquisar, 'i')
    });

    res.render("academias/lst", { academias });
});



app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
