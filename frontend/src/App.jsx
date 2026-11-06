import { useEffect, useState } from "react";
function App() {
  const [eleves, setEleves] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/eleves")
      .then((reponse) => reponse.json())
      .then((donnees) => setEleves(donnees))
      .catch((erreur) => console.log(erreur));
  }, []);
  return (
    <div>
      <h1>Liste des élèves</h1>
      {eleves.map((eleve) => (
        <p key={eleve.id}>
          {eleve.prenom} {eleve.nom}
        </p>
      ))}
    </div>
  );
}
export default App;