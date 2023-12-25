import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Direction, VisionEvent } from './types';

@Directive({
  selector: '[appVision]'
})
export class VisionDirective implements OnInit, OnDestroy {
  @Input() threshold: string = "0";
  @Input() observeOnce: boolean = false

  @Output() changeVision: EventEmitter<VisionEvent> = new EventEmitter<VisionEvent>();
  @Output() enterVision: EventEmitter<VisionEvent> = new EventEmitter<VisionEvent>();
  @Output() exitVision: EventEmitter<VisionEvent> = new EventEmitter<VisionEvent>();

  private observer: IntersectionObserver;
  private lastScrollTop: number = 0;
  private lastScrollLeft: number = 0;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const intersectionCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(
        (entry: IntersectionObserverEntry) => {
          const emitEvent = {
            element: this.el,
            visible: entry.isIntersecting,
            scrollDirection: this.scrollDirection(entry)
          }
          this.changeVision.emit(emitEvent);
          if (entry.isIntersecting) {
            this.enterVision.emit(emitEvent);
            this.observeOnce && observer.unobserve(this.el.nativeElement);
          } else {
            this.exitVision.emit(emitEvent)
          }
        }
      )
    }
    this.observer = new IntersectionObserver(intersectionCallback, this.options())
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.unobserve(this.el.nativeElement);
  }

  private options(): IntersectionObserverInit {
    const threshold = this.threshold.split(',').map(t => parseFloat(t) / 100);
    return {
      root: null,
      threshold,
      rootMargin: '0px'
    }
  }

  private scrollDirection(entry: IntersectionObserverEntry): Direction {
    const scrollTop = entry.boundingClientRect.y;
    const scrollLeft = entry.boundingClientRect.x

    const horizontalScrollDirection = scrollLeft > this.lastScrollLeft ? 'right' : 'left';
    const verticalScrollDirection = scrollTop > this.lastScrollTop ? 'up' : 'down';

    this.lastScrollTop = scrollTop;
    this.lastScrollLeft = scrollLeft;

    return {
      x: horizontalScrollDirection,
      y: verticalScrollDirection
    }
  }
}
