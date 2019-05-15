var express = require('express');
var router = express.Router();
let {Game} = require('../../../definitive/battleship.js');

let Battleship = new Game();
let p1 = Battleship.addPlayer("Nombre Del Player Rodriguez");
for (let index = 0; index < 5; index++){
  p1.addShip(`SS Anne #${index+1}`, Battleship)
}
Battleship.printMap();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', 
  ships: Battleship.players[0].getShips(),
  size: Battleship.size
  });
});
router.post('/battleship/dropbomb/:x/:y', function(req, res, next){
  Battleship.dropBomb(parseInt(req.params.x), parseInt(req.params.y));
  res.send('OK');
})
module.exports = function(io){
  io.on('connection', function(socket){

    console.log('a user connected on the backend', socket.id);
    socket.on('dropbomb', function(coords){
      
      console.log('this are the coords', coords);
      socket.emit('wasHit', false);
    });
  });
  return router;
};
