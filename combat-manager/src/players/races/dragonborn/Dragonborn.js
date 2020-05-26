import Player from '../../Player';

class Dragonborn extends Player
{

    breathweapon = null
    resistance = null
    constructor(player)
    {
        super(player)
        player.speed = 30
        player.size = 'm'
        switch(player.subracetype)
        {
            case("black"):
            case("copper"):
                this.breathweapon = BlackCopper()
                this.resistance = "acid"
                break
            case("blue"):
            case("bronze"):
                this.breathweapon = BlueBronze()
                this.resistance = "lightning"
                break
            case("brass"):
                this.breathweapon = Brass()
                this.resistance = "fire"
                break
            case("gold"):
            case("red"):
                this.breathweapon = GoldRed()
                this.resistance = "fire"
                break
            case("green"):
                this.breathweapon = Green()
                this.resistance = "poison"
                break
            case("silver"):
            case("white"):
                this.breathweapon = SilverWhite()
                this.resistance = "cold"
                break
        }
        this.breathweapon.damage = toString(floor( 2 + ( player.level - 1 ) / 5 )) + "d6"
    }

    BlackCopper()
    {
        var breathweapon = 
        {
            type: acid,
            save: dex,
            shape: line,
            size: 30,
            savedc: 8 + player.conmod + player.profbonus,
            action: full, 
            duration: instant,
            damage: null
        }
        return breathweapon
    }
    
    BlueBronze()
    {
        var breathweapon = 
        {
            type: lightning,
            save: dex,
            shape: line,
            size: 30,
            savedc: 8 + player.conmod + player.profbonus,
            action: full, 
            duration: instant,
            damage: null
        }
        return breathweapon
    }
    
    Brass()
    {
        var breathweapon = 
        {
            type: fire,
            save: dex,
            shape: line,
            size: 30,
            savedc: 8 + player.conmod + player.profbonus,
            action: full, 
            duration: instant,
            damage: null
        }
        return breathweapon
    }

    GoldRed()
    {
        var breathweapon = 
        {
            type: fire,
            save: dex,
            shape: cone,
            size: 15,
            savedc: 8 + player.conmod + player.profbonus,
            action: full, 
            duration: instant,
            damage: null
        }
        return breathweapon
    }

    Green()
    {
        var breathweapon = 
        {
            type: poison,
            save: con,
            shape: cone,
            size: 15,
            savedc: 8 + player.conmod + player.profbonus,
            action: full, 
            duration: instant,
            damage: null
        }
        return breathweapon
    }

    SilverWhite()
    {
        var breathweapon = 
        {
            type: cold,
            save: con,
            shape: cone,
            size: 15,
            savedc: 8 + player.conmod + player.profbonus,
            action: full, 
            duration: instant,
            damage: null
        }
        return breathweapon
    }

}