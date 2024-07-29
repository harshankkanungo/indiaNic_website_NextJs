import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/service">Service</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-info">
          <p>
            &copy; {new Date().getFullYear()} IndiaNIC. All rights reserved.
          </p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
