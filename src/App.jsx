import { About } from './components/About';
import { Advantages } from './components/Advantages';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HeroVideo } from './components/HeroVideo';
import { Location } from './components/Location';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';

function App() {
  return (
    <div className="app-shell">
      <HeroVideo />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <CallToAction />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
