// TODO: Build a game where have a hero and a monster
// TODO: I want to have them fight
// TODO: Oh, and that will mean they will have to have health
// TODO: They'll need to be able to affect each other's health

const theRealBurtShady = new Creature({
    name: 'The Real Burt – Burt Reynolds, back for revenge',
    health: 2000,
})

const glassButterfly = new Creature({
    name: 'Glass Butterfly',
    health: 0.3,
    chanceToCrit: 0.1,
    chanceToMiss: 0.1,
    baseDamage: 1200,
})

const justADudeInTheBackgroundMindingHisOwnBusiness = new Creature({
    name: 'Michael',
    chanceToCrit: 0.05,
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

const dryerSheet = new Creature({
    name: 'Dryer Sheet EXTREEME',
    health: 100,
})

const burtTheBird = new Creature({
    name: 'Burt the Experimental Murder Bird',
})

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

battle(dryerSheet, burtTheBird, justADudeInTheBackgroundMindingHisOwnBusiness, glassButterfly)