
import React, { useState } from "react";
import PlayerCard from "./components/PlayerCard.jsx"; 
import SearchBar from "./components/SearchBar"; 
import playersData from "./data/players";  
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");


  const filteredPlayers = playersData.filter((player) => {
    const term = searchTerm.toLowerCase();
    return (
      player.name.toLowerCase().includes(term) ||
      player.nationality.toLowerCase().includes(term) ||
      player.position.toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Football Stars
          </h1>
          <p className="text-gray-500">Find your favorite players across leagues</p>
        </div>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {filteredPlayers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-2">No players found</div>
            <p className="text-sm text-gray-500">Try searching for a different name or position.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
