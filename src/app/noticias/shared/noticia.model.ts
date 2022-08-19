import { Istatus } from "./Istatus";

export class Noticia{

  constructor(
    public id: number,
    public titulo: string,
    public descricao: string,
    public texto: string,
    public data: number,
    public status: string
  ){}
}
