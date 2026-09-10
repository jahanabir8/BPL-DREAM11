import React, { type Dispatch, type SetStateAction } from "react";

import type { PlayersType } from "../Type/PlayersType"
import PlayerCard from "./PlayerCard";

interface PlayersProps {
  players: PlayersType[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    choosenPlayers: PlayersType[];   // CHANGED: new prop, needed to know which players are selected
    handleSelectedPlayers: (player: PlayersType)=>void;
}

const AvailablePlayers = ({ players, coin, setCoin, choosenPlayers, handleSelectedPlayers }: PlayersProps) => {   // CHANGED: destructure choosenPlayers
  return (
    <div>
        <div className="players grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {players.map((player) => {
            const isSelected = choosenPlayers.some((p) => p.id === player.id);
            return (
              <PlayerCard
                coin={coin}
                setCoin={setCoin}
                key={player.id}
                player={player}
                isSelected={isSelected}
                handleSelectedPlayers={handleSelectedPlayers}
              ></PlayerCard>
            );
          })}
        </div>
    </div>
  );
};

export default AvailablePlayers;