import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aluno-component',
  templateUrl: './aluno-component.component.html',
  styleUrls: ['./aluno-component.component.scss']
})
export class AlunoComponentComponent implements OnInit {
  @Input() idade = '';
  nome = 'Francisco Lima';
  age = 43;

  produtos = ['CAfé','Sal','Mel','Leite']

  pedido = {
    'id':100,
    'cliente':'Francisco',
    'valor':250.00,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
