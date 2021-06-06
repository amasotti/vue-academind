const attack = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    data() {
        return {
            playerHealth: 100,
            monsterhealth: 100,
            logs: [],
            healReserve: 3,
            specialAttacks : 2,
            winner: null,
        }
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    methods: {
        attackPlayer() {
            const attackStrength = attack(12, 3)
            this.monsterhealth -= attackStrength
            let logText = `<span class="log--player">Antonio attacked : </span>&nbsp;<span class="log--damage">${attackStrength}</span>`
            this.logs.push(logText);
            this.attackMonster();
        },
        attackMonster() {
            const attackStrength = attack(32, 5)
            this.playerHealth -= attackStrength
            let logText = `<span class="log--monster">Monster attacked :</span>&nbsp;<span class="log--damage">${attackStrength}</span>`
            this.logs.push(logText);

        },
        specialAttack() {
            if (this.monsterhealth <= 50) {
            const attackStrength = attack(50, 30)
            this.monsterhealth -= attackStrength
            let logText = `<span class="log--player">Antonio's special-attacked :</span>&nbsp;<span class="log--damage">${attackStrength}</span>`
            this.logs.push(logText);
            this.specialAttacks -= 1;
            }
        },
        heal() {
            if (this.playerHealth >= 100) {
                window.alert("Your health bar is full, du Idiot! Now the monster took your trunk.")
                this.monsterhealth = 100;
            } else if (this.healReserve > 0 && this.playerHealth < 100) {
                this.playerHealth = 100;
                this.monsterhealth += 7;
                this.healReserve -= 1;
                let logText = `<span class="heal">Antonio was healed</span>`
                this.logs.push(logText);
            } else {
                window.alert("No heal trunk available")
                this.monsterhealth = 100;
            }
        },
        surrender() {
            window.alert("The monster was too hard?")
            this.playerHealth = 0;
            this.monsterhealth = 100;
        },
        restart() {
            this.playerHealth = 100;
            this.monsterhealth = 100;
            this.logs = []
            this.healReserve = 3
            this.specialAttacks = 2
            this.winner = null
        }


    },

    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    watch: {
        playerHealth() {
            if (this.playerHealth <= 0 && this.monsterhealth <= 0) {
                this.playerHealth = 0
                this.monsterhealth = 0
                this.winner = "draw";
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0
                this.monsterhealth = 100
                this.winner = "monster";
            }
        },
        monsterhealth() {
            if (this.playerHealth <= 0 && this.monsterhealth <= 0) {
                this.playerHealth = 0
                this.monsterhealth = 0
                this.winner = "draw";
            } else if (this.monsterhealth <= 0) {
                this.winner = "player";
                this.playerHealth = 100
                this.monsterhealth = 0
                
            }
        }
    },
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    computed: {
        // Computed
        playerStyle() {
            return {
                width: `${this.playerHealth}%`
            }
        },
        healStyle() {
            if (this.healReserve === 0) {
                return {color: "red"};
            }
        }
    }

})


app.mount("#game");