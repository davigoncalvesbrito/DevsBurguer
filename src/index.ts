import app from "./app";

const porta = process.env.port || 3000;

app.listen(porta,()=>{
    console.log(`servidor fucionando na porta ${porta}`);
});