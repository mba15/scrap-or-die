import React, {Component} from "react";
/*
We need to define a game mechanic.
Player will attack then enemy will attack after a few second delay
need to define player stats 
need to define enemy stats
need to define weapon stats

attack will be determined by weapon /attack /hp
need to factor in mischance
need to factor in magic point status

toggle turns

*/


class newGame extends Component {
    constructor(props){
        super(props);
            this.state = {
                enemy: {
                    enemyName: EnemyName,
                    enemyHp: enemyHp,
                    enemyMp: enemyMp,
                    enemyWeapon: enemyWeapon,
                    isAlive: true
                },
                player: {
                    name: name,
                    hp: hp,
                    mp: mp,
                    weapon: weapon,
                    isAlive: true
                },
                message: message
        }
        this.handleAttack = this.handleAttack.bind(this);
    }

    //attack function 
    handleAttack(attackWeapon, hp) {
        let misChance = Math.floor(Math.random() * 10);
        if(misChance < 3) {
            message = "Sorry your attack Missed";
        } else {
            let damage = Math.floor(Math.random(this.props.weapon.damage) * this.props.weapon.damage) 
            let newHP = this.props.enemyHp - damage;
            message =  "You have attacked the enemy for " + damage + " damage!";
            if(newHP <= 0 ){
                message = "You have killed the enemy! You WIN!"
                game.state = endgame
            } else {
                message = "Now the enemy attacks"
                EnemyAttack()
            }
        }
    }
    //magic function
    handleMagicAttack(magicPoints, magicAttack, enemyHitPoints){
        if(magicPoints === 0){
            message =  "Sorry you do not have any magic points."
        } else {
            let misChance = Math.floor(Math.random()  * 10 );
            if(misChance < 3) {
                message = "Sorry your magic spell misfired."
            } else {
                let damage = (this.floor(Math.random(magicAttack) * magicAttack) + 5);
                let newHP = enemyHitPoints - damage;
                message =  "Your spell attacked the enemey for " + damage + " damage!"
                if(newHP <= 0 ){
                    message = "You have killed the enemy! You WIN!"
                    game.state = endgame
                } else {
                    message = "Now the enemy attacks"
                    EnemyAttack()
                }
            }
        }
    }
    
    render(){
        return(
            <div>
                <div className="stats">
                    <span> {this.state.name} </span>
                    <span> {this.state.hp} </span>
                    <span> {this.state.mp} </span>
                    <span> {this.state.weapon} </span>
                </div>
                <div className="attack">
                    <button onClick={this.handleAttack(this.state.weapon, this.state.enemyHp)}> Attack </button>
                    <button> Magic </button>
                </div>
                <div>
                <span> {this.state.enemyName} </span>
                    <span> {this.state.enemyHp} </span>
                    <span> {this.state.enemyMp} </span>
                    <span> {this.state.enemyWeapon} </span>
                </div>
            </div>

        )
    }
}

export default newGame;