class LabData {
  constructor(
    C1_DateStart = String,
    C2_DateEnd = String,
    C3_TimeStart = Number,
    C4_TimeEnd = Number,
    C5_DataTitle = String,
    C6_DataTags = Array,
  ) {
    this.C1_DateStart = C1_DateStart;
    this.C2_DateEnd = C2_DateEnd;
    this.C3_TimeStart = C3_TimeStart;
    this.C4_TimeEnd = C4_TimeEnd;
    this.C5_DataTitle = C5_DataTitle;
    this.C6_DataTags = C6_DataTags;

    // Storage + Log
    this.Storage = [
      {
        DA0_DataID: 0,
        DA1_DataLog_TimeStart: [],
        DA2_DataLog_TimeFinish: [],
        DA3_DataEntry: [],
        DA4_DataSummaryOutput: [],
      },

      {
        DB0_DataID: 1,
        DB1_DataLog_TimeStart: [],
        DB2_DataLog_TimeFinish: [],
        DB3_DataEntry: [],
        DB4_DataSummaryOutput: [],
      },

      {
        DC0_DataID: 2,
        DC1_DataLog_TimeStart: [],
        DC2_DataLog_TimeFinish: [],
        DC3_DataEntry: [],
        DC4_DataSummaryOutput: [],
      },

      {
        DD0_DataID: 3,
        DD1_DataLog_TimeStart: [],
        DD2_DataLog_TimeFinish: [],
        DD3_DataEntry: [],
        DD4_DataSummaryOutput: [],
      },

      {
        DE0_DataID: 4,
        DE1_DataLog_TimeStart: [],
        DE2_DataLog_TimeFinish: [],
        DE3_DataEntry: [],
        DE4_DataSummaryOutput: [],
      },

      {
        DE0_DataID: 5,
        DE1_DataLog_TimeStart: [],
        DE2_DataLog_TimeFinish: [],
        DE3_DataEntry: [],
        DE4_DataSummaryOutput: [],
      },
    ];
  }

  fxA0_printLabDataPreview = (dataSection, dataAttribute) => {
    if (dataSection === 0) {
      console.log(this.Storage[0]);
    } else if (dataSection === 1) {
      console.log(this.Storage[1]);
    } else if (dataSection === 2) {
      console.log(this.Storage[2]);
    } else if (dataSection === 3) {
      console.log(this.Storage[3]);
    } else if (dataSection === 4) {
      console.log(this.Storage[4]);
    } else if (dataSection === 5) {
      console.log(this.Storage[5]);
    } else { console.log(this.Storage); }
  }

  fxA1_addLabData = (
    DataID,
    TimeStart,
    TimeFinish,
    DataEntry,
    SummaryOutput
  ) => {
    if (DataID === 0) {
      this.Storage[0].DA1_DataLog_TimeStart.push(TimeStart);
      this.Storage[0].DA2_DataLog_TimeFinish.push(TimeFinish);
      this.Storage[0].DA3_DataEntry.push(DataEntry);
      this.Storage[0].DA4_DataSummaryOutput.push(SummaryOutput);
    } else if (DataID === 1) {
      this.Storage[1].DB1_DataLog_TimeStart.push(TimeStart);
      this.Storage[1].DB2_DataLog_TimeFinish.push(TimeFinish);
      this.Storage[1].DB3_DataEntry.push(DataEntry);
      this.Storage[1].DB4_DataSummaryOutput.push(SummaryOutput);
    } else if (DataID === 2) {
      this.Storage[2].DC1_DataLog_TimeStart.push(TimeStart);
      this.Storage[2].DC2_DataLog_TimeFinish.push(TimeFinish);
      this.Storage[2].DC3_DataEntry.push(DataEntry);
      this.Storage[2].DC4_DataSummaryOutput.push(SummaryOutput);
    } else if (DataID === 3) {
      this.Storage[3].DD1_DataLog_TimeStart.push(TimeStart);
      this.Storage[3].DD2_DataLog_TimeFinish.push(TimeFinish);
      this.Storage[3].DD3_DataEntry.push(DataEntry);
      this.Storage[3].DD4_DataSummaryOutput.push(SummaryOutput);
    } else if (DataID === 4) {
      this.Storage[4].DE1_DataLog_TimeStart.push(TimeStart);
      this.Storage[4].DE2_DataLog_TimeFinish.push(TimeFinish);
      this.Storage[4].DE3_DataEntry.push(DataEntry);
      this.Storage[4].DE4_DataSummaryOutput.push(SummaryOutput);
    } else if (DataID === 5) {
      this.Storage[5].DF1_DataLog_TimeStart.push(TimeStart);
      this.Storage[5].DF2_DataLog_TimeFinish.push(TimeFinish);
      this.Storage[5].DF3_DataEntry.push(DataEntry);
      this.Storage[5].DF4_DataSummaryOutput.push(SummaryOutput);
    } else { console.log(Error) }
  }
}

// const labTest = new LabData(
//   "To test Lab Class",
//   "Lab Code functionability",
//   "11.01.21",
//   "11.01.21",
//   1532,
//   2100,
//   "Good",
//   "Good",
// );

// labTest.fxA1_addLabData(
//   1,
//   2100,
//   2106,
//   ["Hello", "My Name is Von"],
//   "1 string was added"
// );

// labTest.fxA0_printLabDataPreview(1);


module.exports = LabData;