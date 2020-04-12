from sqlalchemy import *
from sqlalchemy.dialects import postgresql
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relation, sessionmaker
import json, os, re

Base = declarative_base()


class Weapon(Base):
    __tablename__ = 'weapon'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=True)
    equipment_category = Column(String(32), nullable=True)
    weapon_range = Column(String(16), nullable=True)
    damage_dice = Column(String(16), nullable=True)
    damage_bonus = Column(Integer)
    damage_type = Column(String(16))
    range_distance = Column(Integer)
    two_handed_dice = Column(String(32))
    two_handed_bonus = Column(Integer)
    two_handed_type = Column(String(32))


engine = create_engine('postgresql://postgres:UniHunterX@localhost:5432/UniHunterX')
Base.metadata.create_all(engine)
weaponAttributes = ["name", "equipment_category", "weapon_range", "damage", "damage_dice", "damage_bonus", "damage_type",
                   "range", "properties", "2h_damage"]
pathToWeaponsFiles = "../scripts/weapons/"
files = os.listdir(pathToWeaponsFiles)
valueString = ""



with engine.connect() as conn:

    for file in files:
        with open( pathToWeaponsFiles + file, 'r') as reader:
            weapon = json.loads(reader.read())
        for weaponName in weapon:
            valueString += "'" + weapon[weaponName]["name"] + "',"
            valueString += "'" + weapon[weaponName]["equipment_category"] + "',"
            valueString += "'" + weapon[weaponName]["weapon_range"] + "',"
            valueString += "'" + weapon[weaponName]["damage"]["damage_dice"] + "',"
            valueString += "'" + str(weapon[weaponName]["damage"]["damage_bonus"]) + "',"
            valueString += "'" + weapon[weaponName]["damage"]["damage_type"]["name"] + "',"
            valueString += "'" + str(weapon[weaponName]["range"]["normal"]) + "',"
            try:
                valueString += "'" + weapon[weaponName]["2h_damage"]["damage_dice"] + "',"
                valueString += "'" + str(weapon[weaponName]["2h_damage"]["damage_bonus"]) + "',"
                valueString += "'" + weapon[weaponName]["2h_damage"]["damage_type"]["name"] + "'"
            except:
                valueString += "'null',"
                valueString += "'0',"
                valueString += "'null'"
            engine.execute(
                "INSERT INTO weapon ( name, equipment_category, weapon_range, damage_dice, damage_bonus, damage_type, range_distance, two_handed_dice, two_handed_bonus, two_handed_type ) VALUES (" + valueString + ")")
            valueString = ""