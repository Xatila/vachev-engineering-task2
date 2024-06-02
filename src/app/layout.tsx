import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { COMPANY, DEVELOPER } from "@/utils/constants";
import { FC } from "react";

type Props = Readonly<{
  children: React.ReactNode;
}>;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${COMPANY} Task 2`,
  description: `The second NextJS app built by ${DEVELOPER} for interview process in ${COMPANY}`,
};

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <ClerkProvider>
        <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
        <main>{children}</main>
      </ClerkProvider>
    </body>
  </html>
);

export default RootLayout;
