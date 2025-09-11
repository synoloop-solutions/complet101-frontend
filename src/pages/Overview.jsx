// ServicesOverview.jsx
import React from "react";
import {
  ShieldCheck,
  Scale,
  BookOpen as FileText,
  Users,
  Globe,
  Accessibility,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Button from "../components/Button";

export default function ServicesOverview({ onBack, onNavigate }) {
  const navItems = [
    { label: "Home", href: "/", active: false },
    { label: "Services", href: "/serviceshub", active: false },
    { label: "Overview", href: "/servicesoverview", active: true },
  ];

  const sections = [
    {
      title: "Expert Legal Compliance",
      subtitle:
        "Ensure your operations adhere to the highest standards of data protection and regulatory compliance with our specialized legal consultation services.",
      items: [
        {
          title: "GDPR Consultation",
          desc: "Expert guidance on GDPR compliance, data privacy audits, and implementation strategies to protect sensitive information.",
          Icon: ShieldCheck,
        },
        {
          title: "Regulatory Navigation",
          desc: "Assistance with complex regulatory frameworks, ensuring your operations meet legal requirements across jurisdictions.",
          Icon: Scale,
        },
        {
          title: "Policy Development",
          desc: "Crafting robust internal policies and procedures to align with legal standards and best practices.",
          Icon: FileText,
        },
      ],
    },
    {
      title: "Specialized Rights-Based Advocacy",
      subtitle:
        "Access comprehensive resources and dedicated advocacy to protect your fundamental rights, whether as a consumer or a digital citizen.",
      items: [
        {
          title: "Consumer Rights Advocacy",
          desc: "Championing consumer rights and providing support for disputes related to goods, services, and digital interactions.",
          Icon: Users,
        },
        {
          title: "Digital Freedom Support",
          desc: "Guidance on online censorship, digital privacy breaches, and ensuring freedom of expression online.",
          Icon: Globe,
        },
        {
          title: "Access & Inclusion Advisory",
          desc: "Consultation on accessibility standards and inclusive practices to ensure services are available to all.",
          Icon: Accessibility,
        },
      ],
    },
  ];

  const handleNavClick = (href, label) => {
    if (onNavigate) onNavigate(href, label);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <Navigation
        logoText="CompLet101"
        navItems={navItems}
        showBackButton={true}
        onBackClick={onBack}
        onNavClick={(item) => handleNavClick(item.href, item.label)}
      />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <Heading
          level="h1"
          size="large"
          weight="extrabold"
          align="center"
          marginBottom="8px"
          color="black"
        >
          Unlock Specialized Support for Your Rights
          <span className="block">and Business</span>
        </Heading>

        <p className="mt-6 max-w-2xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed">
          Navigate complex challenges with confidence. Our team of experts
          provides tailored advice and resources in legal compliance,
          rights-based advocacy, and business strategy to empower your success.
        </p>
      </section>

      {/* SECTIONS */}
      <div className="space-y-20 px-4 sm:px-6">
        {sections.map((section, si) => (
          <section key={si}>
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                {section.title}
              </h2>

              <p className="mt-3 text-slate-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                {section.subtitle}
              </p>

              {/* Cards grid */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((it, idx) => (
                  <article
                    key={idx}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center text-center h-full"
                  >
                    <div className="flex-none w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                      <it.Icon className="w-7 h-7 text-[#3772FF]" />
                    </div>

                    <h3
                      id={`card-${si}-${idx}-title`}
                      className="text-lg font-semibold mb-3"
                    >
                      {it.title}
                    </h3>

                    <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 flex-1">
                      {it.desc}
                    </p>

                    <button
                      type="button"
                      className="text-sm font-medium inline-flex items-center gap-2 text-[#3772FF] hover:underline"
                      onClick={() => console.log("Learn more:", it.title)}
                    >
                      Learn More →
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-20 bg-[#3772FF] text-white">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            Ready to Elevate Your Legal Standing?
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-blue-100 leading-relaxed">
            Connect with our legal specialists to discuss your unique needs and
            explore how our professional services can safeguard your interests.
          </p>

          <div className="mt-6 flex justify-center">
            <Button
              variant="primary"
              size="medium"
              onClick={() => console.log("Contact clicked")}
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-6">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-600 gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
            <a href="#" className="hover:text-[#3772FF] text-center">
              Quick Links
            </a>
            <a href="#" className="hover:text-[#3772FF] text-center">
              Legal
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
            <a href="#" className="hover:text-[#3772FF] text-center">
              Quick Links
            </a>
            <a href="#" className="hover:text-[#3772FF] text-center">
              Legal
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
