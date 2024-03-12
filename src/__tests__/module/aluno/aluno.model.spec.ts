import { Aluno } from "../../../module/aluno/aluno.model"

describe('Aluno model Suite', () => {
  describe('Salvar aluno Suite', () => {
    it('Deve cadastrar um aluno', async () => {
      let knexServiceMock: any

      const knexMock = () => {
        return {
          insert: jest.fn().mockReturnValueOnce([100])
        }
      }
  
      knexServiceMock = {
        obterConexao: jest.fn(() => knexMock)
      }
  
      const aluno = new Aluno(knexServiceMock);
      const response = await aluno.store({
        'nome': 'Jão',
        'cpf': 123
      });
      expect(response).toBeTruthy();
      expect(response).toEqual([100]);
    })
      
    it('Cpf não pode conter letra', async () => {
      let knexServiceMock: any

      const knexMock = () => {
        return {
          insert: jest.fn().mockReturnValueOnce([100])
        }
      }
  
      knexServiceMock = {
        obterConexao: jest.fn(() => knexMock)
      }
  
      const aluno = new Aluno(knexServiceMock);
      try {
        const response = await aluno.store({
          'nome': 'Jão',
          'cpf': 'abc'
        });
      } catch (e: any) {
        expect(e.message).toBe('O cpf deve conter números')
      }
      
      })
    it('É obrigatório o Aluno ter um nome', async () => {
      let knexServiceMock: any

      const knexMock = () => {
        return {
          insert: jest.fn().mockReturnValueOnce([100])
        }
      }
  
      knexServiceMock = {
        obterConexao: jest.fn(() => knexMock)
      }
  
      const aluno = new Aluno(knexServiceMock);
      try {
        const response = await aluno.store({
          "nome": '',
          'cpf': 1231231
        });
      } catch (e: any) {
        expect(e.message).toBe('É obrigatório ter um nome')
      }
      
      })
  })
  describe('Editar aluno Suite', () => {
    it('Deve atualizar um aluno', () => {
        // expect(alunoModel.store({
        //   nome: 'Aluno 1',
        //   cpf: 1231231,
        // })).toEqual([1]) 
      })
    it('Novo cpf não pode conter letra', () => {
        
    })
    it('É obrigatório o Aluno ter um nome', () => {
        
    })
    it('Deve retornar um erro caso o aluno não exista na base', () => {
        
    })
  })
  describe('Ver aluno Suite', () => {
    it('Deve ver um aluno', () => {
        // expect(alunoModel.store({
        //   nome: 'Aluno 1',
        //   cpf: 1231231,
        // })).toEqual([1]) 
      })
    it('Deve retornar um erro caso o aluno não exista na base', () => {
        
    })
  })
  describe('Remover aluno Suite', () => {
    it('Deve remover um aluno', () => {
        // expect(alunoModel.store({
        //   nome: 'Aluno 1',
        //   cpf: 1231231,
        // })).toEqual([1]) 
      })
    it('Deve retornar um erro caso o aluno não exista na base', () => {
        
    })
  })
})