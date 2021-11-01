class Industrial_Park {
  constructor(

    author: string,
    dateMade: string,
    timeMade: string,
    spaceSize: number,
    zones: number,
    facilities: number,

  ) {
    this.author = author;
    this.dateMade = dateMade;
    this.timeMade = timeMade;
    this.spaceSize = spaceSize;
    this.zones = zones;
    this.facilities = facilities;

    this.industrialSpace = [];
  }

  fxA0_printIndustrialSpace = () => console.log(industrialSpace);

  fxA1_addData = (key, data = Object) => {
    this.industrialSpace.push(data);
  }
}