import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlinkService {

  public varBlinkService: number;
  private blinkId:number
  private blinkId$: Subject<number>

  constructor(){
    this.blinkId = 0
    this.blinkId$ = new Subject()
  }

  setBlink(blinkIDFromCountdown:number){
    this.blinkId$.next(blinkIDFromCountdown)
  }
  getBlinkId$():Observable<number>{
    return this.blinkId$.asObservable()
  }


}
