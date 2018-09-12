const monster1 = new Creature({
    name: 'monster1',
    health: 2000,
})

const monster2 = new Creature({
    name: 'monster2',
    health: 1000,
    chanceToCrit: 0.1,
    chanceToMiss: 0.1,
    baseDamage: 1200,
})

const monster3 = new Creature({
    name: 'monster3',
    chanceToCrit: 0.05,
})

const monster4 = new Creature({
    name: 'monster4',
    health: 100,
})

const monster5 = new Creature({
    name: 'monster5',
})

function Creature(options) {
    if (!options.name) {
        throw (new Error("GIVE THE THING A NAME GOSHDANGIT."))
    } else {
        this.name = options.name
    }
    this.health = options.health || 50
    this.maxHealth = this.health * 2
    this.chanceToCrit = options.chanceToCrit || 0.1
    this.chanceToMiss = options.chanceToMiss || 0.3
    this.baseDamage = options.baseDamage || 10

    this.fight = function(creature) {
        let message
        if (Math.random() < this.chanceToMiss) {
            message = `${this.name} missed ${creature.name}.`
        } else {
            const dmg = Math.random() < this.chanceToCrit ?
                this.baseDamage * 2 :
                this.baseDamage
            creature.health -= dmg
            message = `${creature.name} has been hit! It's now at ${creature.health} health.`
        }
        console.log(message)
        return message
    }
}


function battle(hero, ...monsters) {
    if (monsters.length === 0) {
        monsters = [new Creature({ name: "Martha Stewart Angry and Methed-Up" })]
    }

    monsters.forEach(monster => {
        while (hero.health > 0 && monster.health > 0) {
            hero.fight(monster)
            monster.fight(hero)
            monster.fight(hero)
        }

        hero.health = Math.random() > 0.9 ?
            hero.maxHealth :
            hero.health * 2
        console.log(`${hero.name} is at ${hero.health} health and ${monster.name} is ${monster.health} health.`)
        console.log(`${hero.health > 0 ? hero.name : monster.name} was the victor!`)
    })

}

battle(monster1, monster2, monster3, monster4)