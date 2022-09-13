import { Usuario } from '../types/usuario';
import { Request, Response } from "express";
import { requisicaoEndereco } from "../services/requisicaoEndereco";
import { inserirUsuario } from '../data/inserirUsuario';

export async function criarEndereco(req: Request, res: Response) {
  try {
    const cep = req.params.cep

    if(!cep) {
        res.statusCode = 400
        throw new Error(`CEP required.`)
    }

    // requisição de outra API
    const address = await requisicaoEndereco(cep)

    if(!address) {
      res.statusCode = 404
      throw new Error(`This CEP doesn't exist.`)
    }

    const usuarioCadastro: Usuario = {
      logradouro: address.logradouro,
      bairro: address.bairro,
      cidade: address.localidade,
      estado: address.uf
    }

    // inserir no banco de dados
    await inserirUsuario(usuarioCadastro)

    res.status(201).send({message: `Pessoa cadastrada com sucesso.`})
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
