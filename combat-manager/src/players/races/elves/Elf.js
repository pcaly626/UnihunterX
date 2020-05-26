import Player from '../../Player';

class Elf extends Player
{

    constructor(player)
    {
        super(player)
        player.speed = 30
        player.size = 'm'
        player.advantage.add("charm")
        player.immunity.add("sleep")
        switch(player.subracetype)
        {
            case("high"):
            HighElf(player)
            break
            case("wood"):
                if (player.speed < 35)
                { player.speed += 5 }
            break
            case("drow"):
            DrowElf(player)
            break
        }
    }

    HighElf(player)
    {
        // spellchoice = output "choose one cantrip from the wizard spell list"
        player.spells.add(spellchoice)
    }

    DrowElf(player)
    {
        player.spells.add( "dancinglights" )
        if (player.level > 2)
          { player.spells.add( "faeriefire" ) }
        if (player.level > 4)
          { player.spells.add( "darkness" ) }
    }

}