"use client";

import styles from "./page.module.css";

import { useAuth } from "@clerk/nextjs";
import Dashboard from "@/app/components/dashboard";

const Home = () => {
  const { isSignedIn } = useAuth();

  return <main className={styles.main}>{isSignedIn && <Dashboard />}</main>;
};

export default Home;
