import Player from '../../Player';

class Helfelf extends Player
{

    constructor(player)
    {
        super(player)
        player.speed = 30
        player.size = 'm'
        player.advantage.add("charm")
        player.immunity.add("sleep")
    }

}