https://glitch.com/settings/account
tentei fazer o endopont com esse site



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


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
