import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="banner">
          <Image
            src="https://dcdh7ea8gkhvt.cloudfront.net/wp-content/uploads/2024/04/career-gallery-img-8.jpeg"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            priority
            className="banner-image"
          />
          <div className="banner-text">
            <h1>Top Web Development Company</h1>
            <p>
              IndiaNIC is a top website design and web development company based
              in India & USA, committed to delivering the best web design and
              development services to businesses worldwide.
            </p>
          </div>
        </div>
        <section className="content-section">
          <h2>Enterprise Solutions</h2>
          <p>
            IndiaNIC is a leading enterprise web development company having
            specialized in creating top quality, multi-level enterprise-grade
            web solutions to meet various corporate needs. Our Experience team
            of expert can develop bespoke enterprise web portals, eCommerce
            solutions, B2B and B2C applications, as well as ERP and CRM software
            apps, reporting, billing, and secure financial transaction
            processing systems, among others.
          </p>
          <h2>E-Commerce</h2>
          <p>
            Indianic is a leading eCommerce web development company that
            specialises in designing magnificent web-based eCommerce solutions
            that offer the ultimate online shopping experience. Our eCommerce
            website development services include full-fledged online eCommerce
            store web design and custom eCommerce web development for small,
            medium, and large-scale retail businesses.
          </p>
          <h2>Mobile Backend & APIs</h2>
          <p>
            Being website development company with over two decades of
            experience, we provide top-notch backend development services for
            web and mobile applications.
          </p>
          <h2>Content Management System</h2>
          <p>
            As a top CMS development company, IndiaNIC offers a complete range
            of content management system (CMS) development services and
            solutions for websites, B2C and B2B portals, enterprise
            applications, and eCommerce solutions.
          </p>
        </section>
        <section className="benefits-section">
          <h2>Besides all that, you get</h2>
          <ul>
            <li>
              5 Days a Week: All weekends off to promote work-life balance and
              mental peace.
            </li>
            <li>
              Flexible Timings: To empower employees to manage things in a
              fast-paced life.
            </li>
            <li>
              Onsite opportunity: National / International travel for onsite
              visits to work with client teams.
            </li>
            <li>
              Training: Practical training & learning from the experts and
              mentors.
            </li>
            <li>
              Rewards: To value and appreciate the performance on a regular
              basis.
            </li>
            <li>
              Team Building: Indoor & outdoor team building workshops and
              activities.
            </li>
            <li>
              Parental Leaves: Get a time-off, welcome your angel & spend
              quality time before you return.
            </li>
            <li>
              Recreation Ground: Pool table, table tennis. Cricket, or anything
              you may ask for.
            </li>
          </ul>
        </section>
        <section className="team-section">
          <h2>Our Leadership Team</h2>

          <div className="team-member">
            <Image
              src="https://media.licdn.com/dms/image/C5603AQGz6l12QB5snw/profile-displayphoto-shrink_200_200/0/1517661856832?e=2147483647&v=beta&t=g_GPK8TXDMa6vsbCxzf8IrAyK3Tb9W4EzonPth6DD58"
              alt="CEO"
              width={150}
              height={150}
              className="team-member-image"
            />
            <div className="team-member-info">
              <h3>CEO</h3>
              <p>
                The CEO of IndiaNIC, <strong>Mr. Sandeep Mundra</strong>, drives
                the vision and strategy of the company.
              </p>
            </div>
          </div>
          <div className="team-member">
            <Image
              src="https://media.licdn.com/dms/image/C4D03AQG8zSKjTKt9_g/profile-displayphoto-shrink_200_200/0/1624278611787?e=2147483647&v=beta&t=cjiOUIMstqnK0Bq4qXHf3XELW2lUV-MmJCH0FLo3q6A"
              alt="Reporting Manager"
              width={150}
              height={150}
              className="team-member-image"
            />
            <div className="team-member-info">
              <h3>Reporting Manager</h3>
              <p>
                Our Reporting Manager, <strong>Div Patel</strong>, ensures
                smooth operations and project management.
              </p>
            </div>
          </div>
          <div className="team-member">
            <Image
              src="https://dcdh7ea8gkhvt.cloudfront.net/wp-content/uploads/2022/02/chandrakanta-pradhanv1.jpeg"
              alt="Chandrakanta Pradhan"
              width={150}
              height={150}
              className="team-member-image"
            />
            <div className="team-member-info">
              <h3>Cluster Head</h3>
              <p>
                Our Cluster Head , <strong> Chandrakanta Pradhan,</strong>, is a
                valued team member contributing to various projects.
              </p>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <h2>What our team says?</h2>
          <div className="testimonial">
            <p>
              "IndiaNIC offers a working environment that enables me to
              understand the perspectives of global clients, helped me to keep
              pace with evolving IT ecosystems, and become an efficient
              presenter in the international market with mentors' support."
            </p>
            <p>Chandrakanta Pradhan - Technology Consultant</p>
          </div>
          <div className="testimonial">
            <p>
              "Time flies so fast! Almost over a decade later, I have developed
              a lot during my time here that has challenged me in numerous ways.
              It is a company where you always have a voice in your team no
              matter who you are, I am glad to be part of it!"
            </p>
            <p>Tarun Malpani - Tech Lead, Mobile App</p>
          </div>
          <div className="testimonial">
            <p>
              "IndiaNIC has provided me with an excellent opportunity to
              demonstrate my abilities. The workplace culture at IndiaNIC is
              supportive of me in every circumstance. That's why I consider
              myself extremely fortunate to be a part of this organisation."
            </p>
            <p>Sandip Prajapati - UI Developer</p>
          </div>
          <div className="testimonial">
            <p>
              "IndiaNIC has a human touch and you can readily coordinate with
              the top management. This company explores & nurtures hidden talent
              by creating a healthy competition fuelled by the willingness to
              contribute and get rewarded."
            </p>
            <p>Keyuri Bosmia - UI/UX Designer</p>
          </div>
          <div className="testimonial">
            <p>
              "Individual ambitions serve the common goal - this is exactly what
              I believed when I joined IndiaNIC with a vision and ambition. I
              firmly believe that IndiaNIC is the right place to learn and to
              execute my thoughts and ideas on any platform."
            </p>
            <p>Vishal Pant - Project Manager</p>
          </div>
          <div className="testimonial">
            <p>
              "IndiaNIC provides me a vision that helped me broaden my horizon.
              Here, I always feel connected with everyone like a family. This
              organisation creates an amazing ambience which instills enthusiasm
              & motivation to achieve goals."
            </p>
            <p>Chetan Detroja - Tech Analyst</p>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
