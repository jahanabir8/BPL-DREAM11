import React from "react";

import type { PlayersType } from "../Type/PlayersType"
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players }: { players: PlayersType[] }) => {
  return (
    <div>
        <div className="players grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {players.map((player, index: number) => (
            <PlayerCard key={index} player={player} index={index}></PlayerCard>
          ))}
        </div>
    </div>
  );
};

export default AvailablePlayers;
