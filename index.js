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
function fun(x){
    console.log(x[0]);
    console.log(x[1]);
    console.log(x[2]);
    console.log(x[3]);
}
sports.forEach((sport) => console.log(sport.name));
sports.forEach((sport)=> fun(sport.someplayers));

