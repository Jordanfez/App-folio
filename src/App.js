import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './page/Home';
import DetailsProduits from './page/DetailsProduits';
import Panier from './Panier';

const App = () => {
  return (
    <Router>
        <Header />
        <main>
         <Container >
            <Routes>

                <Route exact path='/'  element={<Home />} />
                <Route  path='/produits/:id'  element={<DetailsProduits />} />
                <Route  path='/panier/'  element={<Panier />} />
            </Routes>
          </Container>
          </main>
        <Footer />

    </Router>
  )
}

export default App
