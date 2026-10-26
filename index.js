import express from 'express'
const app = express();
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", "./views");
//importar nossos modelos
import Especie from 
'./models/Especie.js'
import Dinossauro from './models/Dinossauro.js'
import Paleontologo from './models/Paleontologo.js';



app.get('/', (req, res) => {
    //envio de informação para o EJS
    
    res.render("index");
})

app.get('/dinossauro',async (req, res) => {
    const dinossauros= await Dinossauro.find();
    res.render("dinossauro/lst",{dinossauros});
})

app.get('/especie', async (req, res) => {
 const especies = await Especie.find();
 res.render("especie/lst",{especies});
})
app.get('/paleontologo', async (req, res) => {
 const paleontologos = await Paleontologo.find();
 res.render("paleontologo/lst",{paleontologos});
})

app.get('/dinossauro/add', (req, res) => {
    res.render("dinossauro/add");
})

app.get('/especie/add', async (req, res) => {
 res.render("especie/add"); 
})
app.get('/paleontologo/add', async (req, res) => {
 res.render("paleontologo/add"); 
})
app.post('/dinossauro/add', async (req, res) => {
 const {nome,especie,dieta,anoDescoberta,descricao,altura,peso}=req.body
 await Dinossauro.create({nome,especie,dieta,anoDescoberta,descricao,altura,peso})
 res.render("dinossauro/add"); 
})
app.post('/paleontologo/add', async (req, res) => {
 const {nome,nascimento,descoberta}=req.body
 await Paleontologo.create({nome,nascimento,descoberta})
 res.render("paleontologo/add"); 
})
app.post('/especie/add', async (req, res) => {
 const {nome,periodo}=req.body
 await Especie.create({nome,periodo})
 res.render("especie/add"); 
})
app.get('/especie/del/:id', async (req, res) => {
    await Especie.findByIdAndDelete(req.params.id)
 const especies = await Especie.find();
 res.render("especie/lst",{especies});
})
app.get('/dinossauro/del/:id',async (req, res) => {
    await Dinossauro.findByIdAndDelete(req.params.id)
    const dinossauros= await Dinossauro.find();
    res.render("dinossauro/lst",{dinossauros});
})
app.get('/paleontologo/del/:id',async (req, res) => {
    await Paleontologo.findByIdAndDelete(req.params.id)
    const paleontologos= await Paleontologo.find();
    res.render("paleontologo/lst",{paleontologos});
})
app.get('/especie/upd/:id', async (req, res) => {
 const especie = await Especie.findById(req.params.id);
 res.render("especie/upd",{especie})
})
app.get('/dinossauro/upd/:id', async (req, res) => {
 const dinossauro = await Dinossauro.findById(req.params.id);
 res.render("dinossauro/upd",{dinossauro})
})
app.get('/paleontologo/upd/:id', async (req, res) => {
 const paleontologo = await Paleontologo.findById(req.params.id);
 res.render("paleontologo/upd",{paleontologo})
})
app.post('/especie/upd/:id', async (req, res) => {
     const {id,nome,periodo}=req.body 
     await Especie.findByIdAndUpdate(id,{nome,periodo});
     const especies=await Especie.find()
 res.render("especie/lst",{especies})
})
app.post('/dinossauro/upd/:id', async (req, res) => {
    const {id,nome,especie,peso,altura,anoDescoberta,dieta,descricao}=req.body 
    await Dinossauro.findByIdAndUpdate(id,{nome,especie,peso,altura,anoDescoberta,dieta,descricao});
    const dinossauros = await Dinossauro.find();
 res.render("dinossauro/lst",{dinossauros})
})
app.post('/paleontologo/upd/:id', async (req, res) => {
    const {id,nome,nascimento,descoberta} =req.body
    await Paleontologo.findByIdAndUpdate(id,{nome,nascimento,descoberta});
    const paleontologos = await Paleontologo.find();
 res.render("paleontologo/lst",{paleontologos})
})
app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`);
});