import { Usuario } from '../types/usuario';
import { connection } from './connection';

export async function inserirUsuario(usuario: Usuario) {

    await connection('usuarioCEP')
    .insert(usuario)
} 