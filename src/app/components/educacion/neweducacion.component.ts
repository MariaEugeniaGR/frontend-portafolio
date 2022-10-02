import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE : string;
  fechaI : string;
  fechaF : string;
  descripcionE : string;
  imagenE : string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void { 
    const educacion = new Educacion(this.nombreE, this.fechaI, this.fechaF, this.descripcionE, this.imagenE);
    this.educacionS.save(educacion).subscribe(
      data => { 
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      },err => { 
        alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }

}
