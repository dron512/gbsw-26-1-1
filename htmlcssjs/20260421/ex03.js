const unit = {
    0:'0입니다',
    name: "현재",
    attack(weapon){
        return `${weapon}으로 공격한다`;
    }
}
unit['0']= '00입니다';
console.log(unit['0']);
// console.log(unit.0);

console.log(unit.attack("주먹"));
console.log(unit.attack("총"));

console.log(unit.name);
//대괄호 표기법
console.log(unit['name']);