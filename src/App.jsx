import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import Services from "./components/Services";
import Ready from "./components/Ready";
import Corner from "./components/Corner";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Bg from "./components/Bg";

function App() {
  return (
    <>
      <Corner />
      <Bg />
      <nav className="flex justify-center items-center font-barlow sm:px-16 px-6 bg-primary">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar className="absolute top-0 z-20" />
        </div>
      </nav>

      <main className="bg-gradient-to-t from-gray-800 to-primary flex justify-center items-start">
        <div className="xl:max-w-[1480px] w-full">
          <Header />
        </div>
      </main>

      <section className="flex justify-center items-start sm:px-16 px-6 bg-gray-800">
        <div className="xl:max-w-[1480px] w-full">
          <AboutUs />
        </div>
      </section>

      <section className="flex justify-center items-start bg-black/70 sm:px-16 px-6">
        <div className="xl:max-w-[1480px] w-full">
          <Team />
        </div>
      </section>
      <Ready />
      <section className="flex justify-center items-start bg-gray-800 sm:px-16 px-6">
        <div className="xl:max-w-[1480px] w-full">
          <Services />
        </div>
      </section>
      <section className="bg-neumaticos bg-cover">
        <Testimonials />
      </section>
      <section className="bg-miami bg-cover">
        <div className="flex justify-center items-start bg-black/70 sm:px-16 px-6">
          <div className="xl:max-w-[1480px] w-full">
            <Contact />
          </div>
        </div>
      </section>
      <footer className="bg-primary">
        <Footer />
      </footer>
    </>
  );
}

export default App;
