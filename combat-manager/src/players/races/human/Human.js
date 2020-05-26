import Player from '../../Player';

class Human extends Player
{

    constructor(player)
    {
        super(player)
        player.speed = 30
        player.size = 'm'
        FeatRule(player)
    }

    FeatRule(player)
    {
        // humanfeat = output "choose from the following list of feats"
        player.feats.add(humanfeat)
    }

}