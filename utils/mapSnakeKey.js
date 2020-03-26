const mapKey = (key) => {
  switch (key) {
    case "orig_title":
      return "origTitle";
    case "release_date":
      return "releaseDate";
    case "plattform":
      return "platform";
    case "is_next_game":
      return "isNextGame";
    case "game_over":
      return "gameOver";
    case "coop_modus":
      return "coopModus";
    default:
      return key;
  }
};
module.exports = { mapKey };
