import { Generico } from "./generico-model";

export class Aluno extends Generico {
  cep?: number;
  endereco?: string;
  numero?: number;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  status?: number
}