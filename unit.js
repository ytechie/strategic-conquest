const UnitTypeTank = 1;
const UnitTypeFighterJet = 2;
const UnitTypeCarrier = 3;
const UnitTypeBattleship = 4;


class Unit {
    unitType;

    constructor(thisUnitType) {
        unitType = thisUnitType;
    }
}