let obj = {
    gridSize: 6,
    weightFactor: 0.5,
    fontFamily: 'sans-serif',
    color: function() {
      return (['#FB7299', '#6DC781', '#00A1D6'])[Math.floor(Math.random() * 3)]
    },
    backgroundColor: '#fff'
}