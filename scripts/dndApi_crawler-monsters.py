import requests
import json
import string


URL = "http://dnd5eapi.co/api/monsters/"
r = requests.get(url=URL)
data = r.json()
monsterResults = []
for monster in data["results"]:
    URL = "http://dnd5eapi.co/api/monsters/" + monster["index"] + "/"
    r = requests.get(url=URL)
    monsterResults.append(r.json())
# sort the list alphabetically
extractData = ["name", "size", "type", "subtype", "armor_class", "hit_points", "speed", "strength", "dexterity",
               "constitution", "intelligence", "wisdom", "charisma", "special_abilities", "damage_resistances",
               "damage_immunities", "condition_immunities", "actions", "legendary_actions", "challenge_rating"]

legendary_action_id = 0

# steps through the alphabet
for c in string.ascii_lowercase:
    monsterAttributes = {}
    cleanedResults = {}
    name = ""
    for monster in monsterResults:
        startswith = monster["index"][0]
        name = monster["index"]
        monster_data = {}
        # index[0] is the monster name. if it doesn't start with the proper letter, it is skipped
        if startswith != c:
            continue
        for label in monster:
            if label in extractData:
                if label == "legendary_actions":
                    print(type(monster[label]) )
                    legendary_action_id =  legendary_action_id + 1
                    monster[label].append({"legendary_action_id" : legendary_action_id})
                    print(monster[label])
                info = monster[label]
                monster_data[label] = info
        monsterAttributes[name] = monster_data
    with open("monsters/monster_" + c + ".json", "w") as file:
        file.write(json.dumps(monsterAttributes))
