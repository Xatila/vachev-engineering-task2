"use client";
import style from "./index.module.css";
import { useAuth } from "@clerk/nextjs";
import { FC } from "react";

const SignOutButton: FC = () => {
  const { signOut } = useAuth();

  return (
    <button className={style.signOutBtn} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
