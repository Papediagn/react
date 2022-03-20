import React from 'react'
import { Produit } from './Produit'

export const Produits = ({ liste, del,edit }) => {
  return (

      <table class="table table-info table-tripped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Libelle</th>
            <th scope="col">Prix</th>
            <th scope="col">Actions</th>

          </tr>
        </thead>
        <tbody>
          {
            liste.map(p => <Produit produit={p} del={del} edit={edit}/>)
          }
        </tbody>
      </table>

  )
}
