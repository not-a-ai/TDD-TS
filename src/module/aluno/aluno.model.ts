import { Knex } from 'knex';
import { KnexService } from '../../service/knex';

export class Aluno {
  private db: Knex

  constructor(knexService: KnexService) {
    this.db = knexService.obterConexao()
  }

  store = async (params: any) => {
    if (typeof params.cpf !== 'number') {
      throw new Error('O cpf deve conter números')
    }
    if (!params.nome.length) {
      throw new Error('É obrigatório ter um nome')
    }
    return this.db('aluno').insert(params)
  }

  update = async (params: any) => {
    if (typeof params.cpf !== 'number') {
      throw new Error('O cpf deve conter números')
    }
    if (!params.nome || typeof params.nome !== 'string' || params.nome.trim().length === 0) {
      throw new Error('É obrigatório ter um nome')
    }
    return this.db('aluno').update(params)
  }

  delete = async (params: any) => {
    if (!params.cpf) {
      throw new Error('Esse aluno não existe')
    }
    return this.db('aluno').delete(params)
  }
}
