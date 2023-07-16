import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPokemonById, getPokemonByName } from '../../Api/ServiceApi';
import { Button, Card, CardContent, Typography } from "@mui/material";
import { PokemonDetailType } from '../../Types/types';
import './DetailPage.css';
import DetailPokemonCard from '../../Components/Navbar/CardPokemon/detailPokemonCard';

type Props = {
  searchIdType: boolean;
}

const DetailPokemonPage = (props: Props) => {
  const { pokemon } = useParams();
  console.log(pokemon);
  
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailType | undefined>();

  const checkTypeParam = async () => {
    switch (props.searchIdType) {
      case true:
        if (!!pokemon) {
          try {
            const pokemonData = await getPokemonByName(pokemon);
            setPokemonDetail(pokemonData);
            console.log(pokemonData);
          } catch {
            console.error("NaN");
          }
        }
        break;
      default:
        if (!!pokemon) {
          try {
            const pokemonIdNum = parseInt(pokemon);
            const pokemonData = await getPokemonById(pokemonIdNum);
            setPokemonDetail(pokemonData);
            console.log(pokemonData);
          } catch {
            console.error("NaN");
          }
        }
        break;
    }
  };

  useEffect(() => {
    checkTypeParam();
  }, [pokemon]);

  return (
    <>
      {pokemonDetail ? (
        <div className="card-detail">
          <DetailPokemonCard pokemon={pokemonDetail} />
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "24px" }}>
          Loading...
        </div>
      )}
      <div className="back-button" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Link to={"/home"}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#181d31",
              color: "#ffffff",
              fontWeight: "bold",
              padding: "10px 30px",
            }}
          >
            Back
          </Button>
        </Link>
      </div>
    </>
  );
};

export default DetailPokemonPage;
