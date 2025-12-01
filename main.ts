/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-11-30
 * @fileoverview This program calculates the side length of a cube given its volume.
 */

// initialize volume
const VOLUME: number = 1000;

// INPUT - none

// PROCESS
// calculate the side length (cube root)
const side: number = Math.cbrt(VOLUME);

// OUTPUT
// display the result
console.log(
  "The length, width, and height of the cube with a volume of " +
  VOLUME +
  " mm³ is " +
  side.toFixed(2) +
  " mm."
);

console.log("\nDone.");