import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  todo: Todo = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false
  }
  constructor(
    private router: Router,
    private service: TodoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.todo.id = this.activatedRoute.snapshot.paramMap.get("id")!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  findById(): void {
    this.service.findById(this.todo.id).subscribe((resposta) => {
      this.todo = resposta;
    })
  }

  update(): void {
    this.service.update(this.todo).subscribe((resposta) => {
      this.service.message('Informações atualizadas com sucessso');
      this.router.navigate(['']);
    }, erro => {
      this.service.message('Erro ao atualizar as informações');
      this.router.navigate(['']);
    })
  }

  formataData(): void {
    let data = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }
}
