// import React from "react";
// import type { PlayersType } from "../Type/PlayersType";
// import { RiDeleteBin6Line } from "react-icons/ri";

// interface SPlayerProps {
//   player: PlayersType;
// }

// const SPlayer = ({ player }: SPlayerProps) => {
//   return (
//     <div>
//       <div>
//         <img src={player.img} alt={player.PlayerName} />
//         <div>
//           <h2>{player.PlayerName}</h2>
//           <p>Team: {player.battingStyle}</p>
//         </div>
//       </div>
//       <RiDeleteBin6Line className="text-red-500 cursor-pointer" />
//     </div>
//   );
// };

// export default SPlayer;


import React from "react";
import type { PlayersType } from "../Type/PlayersType";
import { RiDeleteBin6Line } from "react-icons/ri";

interface SPlayerProps {
  player: PlayersType;
  handleRemovePlayer: (player: PlayersType) => void;
}

const SPlayer = ({ player, handleRemovePlayer }: SPlayerProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl shadow-sm mb-4">
      <div className="flex items-center gap-4">
        {/* Player Image / Thumbnail */}
        <img
          src={player.img}
          alt={player.PlayerName}
          className="w-16 h-16 object-cover rounded-xl bg-gray-200"
        />
        
        {/* Player Info */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 leading-tight">
            {player.PlayerName}
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            {player.playerType}
          </p>
        </div>
      </div>

      {/* Delete Icon */}
      <button 
        onClick={() => handleRemovePlayer(player)}
        className="p-2 hover:bg-red-50 rounded-full transition-colors"
      >
        <RiDeleteBin6Line className="text-red-400 hover:text-red-500 text-xl cursor-pointer" />
      </button>
    </div>
  );
};

export default SPlayer;