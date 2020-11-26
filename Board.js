class Board extends React.Component {
    constructor(props) {
        console.log('Board Initialized');
      super(props);
      this.state = {
        map: new MapState()
      };
    }
   
   //renderSquare(i) {
   //   return <Square value="x" onClick={() => this.handleClick(i)} />;
    //}
    
    handleClick(r, c) {
        console.log('Clicked ' + r + ',' + c);

    
        //this.state.map.terrain[r][c] = MapTerrainLand;
        //this.setState(this.state);
        let stateClone = JSON.parse(JSON.stringify(this.state));
        stateClone.map.terrain[r][c] = MapTerrainLand;
        this.setState(stateClone);
        

      /*const squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext}); */
    }
  
    render() {
        

      //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
        // const rows = [];
        // let mapState = this.state.map;
        // for(let r = 0; r < mapState.terrain.length - 1; r++) {
        //     let columns = [];
        //     for(let c = 0; c < mapState.terrain[r].length - 1; c++) {
        //         let s = <Square key={r + '-' + c} r={r} c={c} type={mapState.terrain[r][c]} onClick={() => this.handleClick(r, c)} ></Square>
        //         columns.push(s);
        //     }

        //     rows.push(<div className="board-row">{columns}</div>)
        // }

      let r = (
        <div>
          { this.state.map.terrain.map((rowArray, rowIndex) => 
            <div className="board-row" key={"row-" + rowIndex}>
              {
                rowArray.map((columnValue, columnIndex) => 
                  <Square key={rowIndex + '-' + columnIndex}
                    r={rowIndex} c={columnIndex}
                    type={columnValue}
                    onClick={() => this.handleClick(rowIndex, columnIndex)}></Square>
                )
              }
            </div>
          )}
        </div>
      );
      return r;
    }
  }