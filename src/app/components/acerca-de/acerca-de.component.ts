import { Component, OnInit } from '@angular/core';
import { Acercadm } from 'src/app/model/acercadm';
import { persona } from 'src/app/model/persona.model';
import { AcercadmService } from 'src/app/service/acercadm.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 persona: persona[] = [];
 acercadm: Acercadm[] = [];

  constructor(public personaS: PersonaService, private acercadmS: AcercadmService, private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarAcercadm();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAcercadm(): void{
    this.acercadmS.lista().subscribe(
      data => {
        this.acercadm = data;
      }
    )
  }

  cargarPersona(): void{
    this.personaS.lista().subscribe(
      data => {
        this.persona = data;
      }
    )
  }
  delete(id?: number){
    if(id != undefined){
      this.acercadmS.delete(id).subscribe(data => {
        this.cargarAcercadm();
      },err =>{
        alert("No se pudo eliminar");
      }
      )
    }
    if(id != undefined){
      this.personaS.delete(id).subscribe(data => {
        this.cargarPersona();
      },err =>{
        alert("No se pudo eliminar");
      }
      )
    }
  }
  }
