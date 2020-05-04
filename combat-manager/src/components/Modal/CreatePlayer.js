import React, { Component } from 'react';

class CreatePlayer extends Component
{
    state = {
        creatPlayerForm: {
            name:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Character Name'
            },
            class:
            {
                type:'select',
                configuration:{
                    options:[
                        {'Barbarian':'barbarian'},
                        {'Bard':'bard'},
                        {'Cleric':'cleric'},
                        {'Druid':'druid'},
                        {'Figher':'figher'},
                        {'Monk':'monk'},
                        {'Paladin':'paladin'},
                        {'Ranger':'ranger'},
                        {'Rogue':'rogue'},
                        {'Sorcerer':'sorcerer'},
                        {'Warlock':'warlock'},
                        {'Wizard':'wizard'}
                    ]
                },
                value: '',
                label: 'Class'
            },
            race:{
                type:'select',
                configuration:{
                    options:[
                        {'Dwarf':'dwarf'},
                        {'Elf':'elf'},
                        {'Halfling':'halfling'},
                        {'Human':'human'},
                        {'DragonBorn':'dragonBorn'},
                        {'Gnome':'gnome'},
                        {'Half-Elf':'halfElf'},
                        {'Half-Orc':'halfOrc'},
                        {'Tiefling':'tiefling'}
                    ]
                },
                value: '',
                label: 'Race'
            },
            level:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Level'
            },
            armor_class:'',
            health:'',
            speed:'',
            strength:'',
            dexterity:'',
            consitution:'',
            intelligence:'',
            wisdom:'',
            charisma:'',
        }
    }

    render()
    {
        return
        (
            <div>

            </div>
        );
    }

}