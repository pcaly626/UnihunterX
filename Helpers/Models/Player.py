from sqlalchemy import *
from sqlalchemy.dialects import postgresql
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relation, sessionmaker
import json, os

Base = declarative_base()

class Player(Base):

    __tablename__ = 'player'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name =  Column(String(255), nullable=True)
    size =  Column(String(255), nullable=True)
    race =  Column(String(255), nullable=True) #object
    subrace =  Column(String(255), nullable=True) #object
    player_class =  Column(String(255), nullable=True) #object
    player_subclass =  Column(String(255), nullable=True) #object
    armor_class = Column(Integer)
    hit_points = Column(Integer)
    level = Column(Integer)
    speed = Column(Integer)
    strength = Column(Integer)
    dexterity = Column(Integer)
    constitution = Column(Integer)
    intelligence = Column(Integer)
    wisdom = Column(Integer)
    charisma = Column(Integer)
    profiency_bonus = Column(Integer)
    equipment = Column(String(1028), nullable=True)#fliepath
    abilities_spells = Column(String(1028), nullable=True)#fliepath


engine = create_engine('sqlite:///combat_db')
Base.metadata.create_all(engine)