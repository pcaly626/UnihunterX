from sqlalchemy import *
from sqlalchemy.dialects import postgresql
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relation, sessionmaker
import json, os

Base = declarative_base()

class Monster(Base):
    __tablename__ = 'monster'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name =  Column(String(255), nullable=True)
    size =  Column(String(255), nullable=True)
    monster_type =  Column(String(255), nullable=True)
    armor_class = Column(Integer)
    hit_points = Column(Integer)
    speed = Column(Integer)
    strength = Column(Integer)
    dexterity = Column(Integer)
    constitution = Column(Integer)
    intelligence = Column(Integer)
    wisdom = Column(Integer)
    charisma = Column(Integer)
    damage_resistances =  Column(String(255), nullable=True)
    damage_immunities = Column(String(255), nullable=True)
    condition_immunities = Column(String(255), nullable=True)
    challenge_rating = Column(Integer)
    attack_bonus = Column(Integer, server_default=text("0"))
    legendary_action_id = Column(Integer, ForeignKey('legendary_monster_actions.id'))


class LegendaryMonsterActions(Base):
    __tablename__ = 'legendary_monster_actions'

    name =  Column(String(255), nullable=True)
    desc = Column(Text(length=None, collation=None, convert_unicode=False, unicode_error=None, _warn_on_bytestring=False, _expect_unicode=False))
    attack_bonus = Column(Integer)


engine = create_engine('postgresql://postgres:UniHunterX@localhost:5432/UniHunterX')
Base.metadata.create_all(engine)
monsterAttributes = ["name", "size", "type", "armor_class", "hit_points", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "challenge_rating", "attack_bonus", "actions", "legendary_actions"]
pathToMonsterFiles = "scripts/monsters/"
files = os.listdir(pathToMonsterFiles)
valueString = ""
legendaryActionString = ""

with engine.connect() as conn:

    for file in files:
        with open( pathToMonsterFiles + file, 'r') as reader:
            monster = json.loads(reader.read())
        for monsterName in monster:
           
            for attribute in monster[monsterName]:
                if attribute in monsterAttributes:                        
                            
                    if attribute == "legendary_actions":
                            for action in monster[monsterName][attribute]:
                                
                                for item in action:
                                    
                                    if item == "legendary_monster_id":
                                        valueString += str(action[item])
                    elif type(monster[monsterName][attribute]) == str:
                        valueString += "'" + str(monster[monsterName][attribute]) + "',"
                    elif attribute == "actions":
                        try:
                            valueString += str(monster[monsterName][attribute][1]["attack_bonus"]) + ","
                        except:
                            valueString += "0,"
                    else:
                        valueString += str(monster[monsterName][attribute]) + ","
                if monsterName == "sea-horse" or monsterName == "frog":
                    valueString += "0"
            print( valueString )
            engine.execute("INSERT INTO monster (name, size, monster_type, armor_class, hit_points, strength, dexterity, constitution, intelligence, wisdom, charisma, challenge_rating, attack_bonus, legendary_action_id) VALUES (" + valueString + ")")
            valueString = ""
