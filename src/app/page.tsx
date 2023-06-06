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
                            Calculadora para converter números romanos para arábicos e vice-versa.
                        </p>
                </Link>

                <Link href="/jogo-da-vida" className={styles.card}>
                        <h2>
                            Jogo da vida <span>-&gt;</span>
                        </h2>
                        <p>
                            Jogo da vida baseado no jogo de Conway.
                        </p>
                </Link>

                <Link href="/calculadora-restaurante" className={styles.card}>
                        <h2>
                            Calculadora restaurante <span>-&gt;</span>
                        </h2>
                        <p>
                            Calculadora para dividir a conta do restaurante.
                        </p>
                </Link>
            </div>
        </main>
    );
}
