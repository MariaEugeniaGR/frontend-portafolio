import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
  banner: Banner = null;

  constructor(
    private sBanner: BannerService, 
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sBanner.detail(id).subscribe( 
      data => { 
        this.banner = data;
      },err =>{ 
        alert("Error al modificar");
        this.router.navigate(['']); 
      }
    )
  }
  onUpdate(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.sBanner.update(id, this.banner).subscribe( 
      data => { 
        this.router.navigate(['']);
      },err =>{ 
        alert("Error al modificar banner");
        this.router.navigate(['']);
      })
  }
}
