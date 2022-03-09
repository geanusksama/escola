import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Francisco';

  dadosBanco = {
    email:"teste@teste.com",
    endereco:"la mesmo ",
  }

  age = '43';
  title = 'escola';
}
