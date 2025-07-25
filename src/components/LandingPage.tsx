import Header from "./landing_page/Header"
import Hero from "./landing_page/Hero"
import Features from "./landing_page/Features"
import HowItWorks from "./landing_page/HowItWorks"
import WhyPolySermo from "./landing_page/WhyPolySermo"
import FAQ from "./landing_page/FAQ"
import Footer from "./landing_page/Footer"

export default function LandingPage() {
  return (
   <div className="min-h-screen w-full bg-slate-900">
        <Header />
        <main className="pt-18">
            <Hero />
            <Features />
            <HowItWorks />
            <WhyPolySermo />
            <FAQ />
            <Footer />
        </main>
   </div>
  )
}
