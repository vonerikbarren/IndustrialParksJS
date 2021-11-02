const LabTest = require('./Lab');
const LabDataTest = require('./LabData');

const MainLab01 = new LabTest(
  "FocusTest",
  "To Test two classes",
  "11.01.21",
  "11.01.21",
  1956,
  2005,
  "Good",
  "Good I have tea",
)

const LabData01 = new LabDataTest(
  "To test Lab Class",
  "Lab Code functionability",
  "11.01.21",
  "11.01.21",
  1532,
  2100,
  "Good",
  "Good",
)

const Full_LabData01 = `Japanese Ch.1: ${LabData01}`;

// # Main Lab 01
MainLab01.fxA1_addData(0, Full_LabData01);

// # Data to be pushed into Main Lab 01
LabData01.fxA1_addLabData(
  1,
  2100,
  2106,
  ["Hello", "My Name is Von"],
  "1 string was added"
);


const Divider = "----------------------";
console.log("\n" + "# Main Lab" + Divider);
MainLab01.fxA0_printLab();
console.log("\n" + "# LabData01" + Divider);
LabData01.fxA0_printLabDataPreview();


