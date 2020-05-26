from sqlalchemy import *
from sqlalchemy.dialects import postgresql
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relation, sessionmaker
import json, os
import Campaign
import Player
Base = declarative_base()

class Encounter(Base):
    __tablename__ = 'encounter'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=True)
    terrain = Column(String(255), nullable=True)
    player = Column(Integer, ForeignKey('player.id'), nullable=True)


engine = create_engine('sqlite:///combat_db')
Base.metadata.create_all(engine)