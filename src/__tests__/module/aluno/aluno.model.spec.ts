import { Aluno } from "../../../module/aluno/aluno.model"
let knexServiceMock: any;
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
    it('É obrigatório o Aluno ter um nome ', async () => {
      let knexServiceMock: any;
      //mock do knex
      const knexMock = () => {
          return {
              update: jest.fn().mockReturnValueOnce({
                  nome: 'Exemplo',
                  cpf: 1231231
              }) 
          }
      }
      //mock do serviço knex
      knexServiceMock = {
        obterConexao: jest.fn(() => knexMock)
      }
      //instancia do aluno com o mock do serviço knex
      const aluno = new Aluno(knexServiceMock);
      //testa se a exceção é lançada quando o aluno é atualizado sem nome
      
      try {
        await aluno.update({
          nome: '',
          cpf: 1231231
        });
      } catch (e: any) {
        expect(e.message).toBe('É obrigatório ter um nome')
      }
      
      })
    it('Novo cpf não pode conter letra', async () => {
      //mock do knex
      const knexMock = () => {
          return {
              update: jest.fn().mockReturnValueOnce({
                  nome: 'Exemplo',
                  cpf: 1231231
              }) 
          }
      }
      //mock do serviço knex
      knexServiceMock = {
        obterConexao: jest.fn(() => knexMock)
      }
      //instancia do aluno com o mock do serviço knex
      const aluno = new Aluno(knexServiceMock);
      //testa se a exceção é lançada quando o aluno é atualizado sem nome
        try {
          await aluno.update({
            nome: 'Exemplo',
            cpf: 'sdfsf'
          });
        } catch (e: any) {
          expect(e.message).toBe('O cpf deve conter números')
        }
      })
    
})

  describe('Remover aluno Suite',  () => {
    it('Deve remover um aluno', async () => {
        //mock do knex
      const knexMock = () => {
        return {
            delete: jest.fn().mockReturnValueOnce({
                nome: 'Exemplo',
                cpf: 1231231
            }) 
        }
    }
    console.log(knexMock);
    //mock do serviço knex
    knexServiceMock = {
      obterConexao: jest.fn(() => knexMock)
    }
    //instancia do aluno com o mock do serviço knex
    const aluno = new Aluno(knexServiceMock);
    //testa se a exceção é lançada quando o aluno é atualizado sem nome
      try {
        await aluno.delete({
          cpf: 1231231
        });
      } catch (e: any) {
        expect(true).toBe(true)
      }
      })
    it('Deve retornar um erro caso o aluno não exista na base', () => {
        
    })
  })
})