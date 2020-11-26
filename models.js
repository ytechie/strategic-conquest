const MaxMapRows = 100;
const MaxMapCols = 100;

const MapTerrainLand = 0;
const MapTerrainWater = 1;

class MapState {
    terrain = new Array(MaxMapRows);
    units = new Array();
    
    constructor() {
        for(var row = 0; row < MaxMapRows; row++) {
            this.terrain[row] = new Array(MaxMapCols);
            for(var col = 0; col < MaxMapCols; col++) {
                this.terrain[row][col] = MapTerrainWater;
            }
        }
    }
}