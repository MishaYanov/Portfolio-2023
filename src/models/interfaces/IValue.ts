export interface IValue {
    screenPosition: { m: [number, number, number]; d: [number, number, number] } | [number, number, number];
    screenScale: { m: [number, number, number]; d: [number, number, number] } | [number, number, number];
    screenRotation: { m: [number, number, number]; d: [number, number, number] } | [number, number, number];
  }