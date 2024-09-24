import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';
import { Console } from 'console';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {


  //Objeto de formulario
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])

  });

  //Visibilidade dos botões
  btnCadastrar: boolean = true;

  //Vetor do Modelo Pessoa
  vetor: Pessoa[] = [];

  //Função de Cadastro
  cadastrar() {

    // Cadastro no vetor 
    this.vetor.push(this.formulario.value as Pessoa);

    // Limpeza dos inputs
    this.formulario.reset();

    // Visualização no Console

    //console.table(this.vetor);

  }

  //Armazenar valor no indice
  indice: number = -1;

  //Função Selecionar
  selecionar(indice:number){

    //Selecionar o indice da pessoa
    this.indice = indice;

    //Atribuir os dados da pessoa no formulario

    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade

    });
    //Visibilidade dos botões
  
    this.btnCadastrar = false;
  }

  alterar(){

    this.vetor[this.indice] = this.formulario.value as Pessoa;

    // Limpar os inputs
    this.formulario.reset();

    //Visibilidade dos botões
    this.btnCadastrar = true;
    
  }

}
