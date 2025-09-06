import { Languages, Mail, Accessibility } from "lucide-react";
import  '../styles/accessibility.css'

const ProductLines = () => {
  const services = [
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "We provide multilingual assistance to ensure everyone can access our services with clarity and confidence."
  },
  {
    icon: Mail,
    title: "Reasonable Adjustments",
    description: "Adjustments are available upon request to meet your individual needs — 📧 hello@CompLet101.com."
  },
  {
    icon: Accessibility,
    title: "Disability-Inclusive",
    description: "Proudly committed to accessibility and inclusion, ensuring equal support for all clients."
  }
];

  return (
    <section id="product-lines" className="product-lines-section">
      <div className="product-lines-container">
        <div className="section-header">
          <h2 className="section-title">
            Our Services
          </h2>
          <p className="section-description">
            Comprehensive legal solutions designed to meet your specific needs. 
            From consultation to resolution, we're with you every step of the way.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <service.icon />
              </div>
              <h3 className="service-title">
                {service.title}
              </h3>
              <p className="service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLines;