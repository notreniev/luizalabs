import { Generico } from "./generico-model";

export class Aluno extends Generico {
  id: number;
  nome: string;
  cpf?: string;
  dataNascimento?: string;
  email: string;
  celular: number;
  cep?: number;
  endereco?: string;
  numero?: number;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  status?: number
}