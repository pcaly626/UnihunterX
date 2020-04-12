import requests
import json
import string


URL = "http://dnd5eapi.co/api/equipment/"
r = requests.get(url=URL)
data = r.json()
equipResults = []
for thing in data["results"]:
    URL = "http://dnd5eapi.co/api/equipment/" + thing["index"] + "/"
    r = requests.get(url=URL)
    equipResults.append(r.json())
# sort the list alphabetically
extractData = ["equipment_category", "name", "weapon_range", "range", "damage", "2h_damage", "damage_type",
               "properties"]
stop = False
# steps through the alphabet
for c in string.ascii_lowercase:
    itemAttributes = {}
    cleanedResults = {}
    name = ""
    for item in equipResults:
        startswith = item["index"][0]
        name = item["index"]
        type = item["equipment_category"]
        item_data = {}
        print(startswith)
        # index[0] is the monster name. if it doesn't start with the proper letter, it is skipped
        if startswith != c:
            continue
        if type != "Weapon":
            continue
        for label in item:
            if label in extractData:
                info = item[label]
                item_data[label] = info
        # for extract in extractData:
            # every time "extract" updates here, it carries through to cleanedResults[extract]
            # for every entry because "extract" is a reference
            # if "actions" not in monster:
                # continue
            # cleanedResults[extract] = monster[extract]
        itemAttributes[name] = item_data
    with open("weapons/weapon_" + c + ".json", "w") as file:
        file.write(json.dumps(itemAttributes))
