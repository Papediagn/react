import React, { useState } from 'react'
import { Form } from './Form'
import { Produits } from './Produits'
export const App = () => {
  const [liste, setliste] = useState([
    { id: 1, libelle: "Hp", prix: 4000 },
    { id: 2, libelle: "Dell", prix: 5000 }
  ])
  const init = {
    id: 0,
    libelle: '...',
    prix: 0
  }
  const [current, setcurrent] = useState(init)
  const [editing, setediting] = useState(false)
  const add = () => {
    if (!editing) {
      // setcurrent({ ...current, id: parseInt(Math.random() * 1000) })
      setliste([...liste, { ...current, id: parseInt(Math.random() * 1000) }]);
    } else {
      setliste(liste.map(p => p.id === current.id ? current : p))
      setediting(false)
    }
    setcurrent(init)
  }
  const del = (id) => {
    setliste(liste.filter(p => p.id !== id))
  }
  const edit = (id) => {
    // setliste(liste.filter(p=>p.id!==id))
    let c = liste.find(p => p.id === id)
    setcurrent(c)
    setediting(true)
  }
  return (
    <div className='container text-center'>

      <Form current={current} setcurrent={setcurrent} editing={editing} add={add} />
      <Produits liste={liste} del={del} edit={edit} />
    </div>
  )
}
export default App