from sqlalchemy import *
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relation, sessionmaker

from Models.Monster import Monster
import json, os

engine = create_engine('postgresql://postgres:UniHunterX@localhost:5432/UniHunterX')
Base.metadata.create_all(engine)

pathToMonsterFiles = "scripts/monsters/" 
files = os.listdir(pathToMonsterFiles)

for file in files:
    with open( pathToMonsterFiles + file, 'r') as reader:
        monster = json.loads(reader.read())
    for monsterName in monster:
        
