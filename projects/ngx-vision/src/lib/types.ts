import { ElementRef } from "@angular/core"

export type Direction = {
  x: string;
  y: string;
}

export type VisionEvent = {
  element: ElementRef,
  visible: boolean,
  scrollDirection: Direction
}
