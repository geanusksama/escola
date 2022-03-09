import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {
  @Input() nome! : String ;
  @Input() dadosInput! : {
      email:string,
      endereco:string
  }

  constructor() { }

  ngOnInit(): void {
  }

}
