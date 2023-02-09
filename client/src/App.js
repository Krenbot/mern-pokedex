import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Auth from './utils/auth'
import Search from './pages/search';
import Trainer from './pages/trainer';
import Login from './pages/login';
import Screen from './components/screen';
import Header from './components/header';

const httpLink = createHttpLin({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = Auth.getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Screen>
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/login' element={<Login />} />
            <Route path='/trainer:id' element={<Trainer />} />
          </Routes>
        </Screen>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
