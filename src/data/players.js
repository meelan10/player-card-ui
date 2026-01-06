import React, { useState } from "react";



const playersData = [

  { id: 1, name: "Lionel Messi", age: 36, position: "Forward", nationality: "Argentina", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg" },
  { id: 2, name: "Karim Benzema", age: 35, position: "Forward", nationality: "France", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Karim_Benzema_2022.jpg" },
  { id: 3, name: "Sergio Ramos", age: 37, position: "Defender", nationality: "Spain", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sergio_Ramos_2018.jpg" },
  { id: 4, name: "Luka Modrić", age: 38, position: "Midfielder", nationality: "Croatia", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Luka_Modric_2018.jpg" },
  { id: 5, name: "Toni Kroos", age: 34, position: "Midfielder", nationality: "Germany", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Toni_Kroos_2018.jpg" },
  { id: 6, name: "Gerard Piqué", age: 36, position: "Defender", nationality: "Spain", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Gerard_Piqué_2018.jpg" },
  { id: 7, name: "Antoine Griezmann", age: 32, position: "Forward", nationality: "France", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Antoine_Griezmann_2018.jpg" },
  { id: 8, name: "Jan Oblak", age: 31, position: "Goalkeeper", nationality: "Slovenia", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Jan_Oblak_2018.jpg" },
  { id: 9, name: "Frenkie de Jong", age: 26, position: "Midfielder", nationality: "Netherlands", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Frenkie_de_Jong_2019.jpg" },
  { id: 10, name: "Vinícius Júnior", age: 22, position: "Forward", nationality: "Brazil", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Vinicius_Junior_2019.jpg" },
  { id: 11, name: "Jordi Alba", age: 34, position: "Defender", nationality: "Spain", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Jordi_Alba_2019.jpg" },
  { id: 12, name: "Marcos Llorente", age: 28, position: "Midfielder", nationality: "Spain", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Marcos_Llorente_2021.jpg" },
  { id: 13, name: "Thibaut Courtois", age: 31, position: "Goalkeeper", nationality: "Belgium", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Thibaut_Courtois_2018.jpg" },
  { id: 14, name: "Raphinha", age: 26, position: "Forward", nationality: "Brazil", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Raphinha_2021.jpg" },
  { id: 15, name: "Joao Félix", age: 24, position: "Forward", nationality: "Portugal", league: "La Liga", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Joao_Felix_2021.jpg" },


  { id: 16, name: "Cristiano Ronaldo", age: 38, position: "Forward", nationality: "Portugal", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" },
  { id: 17, name: "Kevin De Bruyne", age: 32, position: "Midfielder", nationality: "Belgium", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Kevin_De_Bruyne_20180709.jpg" },
  { id: 18, name: "Erling Haaland", age: 23, position: "Forward", nationality: "Norway", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Erling_Haaland_2023_%28cropped%29.jpg" },
  { id: 19, name: "Mohamed Salah", age: 31, position: "Forward", nationality: "Egypt", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Mohamed_Salah_2018.jpg" },
  { id: 20, name: "Virgil van Dijk", age: 32, position: "Defender", nationality: "Netherlands", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Virgil_van_Dijk_2018.jpg" },
  { id: 21, name: "Harry Kane", age: 30, position: "Forward", nationality: "England", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Harry_Kane_2018.jpg" },
  { id: 22, name: "Bruno Fernandes", age: 28, position: "Midfielder", nationality: "Portugal", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Bruno_Fernandes_2020.jpg" },
  { id: 23, name: "Son Heung-min", age: 30, position: "Forward", nationality: "South Korea", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Son_Heung-min_2019.jpg" },
  { id: 24, name: "Alisson Becker", age: 31, position: "Goalkeeper", nationality: "Brazil", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Alisson_Becker_2018.jpg" },
  { id: 25, name: "Ederson", age: 30, position: "Goalkeeper", nationality: "Brazil", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Ederson_2021.jpg" },
  { id: 26, name: "Bukayo Saka", age: 21, position: "Forward", nationality: "England", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Bukayo_Saka_2021.jpg" },
  { id: 27, name: "Gabriel Jesus", age: 25, position: "Forward", nationality: "Brazil", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Gabriel_Jesus_2018.jpg" },
  { id: 28, name: "Raheem Sterling", age: 29, position: "Forward", nationality: "England", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Raheem_Sterling_2020.jpg" },
  { id: 29, name: "Mason Mount", age: 24, position: "Midfielder", nationality: "England", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Mason_Mount_2021.jpg" },
  { id: 30, name: "Thiago Silva", age: 39, position: "Defender", nationality: "Brazil", league: "Premier League", image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Thiago_Silva_2021.jpg" },
  
];



export default playersData;
