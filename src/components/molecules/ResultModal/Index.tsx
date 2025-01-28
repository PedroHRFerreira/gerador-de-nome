import styles from "./styles.module.scss";

interface MoleculesResultModalProps {
  generatedName: string;
  onGenerateAgain: () => void;
  onClose: () => void;
}
const MoleculesResultModal = ({
  generatedName,
  onGenerateAgain,
  onClose,
}: MoleculesResultModalProps) => {
  return (
    <aside className={`${styles.modal} ${styles.modalVisible}`}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2 className={styles.modalTitle}>Nome Gerado</h2>
        <p className={styles.generatedName}>{generatedName}</p>
        <button className={styles.generateButton} onClick={onGenerateAgain}>
          Gerar Novamente
        </button>
      </div>
    </aside>
  );
};

export default MoleculesResultModal;
