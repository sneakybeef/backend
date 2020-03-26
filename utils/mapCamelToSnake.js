const mapCamelKey = (key) => {
  switch (key) {
    case "origTitle":
      return "orig_title";
    case "releaseDate":
      return "release_date";
    case "platform":
      return "plattform";
    case "isNextGame":
      return "is_next_game";
    case "gameOver":
      return "game_over";
    case "coopModus":
      return "coop_modus";
    default:
      return key;
  }
};
module.exports = { mapCamelKey };
