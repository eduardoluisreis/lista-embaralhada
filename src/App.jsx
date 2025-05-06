import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [gerenteEquipe, setGerenteEquipe] = useState('');
  const [gerenteGeral, setGerenteGeral] = useState('');
  const [lista, setLista] = useState([]);
  const [nextId, setNextId] = useState(1);

  const adicionar = () => {
    if (nome.trim() !== '') {
      const novoRegistro = {
        id: nextId,
        nome: nome.trim(),
        gerenteEquipe: gerenteEquipe.trim(),
        gerenteGeral: gerenteGeral.trim(),
      };
      setLista([...lista, novoRegistro]);
      setNextId(nextId + 1);
      setNome('');
      setGerenteEquipe('');
      setGerenteGeral('');
    }
  };

  const embaralhar = () => {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    setLista(copia);
  };

  const limpar = () => {
    setLista([]);
    setNextId(1);
  };

  return (
    <div style={styles.container}>
      <h1>Embaralhador de Nomes</h1>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Gerente de Equipe"
        value={gerenteEquipe}
        onChange={(e) => setGerenteEquipe(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Gerente Geral"
        value={gerenteGeral}
        onChange={(e) => setGerenteGeral(e.target.value)}
        style={styles.input}
      />
      <br />

      <button onClick={adicionar} style={styles.button}>Adicionar</button>
      <button onClick={embaralhar} style={styles.button}>Embaralhar</button>
      <button onClick={limpar} style={styles.clearButton}>Limpar</button>

      {lista.length > 0 && (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Gerente de Equipe</th>
              <th>Gerente Geral</th>
              <th>Posição Atual</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.gerenteEquipe}</td>
                <td>{item.gerenteGeral}</td>
                <td>{index + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '2rem auto',
    padding: '1rem',
    textAlign: 'left',
    fontFamily: 'Arial',
  },
  input: {
    padding: '8px',
    width: '60%',
    margin: '5px',
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  clearButton: {
    margin: '5px',
    padding: '10px 20px',
    backgroundColor: '#ddd',
    color: '#000',
    border: '1px solid #aaa',
    borderRadius: '5px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  th: {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    padding: '8px',
  },
  td: {
    border: '1px solid #ccc',
    padding: '8px',
  },
};

export default App;
