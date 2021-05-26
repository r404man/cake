import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cake } from 'src/app/interfaces/cake';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-cake-detail-page',
  templateUrl: './cake-detail-page.component.html',
  styleUrls: ['./cake-detail-page.component.scss']
})
export class CakeDetailPageComponent implements OnInit {
  cakeInfo: Cake = null;
  cakeThumbUrl: string = null;
  cakeCmp: string[] = null;
  cakeId:string = null;
  constructor(private cakeService: CakeService, private route: ActivatedRoute) { }

  getCakeInfo() {
    let id = this.route.snapshot.paramMap.get('cakeId');
    this.cakeService.getCake(id).subscribe(
      data => {
        this.cakeInfo = data.data() as Cake;
        if (this.cakeInfo != null) {
          this.getThumb();
        }
      }
    )
  }

  getCakeCmp() {
    this.cakeCmp = this.cakeInfo.sostav.split(';');
  }

  getThumb() {
    let id = this.cakeInfo.id;
    this.cakeService.getCakeImg(id).subscribe(
      data => {
        this.cakeThumbUrl = data;
        if (this.cakeThumbUrl != null) {
          this.getCakeCmp();
        }
      }
    );
  }

  ngOnInit(): void {
    this.getCakeInfo();
    this.cakeId = this.route.snapshot.paramMap.get('cakeId');
  }

}
