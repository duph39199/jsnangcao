const game = {
    team1 : "hihhihi",
    team2 : "hahahaha",
    players : [
        [
            "so1",
            "so2",
            "so3",
            "so4",
            "so5",
            "so6",
            "so7",
            "so8",
            "so9",
            "so10",
            "so11",
        ],
        [
            "so1",
            "so2",
            "so3",
            "so4",
            "so5",
            "so6",
            "so7",
            "so8",
            "so9",
            "so10",
            "so11",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski","Gnarby","Lewandowski","Hummels"],
    date: "Now 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// 1
const [players1,players2] = game.players;
console.log(players1,players2);
// 2
const [gk, ...filePlayers] = players1;
console.log(gk, filePlayers);
// 3

const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4
const playersFinal = [...players1, 'Thiago','Coutinho','Perisic']
// 5
const {odds: team1, x : draw, team2} = game;
// 6
const printGoals = function (...players){
    console.log(`${players.length} goals`)
}
printGoals(...game.scored);
// 7
team1 < team2 && console.log("team1 win")
team1 > team2 && console.log("team2 win")