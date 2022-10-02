import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skilli } from 'src/app/model/skilli';
import { SkilliService } from 'src/app/service/skilli.service';

@Component({
  selector: 'app-edit-skilli',
  templateUrl: './edit-skilli.component.html',
  styleUrls: ['./edit-skilli.component.css']
})
export class EditSkilliComponent implements OnInit {
  skilli : Skilli = null;

  constructor(private skilliS: SkilliService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skilliS.detail(id).subscribe( 
      data =>{ 
        this.skilli = data;
      },err =>{ 
        alert("Error al modificar skill");
        this.router.navigate(['']); 
      }
    )
  }

  onUpdate(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.skilliS.update(id, this.skilli).subscribe( 
      data => { 
        this.router.navigate(['']);
      },err =>{ 
        alert("Error al modificar skill");
        this.router.navigate(['']);
      })
  }
}
