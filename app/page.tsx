import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

export default function Home() {
  return (
    <div>
      <BackgroundGradientAnimation>
        <div>
          <section>
            <Header />
          </section>
          {/* Hero Section */}
          <section>
            <Hero />
          </section>
        </div>
        {/* Hero Section */}
      </BackgroundGradientAnimation>
    </div>
  );
}
