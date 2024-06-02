"use client";

import { useAuth } from "@clerk/nextjs";
import { FC } from "react";

const SignOutButton: FC = () => {
  const { signOut } = useAuth();

  return <button onClick={() => signOut()}>Sign Out</button>;
};

export default SignOutButton;
