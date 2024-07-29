import React from "react";
import Navbar from "../Navbar";
import styles from "/Users/indianic/Desktop/LearnNEXT/IndiaNic/src/styles/Products.module.css";
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
    <div className={styles.container}>
      <Navbar />
      <header className={styles.header}>
        <h1 style={{ color: "white", borderTop: "1px solid white" }}>
          Products
        </h1>
        <p>Manage and view the status of your products here.</p>
      </header>
      <main className={styles.mainContent}>
        {data.map((item) => (
          <div className={styles.card} key={item.id}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.status}>
              Status:
              <span
                className={
                  item.completed ? styles.completed : styles.notCompleted
                }
              >
                {item.completed ? "Completed" : "Not Completed"}
              </span>
            </p>
            <Link href={`/products/${item.id}`}>
              <div className={styles.detailsButton}>View Details</div>
            </Link>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Products;
