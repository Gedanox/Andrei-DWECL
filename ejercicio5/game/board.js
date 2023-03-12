class board{
    defaultboard;
    boatsleft;
    enemypoints = 0;
    playerpoints = 0;
    y;
    x;
    z;

    init(){
        this.defaultboard = [   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                        ];

        this.boatsleft=10;

    }

    checkmove(input){
        if (/^[(](?:[2][0]|[1][0-9]|[123456789])[,](?:[2][0]|[1][0-9]|[123456789])[)]$/.test(input)) {
            this.y=input.charAt(1);
            this.x=input.charAt(3);
            this.checkpoint(this.x, this.y, 1);
        } else if(/^[(](?:[-]?[0-9]+)[,](?:[-]?[0-9]+)[)]$/.test(input)) {
            console.log("You shout outside of the boundaries of the board!")
        }else {
            console.log("Input not correct, try again.")
        }
    }

    checkpoint(x, y, z){
        if( z == 1){
            x--;
            y--;
        }
        console.log(z);
        console.log(x+1);
        console.log(y+1);
        if(this.defaultboard[x][y] == 1 ){
            if( z == 1 ){
                console.log("You scored a point!")
                this.playerpoints++;
                this.commitmove(x,y);
                this.checkgame();
                this.machinemove();
            } else if( z == 0) {
                console.log("Enemy scored a point! :(")
                this.enemypoints++;
                this.commitmove(x,y);
                this.checkgame();
            } else {
                console.log("Unexpecter error, you shouldn't be able to do that!")
            }
        } else if (z==1) {
            this.machinemove();
        }
    }

    commitmove(x,y){
        this.defaultboard[x][y] = 0;
        this.boatsleft--;
    }

    checkgame(){
        if(this.playerpoints>5){
            console.log("Game won, press F5 to restart");
        } else if (this.enemypoints>5){
            console.log("Game over, press F5 to restart");
        } else if( this.playerpoints==5 && this.enemypoints==5 ){
            console.log("Game is in draw, cannot continue, press F5 to restart");
        }
    }

    getRandomMove() {
        return Math.floor(Math.random() * 20);
    }

    machinemove(){
        this.checkpoint(this.getRandomMove(),this.getRandomMove(), 0)
    }
}

export {board};