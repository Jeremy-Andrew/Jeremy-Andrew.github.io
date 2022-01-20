//to be saved as a .js file
// CHANGE the digits themselves, the 2d shape-type, the number of those shapes, where/how they relate to everyother
//DO NOT CHANGE the stuff in the setup related to the Canvas

let boat= 26;


function setup() {
  createCanvas(720, 480);  //do not touch!
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw() {
  background(204);
  // Neck
  stroke("blue"); // Set stroke to blue
  line(266, 257, 266, 100); // Left
  line(276, 257, 276, 100); // Middle
  line(286, 257, 286, 100); // Right
  // Antennae
  line(276, 155, 246, 246); // Small
  line(276, 155, 306, 306); // Tall
  line(276, 155, 342, 342); // Medium
  // Body
  noStroke(); // Disable stroke
  fill("magenta"); // Set fill to magents
  ellipse(264, 377, 33, 33); // Antigravity orb
  fill("pink"); // Set fill to pink
  rect(219, 257, 90, 90); // Main body
  fill("beige"); // Set fill to beige
  rect(219, 274, 90, 6); // Gray stripe
  fill(0); // Set fill to black
  ellipse(276, 155, 45, 45); // Head
  fill("green"); // Set fill to green
  ellipse(288, 150, 14, 14); // Large eye
  fill("yellow"); // Set fill to black
  ellipse(288, 150, 3, 3); // Pupil
  fill("yellow"); // Set fill to light yellow
  ellipse(263, 148, 5, 5); // Small eye 1
  ellipse(296, 130, 4, 4); // Small eye 2
  ellipse(305, 162, 3, 3); // Small eye 3
}
