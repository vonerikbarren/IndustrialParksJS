class Lab {
  constructor(
    C1_DateMade = String,
    C2_TimeMade = String,
    C3_Topic = String,
    C4_LabTitle = String,
    C5_LabStartDate = String,
    C6_LabEndDate = String,
  ) {
    this.C1_DateMade = C1_DateMade;
    this.C2_TimeMade = C2_TimeMade;
    this.C3_Topic = C3_Topic;
    this.C4_LabTitle = C4_LabTitle;
    this.C5_LabStartDate = C5_LabStartDate;
    this.C6_LabEndDate = C6_LabEndDate;

    // LabLog
    this.C7_Lab_Database = [
      { labID: 0, LabData: [], },
      { labID: 1, LabData: [], },
      { labID: 2, LabData: [], },
      { labID: 3, LabData: [], },
      { labID: 4, LabData: [], },
      { labID: 5, LabData: [], },
      { labID: 6, LabData: [], },
      { labID: 7, LabData: [], },
      { labID: 8, LabData: [], },
      { labID: 9, LabData: [], },
      { labID: 10, LabData: [], },
    ];
  }

  fxA0_printLab = () => console.log(this.C7_Lab_Database);

  fxA1_addData = (IDNumber, data) => {
    if (IDNumber === 0) {
      this.C7_Lab_Database[0].LabData.push(data);
    } else if (IDNumber === 1) {
      this.C7_Lab_Database[1].LabData.push(data);
    } else if (IDNumber === 2) {
      this.C7_Lab_Database[2].LabData.push(data);
    } else if (IDNumber === 3) {
      this.C1_Lab_Database[3].LabData.push(data);
    } else if (IDNumber === 4) {
      this.C1_Lab_Database[4].LabData.push(data);
    } else if (IDNumber === 5) {
      this.C1_Lab_Database[5].LabData.push(data);
    } else if (IDNumber === 6) {
      this.C1_Lab_Database[6].LabData.push(data);
    } else if (IDNumber === 7) {
      this.C1_Lab_Database[7].LabData.push(data);
    } else if (IDNumber === 8) {
      this.C1_Lab_Database[8].LabData.push(data);
    } else if (IDNumber === 9) {
      this.C1_Lab_Database[9].LabData.push(data);
    } else if (IDNumber === 10) {
      this.C1_Lab_Database[10].LabData.push(data);
    } else {
      console.log("Error: " + Error);
    }
  }
}

const test00 = new Lab(
  "11.01.21",
  "Testing of DataTypes",
  "11.01.21",
  "",
  1100,
  1300,
  "High as a kite",
  "High as a kite",
);

const message = "This is a message";
const myObj = {
  i1: ["Hello World"],
  i2: ["Hello Billy"],
  i3: ["Hello Sara"],
}

test00.fxA1_addData(1, message);
test00.fxA0_printLab();