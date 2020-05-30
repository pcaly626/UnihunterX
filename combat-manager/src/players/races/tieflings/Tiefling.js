import Player from '../../Player';

class Tiefling extends Player
{

    resistance = null
    constructor(player)
    {
        super(player)
        player.speed = 30
        player.size = 'm'
        this.resistance = "fire"
        player.spells.add( "thaumaturgy" )
        if (player.level > 2)
          { player.spells.add( "hellishrebuke" ) }
        if (player.level > 4)
          { player.spells.add( "darkness" ) }
    }

}