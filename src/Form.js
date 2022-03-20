import React from 'react'

export const Form = ({current,setcurrent,editing,add}) => {
  return (
    <form>
      Libelle:<input type="text" value={current.libelle} onChange={(e)=>setcurrent({...current,libelle:e.target.value})} />
      Prix:<input type="text" value={current.prix} onChange={(e)=>setcurrent({...current,prix:e.target.value})} />
      <button type="button" class="btn btn-info" onClick={add}>{editing ?"Modifier":"Ajouter"}</button>
    </form>
  )
}
