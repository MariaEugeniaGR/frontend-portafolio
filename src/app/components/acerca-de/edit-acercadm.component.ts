import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acercadm } from 'src/app/model/acercadm';
import { AcercadmService } from 'src/app/service/acercadm.service';

@Component({
  selector: 'app-edit-acercadm',
  templateUrl: './edit-acercadm.component.html',
  styleUrls: ['./edit-acercadm.component.css']
})
export class EditAcercadmComponent implements OnInit {
  acercadm: Acercadm = null;

  constructor(
    private acercadmS: AcercadmService, 
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.acercadmS.detail(id).subscribe( 
      data => { 
        this.acercadm = data;
      },err =>{ 
        alert("Error al modificar");
        this.router.navigate(['']); 
      }
    )
  }

  onUpdate(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.acercadmS.update(id, this.acercadm).subscribe( 
      data => { 
        this.router.navigate(['']);
      },err =>{ 
        alert("Error al modificar acerca de mi");
        this.router.navigate(['']);
      })
    }
}
