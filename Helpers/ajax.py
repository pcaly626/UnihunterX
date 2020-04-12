import requests
import json
import os
import string
URL = "http://dnd5eapi.co/api/monsters/"
r = requests.get(url=URL)
data = r.json()
monsterResults = []
for monster in data["results"]:
    URL = "http://dnd5eapi.co/api/monsters/" + monster["index"] + "/"
    r = requests.get(url=URL)
    monsterResults.append(r.json())
    print("Get request recieved from " + URL)
#sort the list alphabetically
extractData = ["name","size", "type", "subtype", "armor_class", "hit_points", "speed", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "damage_resistances", "damage_immunities" ,"condition_immunities", "actions"]
start = 0
end = 19
stop = False
print("Parsing recieved monster jsons into alphabetical order")
for letter in string.ascii_lowercase:
    monsterAttributes = {}
    cleanedResults = {}
    print("Compiling monsters that start with " + letter + " into the file monsters/monster_" + letter)
    for monster in monsterResults:
        
        if monster["index"][0] != (letter):
            continue
        for extract in extractData:
            if "actions" not in monster:
                continue
            cleanedResults[extract] = monster[extract]
        monsterAttributes[monster["index"]] = cleanedResults
    with open("../scripts/monsters/monster_" + letter + ".json", "w") as file:
        file.write(json.dumps(monsterAttributes))