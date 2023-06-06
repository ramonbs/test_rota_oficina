import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Teste Rota das Oficinas</h1>

            <div className={styles.grid}>
                <Link href="/conversor" className={styles.card}>
                        <h2>
                            Conversor números romanos <span>-&gt;</span>
                        </h2>
                        <p>
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                </Link>

                <Link href="/jogo-da-vida" className={styles.card}>
                        <h2>
                            Jogo da vida <span>-&gt;</span>
                        </h2>
                        <p>
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                </Link>

                <Link href="/conversor" className={styles.card}>
                        <h2>
                            Calculadora restaurante <span>-&gt;</span>
                        </h2>
                        <p>
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                </Link>
            </div>
        </main>
    );
}
