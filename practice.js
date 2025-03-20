function setup(){
    createCanvas(1600,1100)
    background(255)
}
function draw()
{
    strokeWeight(3)
    fill(0,0,255)
    
    //Head
    beginShape()
    vertex(110,132)
    vertex(97,143)
    vertex(95,158)
    vertex(88,173)
    vertex(105,183)
    vertex(129,177)
    vertex(138,182)
    vertex(177,134)
    vertex(120,123)
    endShape(CLOSE)
   
    //Body
    fill(55,255,50)
    beginShape()
    vertex(212,129)
    vertex(302,112)
    vertex(303,206)
    vertex(179,206)
    endShape(CLOSE)
    
    //Leg1
    fill(255,255,0)
    beginShape()
    vertex(182,129)
    vertex(130,195)
    vertex(127,210)
    vertex(86,252)
    vertex(75,256)
    vertex(73,265)
    vertex(95,265)
    vertex(195,195)
    vertex(213,129.5)
    vertex(182,129)
    endShape(CLOSE)
    
    //Leg2
    fill(255,0,0)
    beginShape()
    vertex(194,206)
    vertex(212,251)
    vertex(205,255)
    vertex(202,265)
    vertex(229,265)
    vertex(226,206)
    endShape(CLOSE)
   
    //Leg4
    fill(230,50,120)
    beginShape()
    vertex(342,207)
    vertex(388,220)
    vertex(405,246)
    vertex(405.2,259)
    vertex(414,264)
    vertex(421,242)
    vertex(401,198)
    vertex(381,185)
    vertex(357,137)
    endShape(CLOSE)

    //Tail
    fill(20,250,140)
    beginShape()
    vertex(357,135)
    vertex(386,98)
    vertex(397,54)
    vertex(414,30)
    vertex(393,35)
    vertex(377,54)
    vertex(366,89)
    vertex(327,124)
    endShape(CLOSE)
    
    //Leg3
    fill(20,100,150)
    beginShape()
    vertex(290,189)
    vertex(323,235)
    vertex(310,255)
    vertex(294,257)
    vertex(291,268)
    vertex(318,268)
    vertex(349,237)
    vertex(340,209)
    vertex(362,168)
    vertex(357,135)
    vertex(302,112)
    endShape(CLOSE)

    //Ear
    fill(255,50,250)
    triangle(100,113,140,127,120,140)
}