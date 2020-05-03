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
    player_class =  Column(String(255), nullable=True) #object
    armor_class = Column(Integer)
    hit_points = Column(Integer)
    level = Column(Integer)
    speed = Column(Integer)
    strmod = Column(Integer)
    dexmod = Column(Integer)
    conmod = Column(Integer)
    intmod = Column(Integer)
    wismod = Column(Integer)
    charmod = Column(Integer)
    profbonus = Column(Integer)
    #Equipment

engine = create_engine('sqlite:///combat_db')
Base.metadata.create_all(engine)