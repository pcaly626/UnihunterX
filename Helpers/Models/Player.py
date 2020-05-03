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
    race =  Column(String(255), nullable=True)
    player_class =  Column(String(255), nullable=True)
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


engine = create_engine('sqlite:///combat_db')
Base.metadata.create_all(engine)