import { useState } from "react";
import styles from "./styles.module.scss";
import MoleculesModal from "@/components/molecules/Modal/Index";
import MoleculesResultModal from "@/components/molecules/ResultModal/Index";

const OrganismsAllModal = () => {
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [generatedName, setGeneratedName] = useState("");
  const [selectedGender, setSelectedGender] = useState("male");

  const maleNames = [
    ["Lucas", "Henrique", "Silva", "Oliveira"],
    ["Carlos", "Eduardo", "Souza", "Pereira"],
    ["Vinícius", "Gabriel", "Costa", "Ferreira"],
    ["Davi", "Guilherme", "Santos", "Lima"],
    ["Rafael", "Arthur", "Mendes", "Martins"],
    ["Pedro", "Gustavo", "Almeida", "Souza"],
    ["Felipe", "Ricardo", "Rodrigues", "Silva"],
    ["João", "Paulo", "Alves", "Cardoso"],
    ["Matheus", "José", "Nunes", "Pereira"],
    ["André", "Augusto", "Cunha", "Lopes"],
    ["Thiago", "Fábio", "Barbosa", "Costa"],
    ["Henrique", "Felipe", "Ribeiro", "Alves"],
    ["Gabriel", "Diego", "Martins", "Barros"],
    ["Murilo", "Vitor", "Ferreira", "Souza"],
    ["Ricardo", "Eduardo", "Gomes", "Santos"],
    ["Luiz", "Roberto", "Pinto", "Cardoso"],
    ["Erick", "Luiz", "Silva", "Campos"],
    ["Caio", "Leandro", "Nascimento", "Almeida"],
    ["Renan", "João", "Barbosa", "Carvalho"],
    ["Vinícius", "Lucas", "Cavalcanti", "Farias"],
    ["Maurício", "Alexandre", "Martins", "Dias"],
    ["José", "Fernando", "Silveira", "Lima"],
    ["Alex", "Humberto", "Moraes", "Fonseca"],
    ["Gustavo", "Leonardo", "Ferreira", "Silva"],
    ["Eduardo", "Marcelo", "Pereira", "Dias"],
    ["Otávio", "Jonatas", "Campos", "Santos"],
    ["Douglas", "Renato", "Alves", "Gomes"],
    ["Leonardo", "Vitor", "Souza", "Pimentel"],
    ["Flávio", "Carlos", "Marques", "Gonçalves"],
    ["Felipe", "Márcio", "Cavalcanti", "Silva"],
    ["Emerson", "Paulo", "Santos", "Alves"],
    ["Luan", "José", "Ribeiro", "Dantas"],
    ["Bruno", "Thiago", "Costa", "Gomes"],
    ["Mário", "Roberto", "Lima", "Barbosa"],
    ["Antonio", "Carlos", "Pereira", "Nascimento"],
    ["Leonardo", "Renan", "Alves", "Sousa"],
    ["Júlio", "Paulo", "Costa", "Rodrigues"],
    ["Henrique", "Vítor", "Gomes", "Sousa"],
    ["Mário", "Douglas", "Barros", "Silva"],
    ["Arthur", "André", "Silveira", "Lopes"],
    ["José", "Roberto", "Nascimento", "Farias"],
    ["Samuel", "Marcelo", "Martins", "Gonçalves"],
    ["Cássio", "Fábio", "Lima", "Santos"],
    ["Rodrigo", "Guilherme", "Siqueira", "Alves"],
    ["Adriano", "Matheus", "Costa", "Cardoso"],
    ["Alfredo", "Antônio", "Ribeiro", "Sousa"],
    ["Lucas", "Thiago", "Cunha", "Ribeiro"],
    ["Gustavo", "Renan", "Mendes", "Silva"],
    ["Robson", "Guilherme", "Silveira", "Barbosa"],
    ["Carlos", "Roberto", "Barros", "Nascimento"],
    ["Kleber", "Hugo", "Oliveira", "Costa"],
    ["Mário", "David", "Martins", "Cavalcanti"],
    ["Vítor", "Felipe", "Dias", "Silva"],
    ["Marcos", "Felipe", "Souza", "Ferreira"],
    ["Ariel", "Danilo", "Silveira", "Sousa"],
    ["Ricardo", "Miguel", "Cunha", "Barros"],
    ["Fernando", "Renan", "Almeida", "Santos"],
    ["Max", "Douglas", "Costa", "Santos"],
    ["Caio", "Fábio", "Rodrigues", "Martins"],
    ["Emerson", "Lucas", "Oliveira", "Dias"],
    ["Thiago", "Maurício", "Alves", "Cardoso"],
    ["Cláudio", "Robson", "Farias", "Silveira"],
    ["Victor", "André", "Ribeiro", "Nascimento"],
    ["Iago", "Samuel", "Silva", "Mendes"],
    ["Diego", "Hugo", "Costa", "Almeida"],
    ["Rafael", "Lucas", "Pereira", "Rodrigues"],
    ["Rogério", "Ricardo", "Alves", "Moraes"],
    ["Alexandre", "Vítor", "Nunes", "Barros"],
    ["Gustavo", "Renato", "Souza", "Lopes"],
    ["Miguel", "Fábio", "Cardoso", "Martins"],
    ["Matheus", "Danilo", "Silveira", "Santos"],
    ["Icarus", "Júpiter", "Marques", "Dantas"],
    ["Óscar", "Zé", "Lima", "Barroso"],
    ["Theo", "Xander", "Nogueira", "Souza"],
    ["Gustavo", "Thiago", "Freitas", "Alves"],
    ["Natan", "Lucas", "Ribeiro", "Martins"],
    ["Arthur", "Felipe", "Silveira", "Lima"],
    ["Vicente", "Guilherme", "Pereira", "Barros"],
    ["Axel", "Victor", "Costa", "Alves"],
    ["Renato", "César", "Gomes", "Oliveira"],
    ["Danilo", "Edson", "Souza", "Farias"],
    ["Jean", "Alexandre", "Pinto", "Mendes"],
    ["Léo", "César", "Ribeiro", "Martins"],
    ["Enzo", "Caio", "Nunes", "Carvalho"],
    ["Otávio", "Thiago", "Ferreira", "Lopes"],
    ["Natan", "José", "Santos", "Cardoso"],
    ["Márcio", "Jorge", "Silva", "Costa"],
    ["Paulo", "Ricardo", "Pereira", "Martins"],
    ["Tiago", "Lucas", "Gomes", "Silveira"],
    ["Mário", "Juliano", "Nascimento", "Farias"],
    ["Coleco", "Jancinto", "Pinto", "Rivaldo"],
    ["Jesus", "Ilegível", "Inilegível", "Inocêncio"],
    ["Coitadinho", "Janeiro", "Fevereiro", "Março"],
    ["Abril", "Lança", "Perfume", "Rodometálico"],
    ["Andrade", "Marciano", "Verdinho", "das Antenas"],
    ["Longas", "Maria", "Privada", "de Jesus"],
    ["Maria", "Tributina", "Prostituta", "Cataerva"],
    ["Maria-você-me-mata", "Mimaré", "Índio", "Brazileiro"],
    ["de", "Campos", "Napoleão", "Sem Medo"],
    ["Sem", "Mácula", "Natal", "Carnaval"],
    ["Necrotério", "Pereira", "da Silva", "Oceâno"],
    ["Atlântico", "Linhares", "Otávio", "Bundasseca"],
    ["Pacífico", "Armando", "Guerra", "Padre"],
    ["Filho", "do Espírito", "Santo", "Amém"],
    ["Plácido", "e", "Seus", "Companheiros"],
    ["Remédio", "Amargo", "Renato", "Pordeus"],
    ["Furtado", "Restos", "Mortais", "de Catarina"],
    ["Rocambole", "Simionato", "Universo", "Cândido"],
    ["Vicente", "Mais ou Menos", "de Souza", "Zélia"],
    ["Tocafundo", "Pinto"],
  ];

  const femaleNames = [
    ["Ana", "Carolina", "Santos", "Costa"],
    ["Beatriz", "Alves", "Fernandes", "Lima"],
    ["Maria", "Eduarda", "Souza", "Pereira"],
    ["Juliana", "Fernanda", "Rodrigues", "Barros"],
    ["Camila", "Rafaela", "Almeida", "Gomes"],
    ["Larissa", "Roberta", "Silva", "Costa"],
    ["Juliana", "Beatriz", "Lopes", "Martins"],
    ["Gabriela", "Carla", "Mendes", "Santos"],
    ["Patrícia", "Fernanda", "Nunes", "Pinto"],
    ["Débora", "Patrícia", "Silveira", "Farias"],
    ["Isabela", "Cristina", "Pereira", "Matos"],
    ["Mariana", "Gisele", "Alves", "Cavalcanti"],
    ["Amanda", "Fernanda", "Nascimento", "Carvalho"],
    ["Paula", "Raquel", "Souza", "Rodrigues"],
    ["Renata", "Carolina", "Oliveira", "Dias"],
    ["Carolina", "Lorena", "Santos", "Gomes"],
    ["Aline", "Mariana", "Moraes", "Cavalcante"],
    ["Lúcia", "Alessandra", "Barbosa", "Silva"],
    ["Bruna", "Kátia", "Campos", "Sousa"],
    ["Raiane", "Amanda", "Alves", "Gomes"],
    ["Vanessa", "Tânia", "Costa", "Ferreira"],
    ["Cíntia", "Sílvia", "Mendes", "Souza"],
    ["Patrícia", "Carolina", "Pinto", "Silveira"],
    ["Michele", "Tatiane", "Lima", "Almeida"],
    ["Emanuelle", "Talita", "Martins", "Rodrigues"],
    ["Caroline", "Juliane", "Moraes", "Pereira"],
    ["Tatiane", "Lúcia", "Gonçalves", "Souza"],
    ["Natália", "Débora", "Silveira", "Barros"],
    ["Tamires", "Tatiane", "Souza", "Pinto"],
    ["Daniele", "Fabiana", "Ferreira", "Rodrigues"],
    ["Luciana", "Adriana", "Mendes", "Barbosa"],
    ["Marcia", "Cris", "Oliveira", "Cardoso"],
    ["Raquel", "Luciene", "Martins", "Farias"],
    ["Kátia", "Caroline", "Pinto", "Alves"],
    ["Tainá", "Juliana", "Costa", "Almeida"],
    ["Liana", "Andréia", "Ribeiro", "Nascimento"],
    ["Andressa", "Daiane", "Cavalcanti", "Alves"],
    ["Larissa", "Tânia", "Ribeiro", "Costa"],
    ["Beatriz", "Margarida", "Lopes", "Mendes"],
    ["Ana", "Carolina", "Barros", "Ferreira"],
    ["Verônica", "Gisele", "Cavalcanti", "Dias"],
    ["Luciane", "Patrícia", "Costa", "Ribeiro"],
    ["Alessandra", "Regiane", "Oliveira", "Barbosa"],
    ["Geovana", "Patrícia", "Martins", "Almeida"],
    ["Sabrina", "Gisele", "Pereira", "Gonçalves"],
    ["Renata", "Raquel", "Mendes", "Rodrigues"],
    ["Laura"],
  ];

  const generateRandomName = (gender: string) => {
    const nameList = gender === "male" ? maleNames : femaleNames;
    const [firstName, secondName, firstSurname, secondSurname] =
      nameList[Math.floor(Math.random() * nameList.length)];
    const randomName = `${firstName} ${secondName} ${firstSurname} ${secondSurname}`;
    return randomName;
  };

  const handleGenerateName = (gender: string) => {
    setSelectedGender(gender);
    const name = generateRandomName(gender);
    setGeneratedName(name);
    setIsResultVisible(true);
  };

  const handleGenerateAgain = () => {
    const name = generateRandomName(selectedGender);
    setGeneratedName(name);
  };

  const handleCloseResultModal = () => {
    setIsResultVisible(false);
  };

  return (
    <article className={styles.modalContainer}>
      {!isResultVisible && <MoleculesModal onGenerate={handleGenerateName} />}
      {isResultVisible && (
        <MoleculesResultModal
          generatedName={generatedName}
          onGenerateAgain={handleGenerateAgain}
          onClose={handleCloseResultModal}
        />
      )}
    </article>
  );
};

export default OrganismsAllModal;
