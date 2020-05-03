from sqlalchemy import *
from sqlalchemy.dialects import postgresql
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relation, sessionmaker
import json, os, re

Base = declarative_base()

class Spell(Base):
    __tablename__ = 'spell'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name =  Column(String(255), nullable=True)
    description = Column(String(1028), nullable=True)
    higher_level = Column(String(1028), nullable=True)
    spell_range =  Column(String(255), nullable=True)
    duration =  Column(String(255), nullable=True)
    casting_time = Column(String(255))
    
    


engine = create_engine('sqlite:///combat_db')
Base.metadata.create_all(engine)
spellAttributes = ["name", "range", "duration", "casting_time", "desc", "higher_level"]
pathToSpellFiles = "../scripts/spells/"
files = os.listdir(pathToSpellFiles)
valueString = ""


with engine.connect() as conn:
    count = 1
    for file in files:
        print("File" + str(count))
        with open( pathToSpellFiles + file, 'r') as reader:
            spell = json.loads(reader.read())
        for spellName in spell:
            tempAttributes = []
            for attribute in spell[spellName]:
                tempAttributes.append(attribute)
            match = re.sub("'", " ", spell[spellName]["name"])
            valueString += "'" + match + "',"
            match = re.sub("'", " ", spell[spellName]["desc"][0])
            valueString += "'" + match + "',"
            if "higher_level" in tempAttributes:
                match = re.sub("'", " ", spell[spellName]["higher_level"][0])
                valueString += "'" + match + "',"
            else: 
                valueString += "Null,"
            valueString += "'" + spell[spellName]["range"] + "',"
            valueString += "'" + spell[spellName]["duration"] + "',"
            valueString += "'" + spell[spellName]["casting_time"] + "'"
            
            engine.execute("INSERT INTO spell ( name, description, higher_level, spell_range, duration, casting_time ) VALUES (" + valueString + ")")
            valueString = ""
        count = count + 1