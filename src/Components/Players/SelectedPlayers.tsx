import React from "react";
import type { PlayersType } from "../Type/PlayersType";
import SPlayer from "./SPlayer";

interface selectedPlayerProps {
  choosenPlayers: PlayersType[];
  handleRemovePlayer: (player: PlayersType) => void;
//   coin: number;
//   setCoin: React.Dispatch<React.SetStateAction<number>>;
}

const SelectedPlayers = ({ choosenPlayers, handleRemovePlayer}: selectedPlayerProps) => {
//   const handleRemovePlayer = (playerId: string) => {
//     const updatedPlayers = choosenPlayers.filter(
//       (player) => player.id !== playerId
//     );

//   };

  return (
    <div>
      {choosenPlayers.map((choosenPlayer: PlayersType) => (
        <SPlayer key={choosenPlayer.id} player={choosenPlayer} handleRemovePlayer={handleRemovePlayer} />
      ))}
      {choosenPlayers.length === 0 ? (
        <p className="text-center text-gray-400"> No players selected yet </p>
      ) : choosenPlayers.length < 6 ? (
        <p className="text-center text-gray-400">
          {" "}
          You can select {6 - choosenPlayers.length} more players{" "}
        </p>
      ) : (
        <p className="text-center text-gray-400">
          {" "}
          You have selected maximum players{" "}
        </p>
      )}
    </div>
  );
};

export default SelectedPlayers;
