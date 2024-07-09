export class Usuario {
    private id:number;
    private nome:String;
    private telefone:number;
    private senha:String;
    constructor (id:number,nome:String,telefone:number,senha:String){
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.senha = senha;
    }

    //Receber aa
    public getId():number {
        return this.id;
    }

    public getNome():String {
        return this.nome;
    }

    public getTelefone():number {
        return this.telefone;
    }

    public getSenha():String {
        return this.senha;
    }
    
    //Alterar
    public setId(id:number):void {
        this.id = id;
    }

    public setNome(nome:String):void {
        this.nome = nome;
    }

    public setTelefone(telefone:number):void {
        this.telefone = telefone;
    }

    public setSenha(senha:String):void {
        this.senha = senha;
    }
}