import mongoose from "mongoose";

const url = "mongodb+srv://admin:123@cluster0.nfykzm2.mongodb.net/"

const conexao = await mongoose.connect(url)

export default conexao

