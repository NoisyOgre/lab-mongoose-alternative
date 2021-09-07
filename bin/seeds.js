require("../db");

const Celebrity = require("../models/celebrity.model")
const celebrity = [
    {
        name: "Tom Cruise",
        occupation: "Actor",
        catchPhrase: "whoopty doo",
        
      },
      {
        name: "Tom Hanks",
        occupation: "Actor",
        catchPhrase: "There's a snake in my boot",
      },
      {
        name: "Lewis Hamilton",
        occupation: "Athlete",
        catchPhrase: "Vroom Vroom ",
      },
]
Celebrity.insertMany(celebrity).then((celebrityFromDB) => {
    console.log(`celebrity created - ${celebrityFromDB.length}`)
});

