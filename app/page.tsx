import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background - positioned absolutely to cover entire viewport */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <BackgroundGradientAnimation />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <section>
          <Header />
        </section>

        {/* Hero Section */}
        <section className="flex justify-center items-center mt-10">
          <Hero />
        </section>
      </div>
    </div>
  );
}
