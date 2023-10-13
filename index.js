const sports = [
    {
        name:'Football', 
        teams: 32,
        viewers: 16.7,
        someplayers: ['Mahomes','Allen','Hill','Tagovailoa'],
       
     },
     {
        name:'Basketball',
        teams: 30,
        viewers: 12.4,
        someplayers: ['Lebron','Giannas','Butler','Jokic'],
       
     },
     {
        name:'Fencing',
        teams:44,
        viewers:3050,
        someplayers: ['Borel','Siklosi','Meindhart','Kiefer'],
       
     },
]
sports.forEach((sport) => console.log(sport.name));
sports.forEach((sport) => sport.someplayers.forEach((player) => console.log(player)));
const current = sports.filter((sport)=> sport.teams > 30);
console.log(current);
