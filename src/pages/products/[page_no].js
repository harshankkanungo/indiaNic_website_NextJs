import React from "react";
import { useRouter } from "next/router";

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
      <div className="container">
        <header className="header">
          <Navbar />
          <h1 style={{ color: "white" }}>Product Details</h1>
        </header>
        <main className="mainContent">
          <div className="card">
            <h2 className="title">{data.title}</h2>
            <p className="status">
              Status:
              <span className={data.completed ? "completed" : "notCompleted"}>
                {data.completed ? "Completed" : "Not Completed"}
              </span>
            </p>
            <p className="description">
              <strong>ID:</strong> {data.id}
            </p>
            <button
              className="detailsButton"
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
