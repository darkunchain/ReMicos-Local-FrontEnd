import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  CounterService:number;

  private counterSubject = new Subject<number>();
  counterObservable = this.counterSubject.asObservable();

  counter(counter: number) {
    this.CounterService = counter;
    this.counterSubject.next(counter)
  }

}
