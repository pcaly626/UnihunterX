import Player from '../../Player';

class Halfling extends Player
{

    resistance = null
    constructor(player)
    {
        super(player)
        player.speed = 25
        player.size = 's'
        player.advantage.add("fear")
        // halflings have a very particular ability we'll need to add as a spell or feat. i used spell here. 
        // details: cast = reaction, time = 0, etc.
        // When a 1 is rolled on an attack roll or saving throw, the die can be rerolled and you must use the new roll
        // When it comes to movement - halflings can move through the space of any creature larger than it (including enemy spaces)
        player.spell.add("lucky")
        switch(player.subracetype)
        {
            case("lightfoot"):
            // no combat abilities
            break
            case("stout"):
            player.advantage.add("poison")
            this.resistance = "poison"
            break
        }
    }

}