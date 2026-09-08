import React, { type Dispatch, type SetStateAction } from "react";

import type { PlayersType } from "../Type/PlayersType"
import PlayerCard from "./PlayerCard";

interface PlayersProps {
  players: PlayersType[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>
}

const AvailablePlayers = ({ players, coin, setCoin }: PlayersProps) => {
  return (
    <div>
        <div className="players grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {players.map((player, index: number) => (
            <PlayerCard coin={coin} setCoin={setCoin} key={index} player={player} index={index}></PlayerCard>
          ))}
        </div>
    </div>
  );
};

export default AvailablePlayers;
