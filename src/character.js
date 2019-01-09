export class Character {
    static combat(character, monster) {
        while(character.health > 0 && monster.health > 0) {
            let damage = Math.floor((Math.random() * character.attack) + 1);
            console.log(`${character.name} attacks ${monster.name} for ${damage} damage`);
            monster.health -= damage;
            if (monster.health <= 0) {
                console.log(`${character.name} has won the battle! ${character.health} remaining health.`);
                return character.health;
            }
            damage = Math.floor((Math.random() * monster.attack) + 1);
            console.log(`${monster.name} attacks ${character.name} for ${damage} damage`);
            character.health -= damage;
            if (character.health <= 0) {
                console.log(`${character.name} has lost the battle! ${character.health} remaining health.`);
                return character.health;
            }
        }
    }

    static levelUp(character) {
        if (character.experience < 30) {
            let attributes = [1, 0];
            return attributes;
        }
        else if (character.experience < 60 && character.experience >= 30 && character.level === 1) {
            let points = 5;
            let level = 2;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 100 && character.experience >= 60 && character.level === 2) {
            let points = 5;
            let level = 3;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 150 && character.experience >= 100 && character.level === 3) {
            let points = 5;
            let level = 4;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 250 && character.experience >= 150 && character.level === 4) {
            let points = 5;
            let level = 5;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 500 && character.experience >= 250 && character.level === 5)  {
            let points = 5;
            let level = 6;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 1000 && character.experience >= 500 && character.level === 6) {
            let points = 5;
            let level = 7;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 2000 && character.experience >= 1000 && character.level === 7) {
            let  points = 5;
            let level = 8;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience >= 2000 && character.level === 8) {
            let  points = 5;
            let level = 9;
            let attributes = [level, points];
            return attributes;
        }
        else {
            let attributes = [character.level, 0];
            return attributes;
        }
    }

}

export class Warrior extends Character {
    constructor(name) {
        super();
        this.name = name;
        this.level = 1;
        this.stamina = 10;
        this.maxHealth = this.stamina * 10;
        this.health = 100;
        this.strength = 5;
        this.attack = this.strength;
        this.experience = 0;
        this.points = 0;
    }
}

export class Mage extends Character {
    constructor(name) {
        super();
        this.name = name;
        this.level = 1;
        this.stamina = 7;
        this.maxHealth = this.stamina * 10;
        this.health = 70;
        this.intellect = 5;
        this.attack = this.intellect;
        this.experience = 0;
        this.points = 0;
    }
}

export class Ranger extends Character {
    constructor(name) {
        super();
        this.name = name;
        this.level = 1;
        this.stamina = 9;
        this.maxHealth = this.stamina * 10;
        this.health = 85;
        this.agility = 5;
        this.attack = this.agility;
        this.experience = 0;
        this.points = 0;
    }
}