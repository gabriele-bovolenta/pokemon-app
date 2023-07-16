import React, { useEffect, useState } from "react";
import { getAllPokemon } from "../../Api/ServiceApi";
import CardPokemon from "../../Components/Navbar/CardPokemon/cardPokemon.component";
import { CountPokemonType } from "../../Types/types";

const HomePage = () => {
  const [pokemon, setPokemon] = useState<CountPokemonType>();

  const fetchData = async () => {
    const data = await getAllPokemon();
    setPokemon(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div >
      {!pokemon ? (
        <div>Loading...</div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20  }}>
          {pokemon.results.map((el) => (
            <CardPokemon key={el.name} pokemon={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
