import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Browse from '../Browse/Browse';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <main>
                <Switch>
                    <Route path='/' exact>
                        {Landing}
                    </Route>
                    <Route path='/browse'>{Browse}</Route>
                    <Route path='/about'>{About}</Route>
                    <Route path='/contact'>{Contact}</Route>
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;
