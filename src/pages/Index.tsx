import { FC } from 'react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import EducationSection from '@/components/EducationSection';

const Index: FC = () => (
  <ThemeProvider defaultTheme="dark">
    <div className="relative min-h-screen">
      <ThemeToggle />
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  </ThemeProvider>
);

export default Index;