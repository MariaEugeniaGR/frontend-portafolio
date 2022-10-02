import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skilli } from 'src/app/model/skilli';
import { SkilliService } from 'src/app/service/skilli.service';

@Component({
  selector: 'app-new-skilli',
  templateUrl: './new-skilli.component.html',
  styleUrls: ['./new-skilli.component.css']
})
export class NewSkilliComponent implements OnInit {
  nombre : string;
  porcentaje : number;
  imagen : string;

  constructor(private skilliS: SkilliService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void { 
    const skill = new Skilli(this.nombre, this.porcentaje, this.imagen);
    this.skilliS.save(skill).subscribe(
      data => { 
        alert("Skill añadida");
        this.router.navigate(['']);
      },err => { 
        alert("Fallo");
      this.router.navigate(['']);
    })
  }
}
