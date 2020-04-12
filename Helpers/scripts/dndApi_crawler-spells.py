import requests
import json
import string


URL = "http://dnd5eapi.co/api/spells/"
r = requests.get(url=URL)
data = r.json()
spellResults = []
for spell in data["results"]:
    URL = "http://dnd5eapi.co/api/spells/" + spell["index"] + "/"
    r = requests.get(url=URL)
    spellResults.append(r.json())
# sort the list alphabetically
extractData = ["name", "casting_time", "duration", "range", "desc", "higher_level", "concentration", "level", "school"]
stop = False
# steps through the alphabet
for c in string.ascii_lowercase:
    spellAttributes = {}
    cleanedResults = {}
    name = ""
    for spell in spellResults:
        startswith = spell["index"][0]
        name = spell["index"]
        spell_data = {}
        print(startswith)
        # index[0] is the monster name. if it doesn't start with the proper letter, it is skipped
        if startswith != c:
            continue
        for label in spell:
            if label in extractData:
                info = spell[label]
                spell_data[label] = info
        # for extract in extractData:
            # every time "extract" updates here, it carries through to cleanedResults[extract]
            # for every entry because "extract" is a reference
            # if "actions" not in monster:
                # continue
            # cleanedResults[extract] = monster[extract]
        spellAttributes[name] = spell_data
    with open("spells/spell_" + c + ".json", "w") as file:
        file.write(json.dumps(spellAttributes))
