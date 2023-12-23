let hr;
let min;
let srtMin;
let sec;
let seedValue;
let flowerMargin = 50;

// setup() is called once at page-load
function setup() {
    createCanvas(800,600);
    seedValue = 1010;
    randomSeed(seedValue);
    srtMin = minute();
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();
    randomSeed(seedValue);

    textSize(32);
    background(200, 230, 255);



    drawFlowers(hr);
    drawBees(min);
    drawHoney(sec);

    if (min != srtMin) {
        console.log(min);
        srtMin = min;
    }
}
  

function drawFlowers(hours) {
    for (let i = 0; i < hours; i++) {
        let x = random(flowerMargin, width - flowerMargin);
        let y = random(flowerMargin, height - flowerMargin);

        stroke(50, 150, 50);
        strokeWeight(3);
        line(x, y, x, y + 40);
        
        ellipse(x, y, 32, 32);
        
        fill(50, 150, 50);
        noStroke();
        triangle(x - 5, y + 30, x, y + 20, x + 5, y + 30);
        
        fill(50, 200, 50);
        rect(x - 10, y + 40, 20, 5);

        fill(random(200, 255), random(100, 200), random(100, 200));
        for (let j = 0; j < 10; j++) {
            let petalX = x + cos(TWO_PI / 10 * j) * 20;
            let petalY = y + sin(TWO_PI / 10 * j) * 20;
            ellipse(petalX, petalY, 15, 15);
        }
    }
  }

  function drawBees(minutes) {
    let tolerance = 30;
    for (let i = 0; i < minutes; i++) {
        let x = Math.max(tolerance, random(width - tolerance));
        let y = Math.max(tolerance, random(height - tolerance));
        drawBee(x, y);
    }
  }
  
  
  function drawBee(x, y) {
    let bodyWidth = 10;
    let bodyHeight = 15;
    let wingSize = 15;
    
    fill('white');
    ellipse(x + bodyWidth / 2 + wingSize / 2, y - 3, wingSize, wingSize);
    ellipse(x - bodyWidth / 2 - wingSize / 2, y - 3, wingSize, wingSize);
    
    fill(color(255, 204 + random(20), random(100, 200)));
    ellipse(x, y, bodyWidth, bodyHeight);
    ellipse(x, y - 5, bodyWidth, bodyHeight);
    ellipse(x, y - 7, bodyWidth, bodyHeight);

    fill('black');
    rect(x - bodyWidth / 2, y - 11, bodyWidth, 2);
    rect(x - bodyWidth / 2, y - 7, bodyWidth, 2);
    rect(x - bodyWidth / 2, y - 3, bodyWidth, 2);
    rect(x - bodyWidth / 2, y +1, bodyWidth, 2);
  }
  
  function drawHoney(seconds) {
    for (let i = 0; i < seconds; i++) {
        let x = random(width);
        let y = random(height);
        drawHoneyDroplet(x, y, 20);
    }
  }
  
  function drawHoneyDroplet(x, y, size) {
    fill('orange');
    beginShape();
    vertex(x, y + size / 2);
    bezierVertex(x + size / 2, y + size / 2, x + size / 4, y - size / 2, x, y - size / 2);
    bezierVertex(x - size / 4, y - size / 2, x - size / 2, y + size / 2, x, y + size / 2);
    endShape(CLOSE);
  }
  

