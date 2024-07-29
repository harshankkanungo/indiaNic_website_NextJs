import React from "react";
import Link from "next/link";
import styles from "../styles/Error.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.errorMessage}>
          Oops! The page you are looking for does not exist.
        </p>
        <Link href="/">
          <div className={styles.homeLink}>Go to Homepage</div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
