class point
{
  constructor(x , y)
  {
    this.x = x;
    this.y = y;
  }

  setpoint(x,y)
  {
    this.x=x;
    this.y=y;
  }
  
  drawPoint()
  {
    var cvs  = document.getElementById("mycanvas");
    var ctx = cvs.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = "#17202A";
    ctx.fillRect(this.x , this.y, 2, 2);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    }

}