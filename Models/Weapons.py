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
    properties = Column(String(32))
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


