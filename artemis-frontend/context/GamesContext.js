// import {createContext, useState, useEffect} from 'react';


// export const GamesContext = createContext();

// export const GamesProvider = (props) => {
//     const [games, setGames] = useState([]);
//     const [game, setGame] = useState([]);
//     const [error, setError] = useState({});

//     const getPopularGames = async () => {
//         try {
//             const response = await fetch('/api/games/popular');
//             const data = await response.json();
//             setGames(data);
//         } catch (error) {
//             setError(error);
//         }
//     }
//     const getTopRatedGames = async () => {
//         try {
//             const response = await fetch('/api/games/toprated');
//             const data = await response.json();
//             setGames(data);
//         } catch (error) {
//             setError(error);
//         }
//     }

//     const getGameDetails = async () =>{
//         try{
//             const response = await fetch('/api/games/game?slug=grand-theft-auto-v');
//             const data = await response.json();
//             setGame(data);
//         }   
//         catch(error){
//             setError(error)
//         }
//     }


//     return (<GamesContext.Provider value={{
//         games,game, error, getPopularGames, getTopRatedGames, getGameDetails
//     }}></GamesContext.Provider>)
// }