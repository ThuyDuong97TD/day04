let myCanvas = document.getElementById("myCanvas");

let pen = myCanvas.getContext("2d");
let centerX = myCanvas.width / 2;
let centerY = myCanvas.height / 2;
let rectWidth = 100;

function clear(){
    pen.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

function loop(){
    let FPS = 60;
    let timeLoop = 1000/FPS;
    let height = myCanvas.height - 500;
    let counter = myCanvas.height - 500;

    setInterval(() => {

        if(height > (myCanvas.height - 550) && counter > (myCanvas.height - 550)){
            height -= 5;
            counter -= 5;
        }else if(height < myCanvas.height - 500){
            height += 10;
            if(height >= myCanvas.height - 500){

                counter = myCanvas.height - 500;
            }
        }
        clear();
        tainghe(pen, 390, height, 25, 80, 10) // ve tai trai
        tainghe(pen, 645, height, 25, 80, 10)
    }, timeLoop);
}

loop();

function veDau(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fillStyle = "#FFF0F5";
    ctx.fill();
    ctx.stroke();
    

}
function veThan(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fillStyle = "red";
    ctx.fill();
    

}

function vechan(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.stroke();
    

}

function vedep(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fillStyle = "#FF6699";
    ctx.fill();
    ctx.stroke();
    

}

function tayphai(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fillStyle = "#FF6699";
    ctx.fill();
    ctx.stroke();
    

}
function taytrai(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    

}
function tainghe(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fillStyle = "#FF6699";
    ctx.fill();
    ctx.stroke();
    

}
function non(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fillStyle = "#FF3366";
    ctx.fill();
    ctx.stroke();
    

}
function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
    

}


function veMattrai(){

pen.lineWidth = 4;
pen.strokeStyle = "black";

pen.beginPath();

pen.arc(480 ,142, 10, 0, Math.PI*2, true);
pen.fillStyle = "black";
pen.fill();
pen.stroke();
pen.closePath();

}
// veMattrai();
function veMatphai(){

    pen.lineWidth = 4;
    pen.strokeStyle = "black";

    pen.beginPath();

    pen.arc(583 ,142, 10, 0, Math.PI*2, true);
    pen.fillStyle = "black";
    pen.fill();
    pen.stroke();
    pen.closePath();
    
}
// veMatphai();

function veMieng(pen, x, y, x1, y1, style){

    pen.lineWidth = 4;
    pen.strokeStyle = "#98F5FF";

    pen.beginPath();
    pen.moveTo(x,y);
    pen.lineTo(x1,y1);

    pen.stroke();
    pen.strokeStyle = style;
    pen.closePath();
    
}
veMieng(pen, 525, 200, 540, 200);
// 525 200
//540 200
function buaBlackpink(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();  
}
// buaBlackpink();
function buaBlackpink02(){

    pen.lineWidth = 7;
    pen.strokeStyle = "#9999FF";

    pen.beginPath();

    pen.arc(855 ,515, 70, 0, Math.PI*2, true);
    pen.fillStyle = "#FF99CC";
    pen.fill();
    pen.stroke();
    pen.closePath();
}
function buaBlackpink01(){

    pen.lineWidth = 7;
    pen.strokeStyle = "#9999FF";

    pen.beginPath();

    pen.arc(270 ,141, 70, 0, Math.PI*2, true);
    pen.fillStyle = "#FF99CC";
    pen.fill();
    pen.stroke();
    pen.closePath();
}


function vayTay(){
    setInterval(() => {
        strokeStyle = "yellow";
        veThan(pen, 405, 230, 250, 220, 9); // ve minh

        vechan(pen, 450, 450, 55, 90, 10) // vechan
        vechan(pen, 550, 450, 55, 90, 10)
        veDau(pen, 430, 90, 200, 130, 9) // vedau
        
        // tainghe(pen, 390, 115, 25, 80, 10) // ve tai trai
        // tainghe(pen, 645, 115, 25, 80, 10)
        
        non(pen, 486, 55, 90, 35, 6) // non 
        
        taytrai(pen, 640, 490, 180, 55, 10) // taytrai
        // roundedRect(pen, 135, 53, 49, 33, 10);
        vedep(pen, 544, 545, 70, 50, 10) // 
        vedep(pen, 441, 545, 70, 50, 10) //ve dep
        
        tayphai(pen, 245, 240, 55, 55, 10) //tay phai
        // pen, 630, 490, 55, 55, 10
        // pen, 245, 240, 55, 55, 10

        buaBlackpink(pen, 245, 180, 55, 190, 10);
        // buaBlackpink01();
        
        pen.beginPath();
        pen.moveTo(350, 350);
        pen.lineTo(405, 270);
        pen.stroke(); 
        pen.closePath();
        
        pen.beginPath();
        pen.moveTo(300, 270);
        pen.lineTo(350, 350);
        pen.stroke();
        pen.closePath();
        
        pen.beginPath();
        pen.moveTo(655, 270);
        pen.lineTo(750, 350);
        pen.stroke();
        pen.closePath();
        
        pen.beginPath();
        pen.moveTo(660, 490);
        pen.lineTo(750, 350);
        pen.stroke();
        pen.closePath();
        veMattrai();
        veMatphai();
        veMieng(pen, 525, 200, 540, 200)

    },10000/8600)
    // roundedRect(pen, 12, 12, 150, 150, 1);

}
// vayTay();
function veMacDinh(){
    setInterval(() => {
        strokeStyle = "white";
        veThan(pen, 405, 230, 250, 220, 9); // ve minh

        vechan(pen, 450, 450, 55, 90, 10) // vechan
        vechan(pen, 550, 450, 55, 90, 10)
        veDau(pen, 430, 90, 200, 130, 9) // vedau
        
        // tainghe(pen, 390, 115, 25, 80, 10) // ve tai trai
        // tainghe(pen, 645, 115, 25, 80, 10)
        
        non(pen, 486, 55, 90, 35, 6) // non 
        
        taytrai(pen, 640, 490, 180, 55, 10) // taytrai
        // roundedRect(pen, 135, 53, 49, 33, 10);
        vedep(pen, 544, 545, 70, 50, 10) // 
        vedep(pen, 441, 545, 70, 50, 10) //ve dep
        
        tayphai(pen, 245, 240, 55, 55, 10) //tay phai
        // pen, 630, 490, 55, 55, 10
        // pen, 245, 240, 55, 55, 10
        buaBlackpink(pen, 245, 180, 55, 190, 10);
        pen.beginPath();
        pen.moveTo(350, 350);
        pen.lineTo(405, 270);
        pen.stroke(); 
        pen.closePath();
        
        pen.beginPath();
        pen.moveTo(300, 270);
        pen.lineTo(350, 350);
        pen.stroke();
        pen.closePath();
        
        pen.beginPath();
        pen.moveTo(655, 270);
        pen.lineTo(750, 350);
        pen.stroke();
        pen.closePath();
        
        pen.beginPath();
        pen.moveTo(660, 490);
        pen.lineTo(750, 350);
        pen.stroke();
        pen.closePath();
        veMattrai();
        veMatphai();
        veMieng(pen, 525, 200, 540, 200, "gray")
        buaBlackpink02();
        buaBlackpink01();

        logo();
    },10000/7200)
    // roundedRect(pen, 12, 12, 150, 150, 1);

}
veMacDinh();