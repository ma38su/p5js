w = 500;
n = 100;
setup = () => {
  createCanvas(w, w);
  stroke(0,50);
  noFill();
  cs = [];
  for (i=0;i<n;++i) cs.push({
    x: random(w),
    y: random(w),
    r: random(90)+1,
    dx: random(4)-2,
    dy: random(4)-2,
    s: random(5)+0.1,
  });
}

draw = () => {
  background(220);
  for (i=0;i<n;++i) {
    c = cs[i];
    c.x += c.dx;
    c.y += c.dy;
    if (c.x < -c.r) c.x = w + c.r;
    if (c.y < -c.r) c.y = w + c.r;
    if (c.x > w + c.r) c.x = -c.r;
    if (c.y > w + c.r) c.y = -c.r;
    for (j=i+1;j<n;++j) {
      c1 = cs[j];
      const o = dist(c.x, c.y, c1.x, c1.y) - c.r - c1.r;
      if (o < 0) {
        strokeWeight(c.s+c1.s);
        ellipse((c.x + c1.x) / 2, (c.y + c1.y) / 2, -o, -o);
      }
    }
  }
}
