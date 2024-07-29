import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="https://media.licdn.com/dms/image/C560BAQGkAKzDIE5A2A/company-logo_200_200/0/1631376167992?e=2147483647&v=beta&t=68lzqHRp4rfP85pOoBoSdNlUDqhzO_jJ-TuQx5xERP4"
        />
        <title>Next JS Website</title>
      </Head>
      <header className={isSticky ? "sticky" : ""}>
        <nav className="nav-box">
          <Image
            className="img"
            src="https://media.licdn.com/dms/image/C560BAQGkAKzDIE5A2A/company-logo_200_200/0/1631376167992?e=2147483647&v=beta&t=68lzqHRp4rfP85pOoBoSdNlUDqhzO_jJ-TuQx5xERP4"
            height={35}
            width={35}
            alt="Company Logo"
          />
          <div className="router">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/service">Service</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
