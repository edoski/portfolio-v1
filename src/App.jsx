import { useEffect } from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

// Main App Component
function App() {
    useEffect(() => {
        const moveGradient = () => {
            const elements = document.querySelectorAll('.bottom-shine-container, .contact-container, hr');
            elements.forEach((el) => {
                el.style.backgroundPosition = `${Math.random() * 100}% ${Math.random() * 100}%`;
            });
        };

        const interval = setInterval(moveGradient, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="top" className="bottom-shine-container">
            <Nav />
            <main>
                <Hero />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;