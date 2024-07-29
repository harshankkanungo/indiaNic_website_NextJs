import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Service = () => {
  return (
    <div>
      <Navbar />
      <main className="services-page">
        <aside className="services-sidebar">
          <h2>Services</h2>
          <ul className="services-menu">
            <li>
              <a href="#discovery-workshop">Discovery Workshop</a>
            </li>
            <li>
              <a href="#web-development">Web Development</a>
            </li>
            <li>
              <a href="#mobile-apps">Mobile Apps</a>
            </li>
            <li>
              <a href="#ai-ml">AI / ML</a>
            </li>
            <li>
              <a href="#ui-ux">UI/UX Consultancy</a>
            </li>
            <li>
              <a href="#devops">DevOps</a>
            </li>
            <li>
              <a href="#qa">QA</a>
            </li>
            <li>
              <a href="#iot">IoT</a>
            </li>
            <li>
              <a href="#marketing">Marketing</a>
            </li>
          </ul>
        </aside>
        <section className="services-content">
          <div id="discovery-workshop" className="service">
            <h2>Discovery Workshop</h2>
            <p>
              Define functional scope of your project to plan project budget and
              timeline.
            </p>
            <a href="#discovery-workshop" className="view-more">
              View More
            </a>
          </div>
          <div id="web-development" className="service">
            <h2>Web Development</h2>
            <p>
              Sculpting modern, dynamic web applications for a digital-first
              world.
            </p>
            <a href="#web-development" className="view-more">
              View More
            </a>
          </div>
          <div id="mobile-apps" className="service">
            <h2>Mobile Apps</h2>
            <p>Designing high-performing mobile apps for a connected future.</p>
            <a href="#mobile-apps" className="view-more">
              View More
            </a>
          </div>
          <div id="ai-ml" className="service">
            <h2>AI / ML</h2>
            <p>Leveraging AI & ML to deliver innovative solutions.</p>
            <a href="#ai-ml" className="view-more">
              View More
            </a>
          </div>
          <div id="ui-ux" className="service">
            <h2>UI/UX Consultancy</h2>
            <p>
              Enhancing experience with intuitive and user-centric design
              services.
            </p>
            <a href="#ui-ux" className="view-more">
              View More
            </a>
          </div>
          <div id="devops" className="service">
            <h2>DevOps</h2>
            <p>Streamlined processes and collaboration for code lifecycle.</p>
            <a href="#devops" className="view-more">
              View More
            </a>
          </div>
          <div id="qa" className="service">
            <h2>QA</h2>
            <p>Delivering excellence with robust automated and manual QA.</p>
            <a href="#qa" className="view-more">
              View More
            </a>
          </div>
          <div id="iot" className="service">
            <h2>IoT</h2>
            <p>Leveraging device ecosystems to build a connected world.</p>
            <a href="#iot" className="view-more">
              View More
            </a>
          </div>
          <div id="marketing" className="service">
            <h2>Marketing</h2>
            <p>
              Crafting result-driven strategies to propel your business forward.
            </p>
            <a href="#marketing" className="view-more">
              View More
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Service;
