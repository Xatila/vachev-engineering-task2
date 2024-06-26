import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { COMPANY, DEVELOPER } from "@/utils/constants";
import { FC } from "react";
import SignOutButton from "./components/sign-out";

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
        <ChakraProvider>
          <header>
            <SignedIn>
              <UserButton />
              <SignOutButton />
            </SignedIn>
          </header>
          <SignedOut>
            <div className="LogInWrapper">
              <h2>Welcome to task2!</h2>
              <div className="signInButtonStyle">
                <SignInButton />
              </div>
            </div>
          </SignedOut>
          <main>{children}</main>
        </ChakraProvider>
      </ClerkProvider>
    </body>
  </html>
);

export default RootLayout;
