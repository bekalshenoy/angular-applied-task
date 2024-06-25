import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'learn';
  subscription: Subscription | undefined;

  ngOnInit(): void {
    const randomNumbers$ = interval(2000).pipe(
      map(() => this.getRandomNumber(1, 100)),
      filter((randomNumber) => randomNumber % 2 === 0)
    );

    this.subscription = randomNumbers$.subscribe((randomNumber) => {
      console.log('Random number:', randomNumber);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
