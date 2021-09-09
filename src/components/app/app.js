import Main from '../pages/main/main.js'
import Info from '../pages/info/info.js'
import Header from '../header/header.js'
import Footer from '../footer/footer.js'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Container, Box } from '@chakra-ui/react'


function App() {
  return (
    <Router> 
      <Container maxW='1000px' d='flex' flexDirection='column' minH='100vh'>
        <Header/>
        <Box as='main' flex='1'>
        <Switch>
            <Route path='/news/:id' component={Info} />
            <Route path='/' component={Main} />
        </Switch>
        </Box>
        <Footer/>
      </Container>
    </Router>
  )
}

export default App
