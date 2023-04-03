import { writable} from "svelte/store";

const measurements: MeasureItem[] = [{
    average: 5.5,
    min: 4.5,
    max: 6.5,
    name: "Dimension1",
    standardDeviation: 0.1,
    values: [5.6, 5.5, 5.7, 5.8, 5.9, 5.1, 5.3, 5.6],    
  },
  {
    average: 5.7,
    min: 4.3,
    max: 6.7,
    name: "Dimension2",
    standardDeviation: 0.12,
    values: [5.6, 5.4, 5.3, 5.9, 5.1, 5.1, 5.6, 5.6],
  },
  {
    average: 5.7,
    max: 6.7,
    min: 3.7,
    name: "DimensionSomethingElse",
    standardDeviation: 0.11,
    values: [5.6, 5.1, 5.9, 5.3, 5.4, 5.6, 5.6],
  },
  {
    average: 5.3,
    max: 6.3,
    min: 3.7,
    name: "DimensionLastThing",
    standardDeviation: 0.13,
    values: [5.1, 5.4, 5.1, 5.9, 5.1, 5.9],
  }
  ]


  export const dimensionList = writable(measurements)
  export const selectedItem = writable(undefined as MeasureItem|undefined)

export interface MeasureItem {
    values: number[],
    name: string,
    max: number,
    min: number,
    average: number,
    standardDeviation: number,
  }