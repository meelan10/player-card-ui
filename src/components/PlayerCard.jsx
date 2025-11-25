
import React from "react";
import { Search, User, MapPin, Trophy } from "lucide-react";


const PlayerCard = ({ player }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col">
      {}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=random&size=200`;
          }}
        />
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md">
          {player.league}
        </div>
      </div>

      {}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-bold text-gray-800 leading-tight">{player.name}</h2>
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-medium border border-gray-200">
                {player.age} yo
            </span>
        </div>
        
        <div className="space-y-2 mt-2 text-sm text-gray-600 flex-grow">
          <div className="flex items-center gap-2">
             <MapPin size={16} className="text-blue-500" />
             <span>{player.nationality}</span>
          </div>
          <div className="flex items-center gap-2">
             <User size={16} className="text-green-500" />
             <span>{player.position}</span>
          </div>
           <div className="flex items-center gap-2">
             <Trophy size={16} className="text-yellow-500" />
             <span>{player.league}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayerCard;
#
