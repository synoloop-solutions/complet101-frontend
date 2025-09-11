// import React from "react";
// import {
//   ArrowRight,
//   ShieldCheck,
//   Scale,
//   FileText,
//   Users,
//   Globe,
//   Accessibility,
// } from "lucide-react";

// export default function ServicesOverview() {
//   return (
//     <main className="min-h-screen flex flex-col text-gray-900 bg-white">
//       {/* HERO */}
//       <section className="py-12 md:py-20 px-6 md:px-8 lg:px-16 text-center">
//         <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
//           Unlock Specialized Support for Your Rights and Business
//         </h1>
//         <p className="mt-4 text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
//           Navigate complex challenges with confidence. Our team of experts
//           provides tailored advice and resources in legal compliance,
//           rights-based advocacy, and business strategy to empower your success.
//         </p>
//       </section>

//       {/* EXPERT LEGAL COMPLIANCE */}
//       <section className="bg-gray-50 py-12 md:py-16 px-6 md:px-8 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-xl md:text-3xl font-semibold">
//             Expert Legal Compliance
//           </h2>
//           <p className="mt-3 text-center text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
//             Ensure your operations adhere to the highest standards of data
//             protection and regulatory compliance with our specialized legal
//             consultation services.
//           </p>

//           <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
//             <ServiceCard
//               Icon={ShieldCheck}
//               title="GDPR Consultation"
//               desc="Expert guidance on GDPR compliance, data privacy audits, and implementation strategies to protect sensitive information."
//             />
//             <ServiceCard
//               Icon={Scale}
//               title="Regulatory Navigation"
//               desc="Assistance with complex regulatory frameworks, ensuring your operations meet legal requirements across jurisdictions."
//             />
//             <ServiceCard
//               Icon={FileText}
//               title="Policy Development"
//               desc="Crafting robust internal policies and procedures to align with legal standards and best practices."
//             />
//           </div>
//         </div>
//       </section>

//       {/* SPECIALIZED RIGHTS-BASED ADVOCACY */}
//       <section className="py-12 md:py-16 px-6 md:px-8 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-xl md:text-3xl font-semibold">
//             Specialized Rights-Based Advocacy
//           </h2>
//           <p className="mt-3 text-center text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
//             Access comprehensive resources and dedicated advocacy to protect
//             your fundamental rights, whether as a consumer or a digital citizen.
//           </p>

//           <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
//             <ServiceCard
//               Icon={Users}
//               title="Consumer Rights Advocacy"
//               desc="Championing consumer rights and providing support for disputes related to goods, services, and digital interactions."
//             />
//             <ServiceCard
//               Icon={Globe}
//               title="Digital Freedom Support"
//               desc="Guidance on online censorship, digital privacy breaches, and ensuring freedom of expression online."
//             />
//             <ServiceCard
//               Icon={Accessibility}
//               title="Access & Inclusion Advisory"
//               desc="Consultation on accessibility standards and inclusive practices to ensure services are available to all."
//             />
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-blue-700 text-white py-10 md:py-14 px-6 md:px-8 lg:px-16 mt-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h3 className="text-lg md:text-2xl font-semibold">
//             Ready to Elevate Your Legal Standing?
//           </h3>
//           <p className="mt-3 text-sm md:text-base text-blue-100 max-w-2xl mx-auto">
//             Connect with our legal specialists to discuss your unique needs and
//             explore how our professional services can safeguard your interests.
//           </p>

//           <div className="mt-6 flex justify-center">
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-blue-700 font-medium shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
//             >
//               <span>Contact Our Experts</span>
//               <ArrowRight className="w-4 h-4" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-gray-100 py-6 px-6 md:px-8 lg:px-16 mt-auto text-gray-600 text-sm">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//           <div>Quick Links &nbsp;|&nbsp; Legal</div>
//           <div className="flex items-center gap-4">
//             <a href="#" aria-label="LinkedIn" className="hover:text-gray-900">
//               in
//             </a>
//             <a href="#" aria-label="Twitter" className="hover:text-gray-900">
//               tw
//             </a>
//             <a href="#" aria-label="Facebook" className="hover:text-gray-900">
//               fb
//             </a>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

// export function ServiceCard({ Icon, title, desc }) {
//   return (
//     <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
//       <div className="flex items-start gap-4">
//         <div className="p-3 rounded-md bg-blue-50">
//           <Icon className="w-6 h-6 text-blue-600" aria-hidden />
//         </div>
//         <div className="flex-1">
//           <h4 className="text-base font-semibold">{title}</h4>
//           <p className="mt-2 text-sm text-gray-600">{desc}</p>
//           <div className="mt-4">
//             <a
//               href="#learn-more"
//               className="text-blue-600 inline-flex items-center gap-2 text-sm font-medium hover:underline"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }
