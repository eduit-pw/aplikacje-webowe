import { Component } from '@angular/core';
enum Status { Nowe='nowe', Gotowe='gotowe' }
@Component({selector:'app-root', standalone:true, styles:[`.gotowe{color:green}`], template:`
<button (click)="status=Status.Gotowe">Zakończ</button>
<p [class.gotowe]="status === Status.Nowe">
@switch (status) {
  @case (Status.Nowe) { Nowe }
  @case ('Status.Gotowe') { Gotowe }
}
</p><div style="background:blue;height:10px" [style.width.px]="postep"></div>
`})
export class App {
  readonly Status = Status;
  status = Status.Nowe;
  postep = 30;
}
