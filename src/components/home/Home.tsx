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
  const [activePlayer, setActivePlayer] = useState<Player>();

  const getPlayers = async () => {
    const result = await Repository.getPlayers();
    setPlayers(result);
  };

  if (!players.length) getPlayers();

  return (
    <>
      <Header />
      <Carousel activePlayer={activePlayer} />
      <PlayerList
        refetchPlayers={() => getPlayers()}
        onActivePlayerChange={(player) => setActivePlayer(player)}
        players={players}
      />
      <Footer />
    </>
  );
};

export default Home;
