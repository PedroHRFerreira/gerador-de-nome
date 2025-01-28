import styles from "./styles.module.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <article className={styles.container}>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Dos mesmos criadores...</footer>
    </article>
  );
}
