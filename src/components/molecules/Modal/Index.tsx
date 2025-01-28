import { useState } from "react";
import styles from "./styles.module.scss";

const MoleculesModal = ({ onGenerate }) => {
  const [gender, setGender] = useState("male");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleGenerateClick = () => {
    onGenerate(gender);
  };

  return (
    <aside className={styles.modal}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Gerador de Nomes</h2>
        <label htmlFor="gender" className={styles.label}>
          Sexo:
        </label>
        <select
          id="gender"
          name="gender"
          className={styles.select}
          value={gender}
          onChange={handleGenderChange}
        >
          <option value="male">Homem</option>
          <option value="female">Mulher</option>
        </select>

        <button className={styles.generateButton} onClick={handleGenerateClick}>
          Gerar Nome
        </button>
      </div>
    </aside>
  );
};

export default MoleculesModal;
