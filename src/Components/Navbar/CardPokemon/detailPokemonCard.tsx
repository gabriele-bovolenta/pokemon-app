import React from "react";
import { PokemonDetailType, PokemonType } from '../../../Types/types';
import { Card, CardContent, Typography } from "@mui/material";

type Props = {
    pokemon : PokemonDetailType;
}

const DetailPokemonCard = (props : Props) => {
  console.log(props.pokemon);
  
    return (
        <>
        {props.pokemon ? (
        <div>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h1" component="div" style={{ marginBottom: "20px" }}>
                {props.pokemon.name}
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <div>
                  <Typography variant="h5" color="text.secondary">
                    Altezza
                  </Typography>
                  <Typography variant="h6" color="text.secondary" style={{ fontWeight: "bold" }}>
                    {props.pokemon.height}
                  </Typography>
                </div>
                <div>
                  <Typography variant="h5" color="text.secondary">
                    Peso
                  </Typography>
                  <Typography variant="h6" color="text.secondary" style={{ fontWeight: "bold" }}>
                    {props.pokemon.weight}
                  </Typography>
                </div>
                <div>
                  <Typography variant="h5" color="text.secondary">
                    Esperienza
                  </Typography>
                  <Typography variant="h6" color="text.secondary" style={{ fontWeight: "bold" }}>
                    {props.pokemon.baseExperience ?? 100}
                  </Typography>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <Typography gutterBottom variant="h3" component="div">
                  Abilities:
                </Typography>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {props.pokemon.abilities.map((el) => (
                  <div key={el.ability.name} style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h6" color="text.secondary" style={{ marginRight: "5px" }}>
                      {el.ability.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" style={{ fontWeight: "bold" }}>
                      {el.slot}
                    </Typography>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "24px" }}>
          Loading...
        </div>
      )}
        </>
    )
}

export default DetailPokemonCard;