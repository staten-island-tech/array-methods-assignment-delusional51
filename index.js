const date= new Date();
const month= date.getMonth();
const sports = [
    {
        name:'Football', 
        conference:['afc','nfc'], 
        divisions:['afc east','afc south','afc north','afc west','nfc east','nfc south','nfc north','nfc west'], 
        afceteams:['patriots','jets','bills','dolphins'],
        afcsteams:['texans','colts','jaguars','titans'],
        afcnteams:['steelers','bengals','ravens','browns'],
        afcwteams:['chiefs','broncos','raiders','chargers'],
        nfceteams:['eagles','giants','cowboys','commanders'],
        nfcsteams:['saints','falcons','panthers','buccaneers'],
        nfcnteams:['vikings','packers','lions','bears'],
        nfcwteams:['rams','49ers','seahawks','cardinals'],
        viewers: 16.7,
        playing: function(x) {
            if (x = 1||2||9||10||11||12) {
                console.log("Playing") }
                else { console.log("Not Playing")}
          }
 }
]
function mon() {
    return month
  }
console.log(sports.playing(month));    