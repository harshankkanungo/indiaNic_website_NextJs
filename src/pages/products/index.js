import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import Footer from "../Footer";

export const getStaticProps = async () => {
  let api = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await api.json();

  return {
    props: { data },
  };
};

const Products = ({ data }) => {
  return (
    <div className="container">
      <Navbar />
      <header className="header">
        <h1 style={{ color: "white", borderTop: "1px solid white" }}>
          Products
        </h1>
        <p>Manage and view the status of your products here.</p>
      </header>
      <main className="mainContent">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <h2 className="title">{item.title}</h2>
            <p className="status">
              Status:
              <span className={item.completed ? "completed" : "notCompleted"}>
                {item.completed ? "Completed" : "Not Completed"}
              </span>
            </p>
            <Link href={`/products/${item.id}`}>
              <div className="detailsButton">View Details</div>
            </Link>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Products;
