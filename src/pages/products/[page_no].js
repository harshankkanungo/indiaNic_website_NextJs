import React from "react";
import { useRouter } from "next/router";
import styles from "/Users/indianic/Desktop/LearnNEXT/IndiaNic/src/styles/ProductDetails.module.css";
import Navbar from "../Navbar";

export const getStaticPaths = async () => {
  let result = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await result.json();

  let paths = data.map((curval) => {
    return {
      params: {
        page_no: curval.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  let id = context.params.page_no;
  let result = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  let data = await result.json();

  return {
    props: { data },
  };
};

const ProductDetails = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Navbar />
          <h1 style={{ color: "white" }}>Product Details</h1>
        </header>
        <main className={styles.mainContent}>
          <div className={styles.card}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.status}>
              Status:
              <span
                className={
                  data.completed ? styles.completed : styles.notCompleted
                }
              >
                {data.completed ? "Completed" : "Not Completed"}
              </span>
            </p>
            <p className={styles.description}>
              <strong>ID:</strong> {data.id}
            </p>
            <button
              className={styles.backButton}
              onClick={() => router.push("/products")}
            >
              Go Back to Products
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductDetails;
