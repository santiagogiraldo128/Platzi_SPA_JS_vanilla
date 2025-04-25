import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);

  const view = `
        <div class="character-inner">
            <article class="character-card"> 
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>

            <article class="character-card"> 
                <h3>Episodes: <span> ${character.episode.length} </span> </h3>
                <h3>Status: ${character.status } </h3>
                <h3>Species: ${character.species } </h3>
                <h3>Gender: ${character.gender } </h3>
                <h3>Origin: ${character.origin.name } </h3>
                <h3>Last location: ${character.location.name } </h3>
            </article>
        </div>  
    `;

  return view;
};

export default Character;