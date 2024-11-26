# Meu Projeto React Aula Acelerado Inclusiva

Este é um projeto React que inclui um formulário, um carrossel de imagens, e outros componentes interativos.

## Descrição

O projeto inclui os seguintes componentes:
- **Formulário**: Um formulário que permite aos usuários enviar dados.
- **Carrossel de Imagens**: Um carrossel que exibe imagens.
- **Cartões de Informação**: Cartões que exibem informações.
- **Contador de Cliques**: Um botão que conta quantas vezes foi clicado.
- **Entrada de Texto**: Um campo de entrada que exibe o texto digitado em tempo real.

## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```sh
   git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   cd NOME_DO_REPOSITORIO


# Site que que recebe as informações do formulario por

https://glitch.com/settings/account
tentei fazer o endopont com esse site

https://glitch.com/edit/#!/boatneck-general-magpie?path=server.js%3A13%3A3


# Estava tentando enviar a pagina para github pages pelo Json via npm run deploy, mais não consegui



function App() {
  const [apiKey, setApiKey] = useState('');
  const [apiData, setApiData] = useState(null);
  const [generatedText, setGeneratedText] = useState('');

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    setApiKey(key);

    if (key) {
      axios.get('https://api.example.com/data', {
        headers: {
          'Authorization': `Bearer ${key}`
        }
      })
      .then(response => {
        setApiData(response.data);
      })
      .catch(error => {
        console.error('Erro ao fazer a chamada de API:', error);
      });

      // Chame a função generateText com um prompt
      generateText("Write a story about a magic backpack.")
        .then(text => {
          setGeneratedText(text);
        })
        .catch(error => {
          console.error('Erro ao gerar texto:', error);
        });
    } else {
      console.error('API key is missing');
    }
  }, []);

// src/App.js
import React from 'react';
import Button from './components/Button';
import BoasVindas from './components/BoasVindas';
import Title from './components/Title';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <div className="App">
      <Title text="Página Inicial" />
      <BoasVindas />
      <Greeting name="Guilherme" />
      <Greeting name="Danielle" />
      <Greeting name="Andrea" />
      <Button label="Clique aqui" />
      <Title text="Sobre Nós" />
      <Title text="Contatos" />
    </div>
  );
};

export default App;

