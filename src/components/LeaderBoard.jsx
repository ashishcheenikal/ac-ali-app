const LeaderBoard = () => {
  const leaderboardData = [
    { rank: 1, name: 'Player 1', points: 100 },
    { rank: 2, name: 'Player 2', points: 95 },
    { rank: 3, name: 'Player 3', points: 90 },
    { rank: 4, name: 'Player 4', points: 85 },
    { rank: 5, name: 'Player 5', points: 80 },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-4 bg-gray-800 text-white">
      <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          Leaderboard
        </h2>

        <ul className="space-y-4">
          {leaderboardData.map((player, index) => (
            <li
              key={index}
              className="flex justify-between text-lg text-gray-300"
            >
              <span>{player.name}</span>
              <span>{player.points} pts</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaderBoard;
