const date= new Date();
const month= date.getMonth();
const sports = [
    {
        name:'Football', 
        teams: 32,
        viewers: 16.7,
        someplayers: ['Mahomes','Allen','Hill','Tagovailoa','Donald','CMC'],
        playing: function(x) {
            if (x === 1||2||9||10||11||12) {
                console.log("Playing") }
                else { console.log("Not Playing")}
          }
     },
     {
        name:'Basketball',
        teams: 30,
        viewers: 12.4,
        someplayers: ['Lebron','Giannas','Butler','Jokic','Embid','Lillard','Bam'],
        playing: function(x) {
            if (x === 1||2||3||4||5||6||10||11||12) {
                console.log("Playing") }
                else { console.log("Not Playing")}
          }
     },
     {
        name:'Fencing',
        teams:44,
        viewers:3050,
        someplayers: ['Borel','Siklosi','Meindhart','Kiefer','Romain','Ka Long'],
        playing: function(x) {
            if (x === 7||8) {
                console.log("Playing") }
                else { console.log("Not Playing")}
          }
     },
]
function mon() {
    return month
  }; 
sports.forEach((sport) => console.log(sport.name));
sports.forEach((sport) => console.log(sport.playing(month)));