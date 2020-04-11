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
    challenge_rating = Column(Float)
    attack_bonus = Column(Integer, server_default=text("0"))


engine = create_engine('postgresql://postgres:UniHunterX@localhost:5432/UniHunterX')
Base.metadata.create_all(engine)
monsterAttributes = ["name", "size", "type", "armor_class", "hit_points", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "challenge_rating", "attack_bonus", "actions"]
pathToMonsterFiles = "../scripts/monsters/"
files = os.listdir(pathToMonsterFiles)
valueString = ""
legendaryActionString = ""

with engine.connect() as conn:

    for file in files:
        with open( pathToMonsterFiles + file, 'r') as reader:
            monster = json.loads(reader.read())
        for monsterName in monster:
           for monsterName in monster:
                valueString += "'" + monster[monsterName]["name"] + "',"
                valueString += "'" + monster[monsterName]["size"] + "',"
                valueString += "'" + monster[monsterName]["type"] + "',"
                valueString += "'" + str(monster[monsterName]["armor_class"]) + "',"
                valueString += "'" + str(monster[monsterName]["hit_points"]) + "',"
                valueString += "'" + str(monster[monsterName]["strength"]) + "',"
                valueString += "'" + str(monster[monsterName]["dexterity"]) + "',"
                valueString += "'" + str(monster[monsterName]["constitution"]) + "',"
                valueString += "'" + str(monster[monsterName]["intelligence"]) + "',"
                valueString += "'" + str(monster[monsterName]["wisdom"]) + "',"
                valueString += "'" + str(monster[monsterName]["charisma"]) + "',"
                valueString += "'" + str(monster[monsterName]["challenge_rating"]) + "',"
                try:
                    valueString += "'" + str(monster[monsterName]["actions"][0]["attack_bonus"]) + "'"
                except:
                    valueString += "'0'"
                
                engine.execute("INSERT INTO monster (name, size, monster_type, armor_class, hit_points, strength, dexterity, constitution, intelligence, wisdom, charisma, challenge_rating, attack_bonus) VALUES (" + valueString + ")")
                valueString = ""
