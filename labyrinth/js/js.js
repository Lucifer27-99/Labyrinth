window.onload = function(){
    //define var
    var  keyboard = new Clavier();
    var fps = 30;// raffraichissement en ms
    var x = 11;//position x
    var y = 12;//position y
    var sx = 11; //taille x du sprite
    var sy = 12; //taille y du sprite
    var coll = false // colllision ?

    //create decor and sprite
    var decor = new Image();//définie le décor
    decor.src = "images/labyrinth.png"
    decor.onload = function(){
        ctx.drawImage(this,0,0,263,137);//position décor
    }
    var sprite = new Image();//définie le décor
    sprite.src = "images/sprite.gif"
    sprite.onload = function(){
        ctx.drawImage(this,x,y,11,12);//position image
    }
    var gum = new Image();//définir pac-gum
    gum.src = 'images/min_gum.gif';

    //obstacle
    //mur
    var lvl1o1 = new Obstacle(0,0,6,136);
    var lvl1o2 = new Obstacle(0,80,30,6);
    var lvl1o3 = new Obstacle(0,130,262,6);
    var lvl1o4 = new Obstacle(101,105,6,31);
    var lvl1o5 = new Obstacle(154,103,6,31);
    var lvl1o6 = new Obstacle(128,103,57,6);
    var lvl1o7 = new Obstacle(128,83,6,26);
    var lvl1o8 = new Obstacle(179,80,6,29);
    var lvl1o9 = new Obstacle(153,80,57,6);
    var lvl1o10 = new Obstacle(153,54,6,32);
    var lvl1o11 = new Obstacle(128,54,31,6);
    var lvl1o12 = new Obstacle(128,28,6,32);
    var lvl1o13 = new Obstacle(105,28,29,6);
    var lvl1o14 = new Obstacle(204,28,6,58);
    var lvl1o15 = new Obstacle(179,28,57,6);
    var lvl1o16 = new Obstacle(179,28,6,29);
    var lvl1o17 = new Obstacle(0,0,262,6);
    var lvl1o18 = new Obstacle(77,0,6,60);
    var lvl1o19 = new Obstacle(27,54,81,6);
    var lvl1o20 = new Obstacle(27,28,6,32);
    var lvl1o21 = new Obstacle(27,28,28,6);
    var lvl1o22 = new Obstacle(102,54,6,30);
    var lvl1o23 = new Obstacle(77,78,31,6);
    var lvl1o24 = new Obstacle(77,78,6,31);
    var lvl1o25 = new Obstacle(30,103,53,6);
    var lvl1o26 = new Obstacle(153,0,6,31);
    var lvl1o27 = new Obstacle(230,54,6,30);
    var lvl1o28 = new Obstacle(207,106,54,6);
    var lvl1o29 = new Obstacle(256,0,6,133);
    var lvl1o30 = new Obstacle(230,54,31,6);
    var lvl1o31 = new Obstacle(50,55,6,28);
    var lvl1o32 = new Obstacle(207,106,6,10);
    var lvl1o33 = new Obstacle(207,126,6,10);

    //gum
    var lvl1g1 = new Obstacle(165,90,6,6);
    //obstacle array
    var lvl1o = new Array(lvl1o32,lvl1o33,lvl1o31,lvl1o1,lvl1o2,lvl1o3,lvl1o4,lvl1o5,lvl1o6,lvl1o7,lvl1o8,lvl1o9,lvl1o10,lvl1o11,lvl1o12,lvl1o13,lvl1o14,lvl1o15,lvl1o16,lvl1o17,lvl1o18,lvl1o19,lvl1o20,lvl1o21,lvl1o22,lvl1o23,lvl1o24,lvl1o25,lvl1o26,lvl1o27,lvl1o28,lvl1o29,lvl1o30);//liste des obstacles
    var lvl1g = [lvl1g1];//quelle obstacle
    var vlvl1g = [true];//visible et utilisable
    var xlvl1g = [165];//pos x
    var ylvl1g = [90];//pos y
    var sxlvl1g = [6];//size x
    var sylvl1g = [6];//size y
    var clvl1g = [0];//compteur de la gum
    var ilvl1g = [gum];//image de la gum
    //init canva
    var canvas = document.getElementById("canvas");//définir le canva
    var ctx = canvas.getContext("2d");//dessin 2d ou 3d
     
    

    setInterval(() => {//répeter tous le temps
        //if level 1
        ctx.drawImage(decor,0,0,263,137);//afficher décore

        //mouvement du sprite
        if(keyboard.droite){
            coll = false
            for(p in lvl1o){
                if(lvl1o[p].collision(x+1,y,sx,sy)){
                    coll = true;
                    break;
                }
            }
            if(!coll){
                x++;
            }
        }
        else if(keyboard.gauche){
            coll = false
            for(p in lvl1o){//pour chaque obstacle
                if(lvl1o[p].collision(x-1,y,sx,sy)){//si il y a collision avec le mouvement
                    coll = true;//prévénir collision
                    break;
                }
            }
            if(!coll){//si il n'y a pas collision
                x--;//faire le mouvement
            }
        }
        if(keyboard.bas){
            coll = false
            for(p in lvl1o){
                if(lvl1o[p].collision(x,y+1,sx,sy)){
                    coll = true;
                    break;
                }
            }
            if(!coll){
                y++;
            }
        }
        else if(keyboard.haut){
            coll = false
            for(p in lvl1o){
                if(lvl1o[p].collision(x,y-1,sx,sy)){
                    coll = true;
                    break;
                }
            }
            if(!coll){
                y--;
            }
        }

        //gum

        for(p in lvl1g){//pour chaque gum
            if(lvl1g[p].collision(x,y,sx,sy)&& vlvl1g[p]){//si collision et visible
                vlvl1g[p] = false;//devient invisible
                clvl1g[p] = 700;//pendant
                break;
            }
            if(vlvl1g[p]){//est visible
                ctx.drawImage(ilvl1g[p],xlvl1g[p],ylvl1g[p],sxlvl1g[p],sylvl1g[p]);//afficher
            }

            //code one 
            if(clvl1g[p]==0){//revient normal
                sprite.src='images/sprite.gif'//sprite de base
                sx =11;//x de base
                sy =12;//y de base
                vlvl1g[p] = true;//redevient visible
            }
            else if(clvl1g[p]==700){//si init
                sprite.src='images/min_sprite.gif'//prend min sprie
                clvl1g[p]--;// temps -1
                sx =9;//resize x
                sy =7;//re size y
            }
            else if(clvl1g[p]>0){//si en cours
                clvl1g[p]--;//temps -1
            }
            // console.log(clvl1g[p]);

            //code two (portail)
        }
        ctx.drawImage(sprite,x,y,sx,sy);//afficher le sprite
    }, fps);

}
