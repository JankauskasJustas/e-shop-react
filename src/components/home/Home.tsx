import "./Home.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Carousel from "../carousel/Carousel";
import Repository from "../../api/Repository";
import { Player } from "../../types/Player";
import PlayerList from "../players/PlayerList";
import { useState } from "react";

const Home = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [activePlayer, setActivePlayer] = useState<Player>(players[0]);

  const getPlayers = async (searchQuery?: string) => {
    const result = await Repository.getPlayers(searchQuery);
    setPlayers(result);
    if (result.length) {
      setActivePlayer(result[0]);
    }
  };

  return (
    <>
      <Header />
      <Carousel activePlayer={activePlayer} />
      <PlayerList
        filterPlayers={(searchQuery) => getPlayers(searchQuery)}
        refetchPlayers={() => getPlayers()}
        onActivePlayerChange={(player) => setActivePlayer(player)}
        players={players}
        activePlayer={activePlayer}
      />
      <Footer />
    </>
  );
};

export default Home;
