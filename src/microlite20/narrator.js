module.exports = {
    narrateAttack: (resultData) => {
        let aName = resultData.attacker.name;
        let dName = resultData.defender.name;
        let str = `${aName} attacked ${dName} with their ${resultData.weapon.full_name}`;
        if (resultData.crit) str += `! It was a devastating blow!!`
        if (resultData.hit) {
            str += `! ${dName} took ${resultData.damage} damage.`;
            if (resultData.finishingBlow) {
                if (resultData.defender.getCurrentHP() === 0) {
                    str += ` ${dName} is knocked out!`;
                } else if (resultData.defender.getStr() > 0) {
                    str += ` ${dName} is unconscious and battered!`
                } else {
                    str += ` ${dName} died!!!`;
                }
            } else if (resultData.defender.getCurrentHP() <= 0) {
                if (resultData.defender.getStr() > 0) {
                    str += ` ${dName}'s unconscious body is assaulted!`
                } else {
                    str += ` ${dName} died!!!`;
                }
            }
        } else {
            str += ', but missed!';
        }
        return str;
    }
}