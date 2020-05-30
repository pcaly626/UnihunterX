import Player from '../../Player';

class Gnome extends Player
{

    constructor(player)
    {
        super(player)
        player.speed = 25
        player.size = 's'
        player.advantage.add("intsave")
        player.advantage.add("wissave")
        player.advantage.add("chasave")
        switch(player.subracetype)
        {
            case("forest"):
            player.spells.add("minorillusion")
            break
            case("rock"):
            // no combat abilities
            break
            case("deep"):
            player.spells.add("blindness-deafness")
            player.spells.add("blur")
            break
        }
    }

}