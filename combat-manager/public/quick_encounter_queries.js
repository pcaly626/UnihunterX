const sqlite3 = require('sqlite3')

exports.getMonsters = (mainWindow, event, rate) =>{
        console.log(rate)
        let db = new sqlite3.Database('D:\\unihunter\\combat-manager\\public\\combat_db', (error) => {
        if(error){
            return console.error(error.message) 
        }
        console.log("Connected")
        })
    
        db.all("SELECT * FROM monster WHERE monster.challenge_rating = " + rate, [], (error, rows) => {
        if(error){
            console.error(error.message)
        }
    
        mainWindow.webContents.send("return-monsters", rows)
        })
}

exports.createPlayer = (mainWindow, player) =>{
  let db = new sqlite3.Database('D:\\unihunter\\combat-manager\\public\\combat_db', (error) => {
    if(error){
      return console.error(error.message) 
    }
    console.log("Connected")
  })
  let insert = ''
  for(let attribute in player){
    if(attribute === 'charisma')
      insert+='"' + player[attribute] + '"'
    else
      insert+='"' + player[attribute] + '",'
  }
  console.log(insert)
  db.run("INSERT INTO player (name, player_class, race, level, armor_class, hit_points, speed, strength, dexterity, constitution, intelligence, wisdom, charisma) VALUES (" + insert+ ")",[], (error) => {
    if(error){
      console.error(error.message)
    }
    
  })
  db.all("SELECT * FROM player"), [],(error, rows) =>{
    if(error){
      console.error(error.message)
    }
    
    mainWindow.webContents.send("retrieve-players", rows)
  }
}

exports.getPlayers = (mainWindow) =>{
  let db = new sqlite3.Database('D:\\unihunter\\combat-manager\\public\\combat_db', (error) => {
    if(error){
      return console.error(error.message) 
    }
    console.log("Players Connected")
  })
  db.all("SELECT * FROM player", [],(error, rows) =>{
    if(error){
      console.error(error.message)
    }
    mainWindow.webContents.send("retrieve-players", rows)
  })
}

exports.createEncounter = (mainWindow, encounter) =>{
  let db = new sqlite3.Database('D:\\unihunter\\combat-manager\\public\\combat_db', (error) => {
    if(error){
      return console.error(error.message) 
    }
    console.log("Players Connected")
  })
  db.all("SELECT * FROM player", [],(error, rows) =>{
    if(error){
      console.error(error.message)
    }
    mainWindow.webContents.send("encounter-created", rows)
  })
}