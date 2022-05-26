import Link from "next/link";

import Layout from "./layout";

import style from "../../styles/Characters.module.css";

const CharactersPage = ({ characters }) => {
  return (
    <Layout>
      {characters.map((item) => (
        <div key={item.id}>
          <Link
            href={`/characters/details/id`}
            as={`/characters/details/${item.id}`}
          >
            <a>Character: {item.name}</a>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

const getAllCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const jsonData = await response.json();
  return jsonData.results;
};

export const getStaticProps = async () => {
  const data = await getAllCharacters();
  return {
    props: {
      characters: data,
    }, // will be passed to the page component as props
  };
};

export default CharactersPage;
