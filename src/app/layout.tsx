import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FC } from "react";
import { COMPANY, DEVELOPER } from "@/utils/constants";

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
    <body className={inter.className}></body>
  </html>
);

export default RootLayout;
