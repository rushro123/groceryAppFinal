import React from "react";
import '../styles/About.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import StatsCounter from './about/StatsCounter.jsx';

import { NavLink } from "react-router-dom";




const teamMembers = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    instagram: "#",
    linkedin: "#",
    facebook: "#"
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    instagram: "#",
    linkedin: "#",
    facebook: "#"
  },
  {
    name: "evan watson",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    instagram: "#",
    linkedin: "#",
    facebook: "#"
  },
  {
    name: "anathon",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    instagram: "#",
    linkedin: "#",
    facebook: "#"
   },
  // Add more team members as needed
];




const AboutPage = () => {

  return (

    
    <div>

      <section className="intro">
        <div className="container">
          <p className="intro-title">Why people trust us?</p>
          <div className="orange-divider"></div>
          <h3>We Propose The Best Services</h3>
          <p className="intro-desc">
            We are passionate about delivering organic products straight from
            our farm to your table, ensuring health and quality in every bite.
          </p>

          <StatsCounter />
        </div>
      </section>

      <section className="main-content">
         <h3 className="sub-heading">Best Online Grocery Features</h3>
           <h1 className="main-heading">Various Fresh Organic Products</h1>

        <div className="features-grid">
         <div className="card"> {/* Top Left */}
          <h3>Green Leafy Vegetables</h3>
           <p>Packed with vitamins and antioxidants, our leafy greens boost immunity and support a healthy lifestyle.</p>
           <NavLink className="shop-btn" to={"/shop"}>SHOP NOW</NavLink>
        </div>

        <div className="card"> {/* Top Center */}
          <h3>Nutritional Vegetables</h3>
           <p>Enjoy a variety of hand-picked vegetables rich in fiber, essential minerals, and plant-based nutrients.</p>
           <NavLink className="shop-btn" to={"/shop"}>SHOP NOW</NavLink>
        </div>

        <div className="card"> {/* Top Right */}
          <h3>Organic Root Vegetables</h3>
           <p>Fresh from the soil, these root veggies are organically grown to preserve taste and nutrition.</p>
           <NavLink className="shop-btn" to={"/shop"}>SHOP NOW</NavLink>
        </div>

       <div className="image-center"> {/* Center Image */}
        <img
        src="https://dt-namm-organic.myshopify.com/cdn/shop/files/Untitled-1_2x_23ba0222-d568-4576-8dc5-7f397e8ea343.png?v=1673962847&width=550"
        alt="Vegetables"
        />
       </div>

      <div className="card"> {/* Bottom Left */}
       <h3>100% Organic Products</h3>
        <p>No pesticides, no chemicals—just naturally grown produce you can trust for your family.</p>
         <a href="#" className="shop-link">Shop Now</a>
      </div>

      <div className="card"> {/* Bottom Center */}
       <h3>Dry Fruits & Nuts</h3>
        <p>A wholesome mix of premium dry fruits and nuts, perfect for snacking or boosting daily energy.</p>
        <NavLink className="shop-btn" to={"/shop"}>SHOP NOW</NavLink>
      </div>

      <div className="card"> {/* Bottom Right */}
       <h3>High Fiber Fruits</h3>
        <p>Fiber-rich fruits that promote digestion and help maintain a healthy metabolism.</p>
        <NavLink className="shop-btn" to={"/shop"}>SHOP NOW</NavLink>
      </div>

      <div className="card"> {/* Bottom Right */}
       <h3>Cold-Pressed Oils</h3>
        <p>Extracted without heat or chemicals, our cold-pressed oils retain all the natural nutrients for heart-healthy cooking</p>
        <NavLink className="shop-btn" to={"/shop"}>SHOP NOW</NavLink>
      </div>

      <div className="card"> {/* Bottom Right */}
       <h3>Organic Dairy Products</h3>
        <p>Sourced from grass-fed cows, our dairy range includes fresh milk, ghee, curd, and paneer — all free from additives.</p>
        <NavLink className="shop-btn" to={"/shop"}>SHOP NOW</NavLink>
      </div>
      </div>
     </section>


<br></br>

<section className="deal-section">
  <div className="deal-container">
    <div className="deal-image">
      <img
        src="https://dt-namm-organic.myshopify.com/cdn/shop/files/about-img1.png?v=1674629774&width=1500"
        alt="Pomegranate Deal"
      />
    </div>
    <div className="deal-text">
      <h3>Deal Ends Soon</h3>
      <p>
        Hurry up..If you want to eat healthy then shop from 
        namm-organic right now
      </p>
      
      <NavLink className="shop-btn" to={"/shop"}>SHOP NOW</NavLink>
      
    </div>
  </div>
</section>

<br></br>
<br></br>
<br></br>

      <section className="main-section">
        <h3 className="main-heading">Let The Environment Be Green Let It Be Fresh</h3>
         <div className="content-wrapper">
           <div className="left-section">
            <img 
              src="https://dt-namm-organic.myshopify.com/cdn/shop/files/AdobeStock_489003905_2x_5bb23a49-d77a-4959-8c26-449e0caa7a62.png?v=1681977314&width=1500" 
                alt="Farmer" 
                className="main-image" 
            />
        <div className="stat stat1">
        <p>
          Farmers<br />
          <strong>200+</strong>
        </p>
      </div>
      <div className="stat stat2">
        <p>
          Land Acres<br />
          <strong>86K</strong>
        </p>
      </div>
    </div>
    <div className="right-section">
      <div className="mini-imgs">
        <img 
          src="https://dt-namm-organic.myshopify.com/cdn/shop/files/custom1.png?v=1674880213&width=550" 
          alt="Grapes" 
        />
        <img 
          src="https://dt-namm-organic.myshopify.com/cdn/shop/files/custom2.png?v=1674880227&width=550" 
          alt="Vegetables" 
        />
      </div>
      <p className="description">
        Our services are rooted in sustainability, trust, and a deep commitment to your well-being.
        Every product we offer is a result of thoughtful farming, ethical practices, and a passion for health.
        From our carefully sourced farms to your doorstep, quality and purity remain at the heart of everything we do.
      </p>
      <br></br>
      <h3 class="shop-button"><button> <NavLink to={"/shop"}>SHOP NOW</NavLink></button></h3>
    </div>
  </div>
</section>


      <section className="team">
      <div className="container">
        <h3>Meet Our Team</h3>
        <div className="team-list">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="image-container">
                <img src={member.image} alt={`Team Member ${index + 1}`} />
                <div className="social-links">
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
              <span>{member.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    
      <section className="double-promo">
        <div className="container">
          <div className="double-card">
            <img
              src="https://dt-namm-organic.myshopify.com/cdn/shop/files/about-grid-3.png?v=1674633521&width=1500"
              alt="Fresh Fruit"
            />
            <div className="card-content">
              <h4>Fresh &amp; Organic Fruits &amp; Veggies</h4>
              <p>Guaranteed farm-to-fork, always fresh.</p>
              <button>Shop Fresh</button>
            </div>
          </div>
          <div className="double-card">
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80"
              alt="Best Quality Greens"
            />
            <div className="card-content">
              <h4>Best Quality Locally &amp; Greenhouse Grown</h4>
              <p>Support local agriculture and eco-practices.</p>
              <button>Shop Quality</button>
            </div>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <img
            src="https://dt-namm-organic.myshopify.com/cdn/shop/files/logo1.png?v=1674045219&width=1500"
            alt="Partner Acacia Logo"
          />
          <img
            src="https://dt-namm-organic.myshopify.com/cdn/shop/files/logo2.png?v=1674045240&width=1500"
            alt="Partner Plant Food Logo"
          />
          <img
            src="https://dt-namm-organic.myshopify.com/cdn/shop/files/logo3.png?v=1674045255&width=1500"
            alt="Partner Generic Logo"
          />
        </div>
      </section>


      <section className="image-gallery">
     <div className="image-container">
    <img src="https://dt-namm-organic.myshopify.com/cdn/shop/files/AdobeStock_86137647_2x_af8a98fe-93f3-4552-a25d-740343deb4f5.png?v=1674653323" alt="Fresh vegetables" />
    <img src="https://dt-namm-organic.myshopify.com/cdn/shop/files/AdobeStock_489003905_2x_f331197d-c931-46b7-af20-4e27d090a9f2.png?v=1674658311" alt="Happy woman with basket" />
    <img src="https://dt-namm-organic.myshopify.com/cdn/shop/files/AdobeStock_452754668_2x_c573491a-0b73-4a58-8864-d811710ee8cc.png?v=1674658334" alt="Potatoes in soil" />
    <img src="https://dt-namm-organic.myshopify.com/cdn/shop/files/AdobeStock_89905216_2x_bd40fbbe-01de-488e-95d3-b28cadf9b542.png?v=1674658380" alt="Beetroot on board" />
    <img src="https://dt-namm-organic.myshopify.com/cdn/shop/files/AdobeStock_244393421_2x_25710a3c-fe75-46c6-87af-72584ee39da2.png?v=1674658403" alt="Cauliflower holding" />
    <img src="https://dt-namm-organic.myshopify.com/cdn/shop/files/AdobeStock_521557286_2x_118410c8-87a8-4eed-8389-31d9c5b5eb34.png?v=1674658473" alt="Couple walking in farm" />
  </div>
     </section>


    </div>
  );
};

export default AboutPage;
