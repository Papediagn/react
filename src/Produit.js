import React from 'react'

export const Produit = ({produit,del,edit}) => {
    let   { id, libelle, prix }=produit;
    return (
        <tr>
            <td>{id}</td>
            <td>{libelle}</td>
            <td>{prix}</td>
            <td>
                <button className="btn btn-danger" onClick={()=>del(id)}>S</button>
                <button className="btn btn-warning" onClick={()=>edit(id)}>M</button>

            </td>

        </tr>
    )
}
