const Util = {
  print2DArray: function (grid) {
    for (let i = 0; i < grid.length; i++) {
      console.log(...grid[i]);
    }
    console.log();
  },
  copyGrid: function (from, to) {
    for (let index = 0; index < from.length; index++) {
      to[index] = [...from[index]];
    }
  },
};

export { Util };
