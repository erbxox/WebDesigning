var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
//Draw Rectangle//
//to fill the rectangle you use fillstyle
c.fillStyle="yellow";
/*c.fillRect(x,y,width,height);*/
c.fillRect(100,100,100,100);
c.fillStyle="red";
c.fillRect(200,200,100,100);
c.fillStyle="blue";
c.fillRect(300,300,100,100);
