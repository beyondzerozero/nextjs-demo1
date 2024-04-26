import "../styles/globals.css";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Nav } from "./_components/Nav";
import styles from "./layout.module.css";

export default function RootLayout({
  　children,
  }: {
  　children: React.ReactNode;
  }) {
  　// 공통 레이아웃
  　return (
  <html lang="ko">
  <body>
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Nav />
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  </body>
  </html>
  　);
  }