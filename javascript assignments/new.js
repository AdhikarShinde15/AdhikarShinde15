const names = () => {
    let footballer = 'Lionel Messi'
    let tennise_Player = 'Roger Federer'
    
    return{
       changename (passedfootballer,passedtennise_Player) {
           footballer = passedfootballer
           tennise_Player = passedtennise_Player
        },
        changefootballer(passedfootballer){
            footballer = passedfootballer
        },
        changetennisPlayer(passedname){
            tennise_Player = passedname
        },
        dispalyALL() {
            return [footballer,tennise_Player]
        },
        dispalyFootballer() {
            return footballer
        },
        dispalyTennisPlayer() {
            return tennise_Player
        }
   }
}

const sportPlayers = names()

console.log(sportPlayers.dispalyALL())

sportPlayers.changename('Ronaldo','Rafael Nadal')

console.log(sportPlayers.dispalyALL())