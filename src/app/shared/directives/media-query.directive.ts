import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject, debounceTime, fromEvent, takeUntil } from 'rxjs';

export enum MEDIA_QUERIES {
  mobile = '(max-width: 599.98px)',
  desktop = '(min-width: 1280px) and (max-width: 1919.98px)',
}

@Directive({
  selector: '[edMediaQuery]',
  standalone: true,
})
export class MediaQueryDirective implements OnInit, OnDestroy {
  @Input({ required: true }) edMediaQuery!: MEDIA_QUERIES;
  private _mediaQueryList?: MediaQueryList;
  private _isCreated: boolean = false;
  private readonly unsubscribe$ = new Subject<void>();

  constructor(
    private readonly _viewContainerRef: ViewContainerRef,
    private readonly _templateRef: TemplateRef<HTMLElement>,
  ) {}

  ngOnInit(): void {
    this._mediaQueryList = matchMedia(this.edMediaQuery);
    fromEvent<MediaQueryListEvent>(this._mediaQueryList, 'change')
      .pipe(takeUntil(this.unsubscribe$), debounceTime(100))
      .subscribe(({ matches }) => {
        this.update(matches);
      });
    this.update(this._mediaQueryList.matches);
  }

  update(matches: boolean) {
    if (this._isCreated) {
      this._viewContainerRef.clear();
    }
    if (!matches) {
      return;
    }
    const ref = this._viewContainerRef.createEmbeddedView(this._templateRef);
    ref.markForCheck();
    this._isCreated = true;
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
