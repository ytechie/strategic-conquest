class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
    
    render() {
        console.log('Square rendered');
      return <button className={'square ' + this.mapColor(this.props.type)}
      onClick={() => this.props.onClick()}></button>
    }

    

    mapColor(terrainType) {
        if(terrainType === MapTerrainLand) {
            return 'MapTerrainLand';
        }
        if(terrainType === MapTerrainWater) {
            return 'MapTerrainWater';
        }
        return '';
    }

    shouldComponentUpdate(nextProps) {
        return this.props.type !== nextProps.type;
    }
  }