import CustomCursor from '../components/CustomCursor';
import ParticleBackground from '../components/ParticleBackground';
import ScrollIndicator from '../components/ScrollIndicator';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Research from '../components/Research';
import Contact from '../components/Contact';
import InfiniteCarousel from '@/components/InfiniteCarousel';

const Index = () => {
   const carouselItems = [
    {
      id: '1',
      title: 'FutureStore',
      image: '/FutureStore.png',
      description: 'Modern E-Commerce website',
      category: 'Web Development',
      url: "https://futurestoree.netlify.app/"
    },
     {
      id: '2',
      title: 'Islamic Banking System',
      image: '/IslamicBanking.png',
      description: 'Modern E-Commerce website',
      category: 'Web Development',
      url: "https://islamicbankingbyhuzaifa.netlify.app/"
    },
    
  ];
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Background Effects */}
      <ParticleBackground />
      <br />
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Scroll Progress Indicator */}
      <ScrollIndicator />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
             <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Featured Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore my latest projects with an interactive 3D carousel experience
              </p>
            </div>
                  <InfiniteCarousel items={carouselItems} autoPlay={true} />

          </div>
        </section>
        
        <br />
        <Education />
        <br />
        <Skills />
        <br />
        <br />
        <Projects />
        <br />
        <br />

        <Research />
        <br />
        <br />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          © Muhammad Huzaifa Iqbal. Built with React & Framer Motion.
        </p>
      </footer>
    </div>
  );
};

export default Index;