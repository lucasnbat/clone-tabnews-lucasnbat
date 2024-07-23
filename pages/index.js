import { useState } from "react";
import GitComponent from "../components/GitComponent";
import styles from '../styles/global.module.scss'

function Home() {
    const [showModal, setShowModal] = useState(false);

    function showModalBeforeFollow() {
        setShowModal(!showModal);
    }

    const stringHeader = 'Soy el gatito árabe, ¿quieres recibir inteligencia?';
    const stringBody = 'Clic en mi enlace'

    return (
        <>
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className={styles.textContainer}>
                        <p>
                            {stringHeader.toUpperCase()}
                        </p>
                        <p>
                            {stringBody.toUpperCase()}
                        </p>
                    </div>
                    <GitComponent />

                    <button onClick={showModalBeforeFollow}>
                        Receba a inteligência
                    </button>
                </div>
            </div>

            {showModal && (
                <div className={styles.modalContainer}>
                    <div className={styles.modalContentContainer}>
                        <img src="/crazy-cat.webp" />
                        <span>MIAAAAAAAARRRRR TOMI KKKKKKK</span>

                        <button onClick={showModalBeforeFollow}>
                            Me devolve pro tinguilingui, doente
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

/* 
 * export deafult: indica que ele é o primeiro a ser 
 * renderizado e a partir dele todo o resto é renderizado 
 */
export default Home;

/**
 * Dá para ir na anteninha debaixo e 
 * ir na porta (aba do terminal) e ir 
 * na porta 3000 mudar a visibilidade 
 * para public para voce acessar do
 * celular se quiser
 */