import { useState, useEffect } from "react"
import './App.css'
import Card from "./Card"

function App() {
  const [evenements, setEvenements] = useState([
  ])

  const chargerDonnees = async () => {
    try {
      const reponse = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20")
      const resultat = await reponse.json()
      
      const donneesFormatees = (resultat.results || []).map(item => ({
        id: item.id || Math.random().toString(),
        title: item.title || item.nom || "Événement",
        lead_text: item.lead_text || "Pas de description disponible",
        cover_url: item.cover_url || "https://placehold.co/280x120?text=Pas+d'image",
        address_name: item.address_name || "Adresse non spécifiée",
        price_type: item.price_type || "gratuit"
      }))





      setEvenements(donneesFormatees)
    } catch (erreur) {
      console.error("Erreur de chargement :", erreur.message)
    }
  }

  useEffect(() => {
    chargerDonnees()
  }, [])

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", backgroundColor: "#f9f9f9" }}>
      <h1>Mon Adataviz  📊</h1>

      <section>
        <h2>📅 Liste des événements ({evenements.length})</h2>
     <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
  {evenements.map((evenement, index) => (
    <Card key={evenement.id || index} evenement={evenement} />
  ))}
</div>
      </section>
    </div>
  )
}

export default App



