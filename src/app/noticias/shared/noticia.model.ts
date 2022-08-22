
export class Noticia{

  constructor(
    public id?: number,
    public titulo?: string,
    public descricao?: string,
    public texto?: string,
    public data?: number,
    public fakenews: boolean=false
  ){}
}
