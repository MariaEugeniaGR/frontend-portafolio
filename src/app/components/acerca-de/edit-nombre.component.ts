import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-nombre',
  templateUrl: './edit-nombre.component.html',
  styleUrls: ['./edit-nombre.component.css']
})
export class EditNombreComponent implements OnInit {
  persona: persona= null;

  constructor(
    private personaS: PersonaService, 
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe( 
      data => { 
        this.persona = data;
      },err =>{ 
        alert("Error al modificar");
        this.router.navigate(['']); 
      }
    )
  }

  onUpdate(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.update(id, this.persona).subscribe( 
      data => { 
        this.router.navigate(['']);
      },err =>{ 
        alert("Error al modificar nombre");
        this.router.navigate(['']);
      })
    }
}
