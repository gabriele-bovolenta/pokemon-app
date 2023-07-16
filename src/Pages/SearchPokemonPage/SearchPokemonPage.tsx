import { useSearchParams } from "react-router-dom";
import { Button, FormControl, Grid, InputBase, Paper } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getPokemonByName } from "../../Api/ServiceApi";
import { PokemonDetailType } from "../../Types/types";
import DetailPokemonCard from "../../Components/Navbar/CardPokemon/detailPokemonCard";

const SearchPokemonPage = () => {
  const [currentSearch, setCurrentSearch] = useSearchParams();
  const [searchPokemon, setSearchPokemon] = useState<PokemonDetailType | undefined>();
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const handleOnSearchChange = useCallback(
    (query: string) => {
      setCurrentSearch({ search: query });
    },
    [setCurrentSearch]
  );

  const isSearchButtonDisabled = () => !currentSearch.get("search")?.trim().length;

  const handleOnSearch = useCallback(() => {
    const query = currentSearch.get("search") || "";
    if (query.trim().length > 0) {
      getPokemonByName(query)
        .then((res) => {
          setSearchPokemon(res);
          setIsNotFound(false);
          setisLoading(false);
        })
        .catch(() => {
          setSearchPokemon(undefined);
          setIsNotFound(true);
          setisLoading(false);
        });
    }
  }, [currentSearch]);

  useEffect(() => {
    const currentSearchStr = currentSearch.get("search")?.trim();
    if (currentSearchStr && currentSearchStr.length > 0 && !searchPokemon) {
      handleOnSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchPokemon]);

  return (
    
    <Grid container justifyContent="center" style={{ height: "100vh" }}>
      <Grid item style={{ padding: "2em", width: "100%" }}>
        <Paper
          component="form"
          sx={{ display: "flex", alignItems: "center" }}
          style={{ padding: "2em" }}
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormControl>
            <InputBase
              id="outlined-basic"
              placeholder="Search by title..."
              onChange={(e) => handleOnSearchChange(e.target.value)}
              value={currentSearch.get("search") || ""}
              autoFocus
            />
          </FormControl>
          <FormControl>
            <Button disabled={isSearchButtonDisabled()} onClick={handleOnSearch}>
              Search
            </Button>
          </FormControl>
        </Paper>
      </Grid>
      {searchPokemon ? (
        <DetailPokemonCard pokemon={searchPokemon} />
      ) : (
        isNotFound && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "24px" }}>
            Pokemon not found...
          </div>
        )
      )}
    </Grid>
  );
};

export default SearchPokemonPage;
