import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log(' sub');
});

console.log('before sub');
observable$.subscribe();
console.log('after sub');
