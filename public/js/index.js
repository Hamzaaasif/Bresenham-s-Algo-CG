
window.onload=init();
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");


var point1 = new point(2,4);
console.log(point1.x , point1.y);

function init()
{
  var p1 = new point(300,100);
  var p2 = new point(100,360);
  bresenham(p1,p2);

   p1.setpoint(8*20,23*20);
   p2.setpoint(21*20,11*20);
  bresenham(p1,p2);
}

function bresenham(Startpoint , EndPoint)
{
  var W = EndPoint.x - Startpoint.x;
  var H = EndPoint.y - Startpoint.y;
  if(Startpoint.x > EndPoint.x)
  {
    console.log("ax > bx");
    var temp = Startpoint;
    Startpoint=EndPoint;
    Startpoint=temp;
  }
  if(H/W < -1)
  {
      W*=-1;
      var temp1 = EndPoint.x;
      EndPoint.x = EndPoint.y;
      EndPoint.y =temp1;

      temp1 = Startpoint.x;
      Startpoint.x = Startpoint.y;
      Startpoint.y =temp1;
  }
  var F = (2*H)-W;
  console.log("Width: ", W,"Height: ", H, "Slope: ",H/W);

  for(var i =Startpoint.x ; i<=EndPoint.x ; i++)
  {
    console.log("X: ",Startpoint.x ,"Y: ", Startpoint.y,"F: ", F);
    Startpoint.drawPoint();
    Startpoint.x++;

    if( F < 0 )
    {
      F+=2*H;
    }
    else
    {
      Startpoint.y++
      F+=2*(H-W);
    }
   // Startpoint.y++;
  }
}