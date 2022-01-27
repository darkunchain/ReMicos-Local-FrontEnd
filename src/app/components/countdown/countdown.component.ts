import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { BlinkService } from 'src/app/services/blink.service';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  providers: [],
})
export class CountdownComponent implements OnInit, OnDestroy {

  countDown: Subscription;
  @Input() counter: number;
  tick = 1000;
  blinkStyle: number;
  @Input() idTimer: number

  constructor(
    private blinkService: BlinkService) {}


  ngOnInit() {
    this.countDown = timer(0,this.tick)
    .pipe(takeWhile(x => this.counter > 0)).subscribe(() => {
      --this.counter
      if(this.counter==0) {
        this.blinkStyle = this.idTimer;
        this.blinkService.setBlink(this.blinkStyle)
      }
    });
  }




  ngOnDestroy() {
    if (this.countDown) this.countDown.unsubscribe();

  }

}


@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}


