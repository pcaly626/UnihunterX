import Elf from './elves/Elf';
export const loadPlayer = (player) =>{

    switch(player.race)
    {
        case 'elf':
            return new Elf(player)
            
    }

}