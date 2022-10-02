import { Component, OnInit } from '@angular/core';
import { Skilli } from 'src/app/model/skilli';
import { SkilliService } from 'src/app/service/skilli.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys1',
  templateUrl: './hys1.component.html',
  styleUrls: ['./hys1.component.css']
})
export class Hys1Component implements OnInit {
  skilli: Skilli[] = []; 

  constructor(private skilliS: SkilliService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkilli();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkilli(): void{
    this.skilliS.lista().subscribe(
      data => {
        this.skilli = data;
      })
  }

  delete(id?: number){
    if(id != undefined){
      this.skilliS.delete(id).subscribe(data => {this.cargarSkilli();
      },err =>{
        alert("No se pudo borrar la skill");
      }
      )
    }
  }
}
