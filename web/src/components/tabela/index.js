import React from 'react';

import Botao from '../botao';

const Tabela = props => {
    const { lista, deletar } = props;

    return (
        <table id="items-compras">
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {lista.map((item, index) => (
                    <tr key={index}>
                        <td>{item.produto}</td>
                        <td>{item.quantidade}</td>
                        <td className="centraliza-btn-jc">
                            <Botao cor="primary" texto="Deletar" acao={() => deletar(index)}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Tabela;