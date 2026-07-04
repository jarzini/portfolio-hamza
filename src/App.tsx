import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex">
      {/* Mobile top bar */}
      <TopBar />
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main content area – offset for sidebar on desktop */}
      <main className="flex-1 pt-20 md:ml-64 max-w-4xl mx-auto px-4 md:px-8 lg:px-12 space-y-20 pb-12">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Hobbies />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
