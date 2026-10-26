import { Component } from '@angular/core';
@Component({selector:'app-root',standalone:true,template:`
@for (r of rekordy; track r.id) { <p>{{ r.nazwa }}</p> }`})
export class App { rekordy=[{id:1,nazwa:'A'},{id:1,nazwa:'B'}]; }
