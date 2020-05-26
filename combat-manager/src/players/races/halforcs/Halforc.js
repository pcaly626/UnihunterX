import Player from '../../Player';

class Halforc extends Player
{

    constructor(player)
    {
        super(player)
        player.speed = 30
        player.size = 'm'
        // orcs have a very particular ability we'll need to add as a spell or feat. i used spell here. 
        // details: cast = reaction, time = 0, etc.
        // When your hp are dropped to 0 and you are not killed outright, you will have 1 hp instead
        player.spell.add("relentlessendurance")
        // details: cast = reaction, time = 0, etc.
        // When you hit with a critical hit, you may roll one of the damage dice an additional time and add it to the extra damage
        player.spell.add("savageattacks")
    }

}