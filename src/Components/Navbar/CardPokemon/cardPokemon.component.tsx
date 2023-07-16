import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { PokemonType } from '../../../Types/types';

type Props = {
  pokemon: PokemonType;
};

const CardPokemon = (props: Props) => {
  const url = props.pokemon.url;
  const pokemonId = url.match(/\/(\d+)\/?$/)?.[1];

  return (
    <>
      {
        <Card sx={{ width: 300, maxHeight: 500, margin: 2}} key={props.pokemon.name}>
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {props.pokemon.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/pokemon/${pokemonId}`}>
                <Button size="small">More details</Button>
            </Link>
          </CardActions>
        </Card>
      }
    </>
  );
};

export default CardPokemon;
