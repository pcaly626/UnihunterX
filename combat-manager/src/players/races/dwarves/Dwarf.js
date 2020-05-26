import Player from '../../Player';

class Dwarf extends Player
{

    resistance = null
    //lastlevel variable must equal the level the player was last time being called
    constructor(player)
    {
        super(player)
        player.speed = 25
        player.size = 'm'
        resistance = "poison"
        player.advantage.add("poison")
        switch(player.subracetype)
        {
            case("hill"):
                if(player.level > lastlevel)
                { player.hp += 1 }
            break
            case("mountain"):
            // no combat abilities
            break
            case("duergar"):
            Duergar(player)
            break
        }
        lastlevel = player.level
    }

    Duergar()
    {
        player.advantage.add("illusion")
        player.advantage.add("charm")
        player.advantage.add("paralyze")
        if (player.level > 2)
         { player.spells.add( "enlarge-reduce" ) }
        if (player.leve > 4)
         { player.spells.add( "invisibility" ) }
    }

}