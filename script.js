const mario = new Creature({
    name: 'Mario',
    health: 100,
})

const luigi = new Creature({
    name: 'Luigi',
    health: 100,

})

const script = document.getElementById("main")
const newWinner = document.getElementById("winner")

// mario.prototype.attack = "Red Fireball"
// luigi.prototype.attack = "Green Fireball"
// peach.prototype.attack = "Turnip Throw"
// toad.prototype.attack = "Mushroom Blast"
// koopa.prototype.attack = "Shell Smash"

function Creature(options) {
    this.name = options.name
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
            message = creature.name + " has been hit! It's now at " + creature.health + " health."
        }
        // console.log(message)
        let newText = document.createTextNode(message)

        script.appendChild(newText)
        script.appendChild(document.createElement("br"));


        return message
    }
}

function battle(hero, ...monsters) {

    monsters.forEach(monster => {
        while (hero.health > 0 && monster.health > 0) {
            hero.fight(monster)
            monster.fight(hero)
            monster.fight(hero)
        }

        hero.health = Math.random() > 0.9 ?
            hero.maxHealth :
            hero.health * 2
        let newHealth = document.createTextNode(`${hero.name} is at ${hero.health} health and ${monster.name} is ${monster.health} health.`)

        setTimeout(function() { alert(`${hero.health > 0 ? hero.name : monster.name} wins!`) }, 1000);
        script.appendChild(newHealth)
        script.appendChild(document.createElement("br"))
        newWinner.appendChild(winner)
    })

}



let button = document.getElementById("button")

document.getElementById("reset").addEventListener("click", function() {
    window.location.reload()
})