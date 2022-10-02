import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreP : string;
  descripcionP : string;
  imagenP : string;
  
  constructor(private sProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void { 
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.imagenP);
    this.sProyecto.save(proyecto).subscribe(
      data => { 
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      },err => { 
        alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }
}
