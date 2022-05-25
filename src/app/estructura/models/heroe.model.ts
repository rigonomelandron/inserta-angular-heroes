//heroe.model.ts
export class Heroe {
  //Atributos
  constructor(
    public nombre: string,
    public poder: number,
    public honor: number,
    public ataque: number,
    public defensa: number,
    public vida: number,
    public imagen: string
  ) {}
}
