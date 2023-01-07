import { Component, OnInit } from '@angular/core';
import { Actualite } from '../actualite';
import { ActualiteService } from '../actualite.service';

@Component({
  selector: 'app-actu-consulte',
  templateUrl: './actu-consulte.component.html',
  styleUrls: ['./actu-consulte.component.css']
})
export class ActuConsulteComponent implements OnInit {
  actualites: Actualite[] = [];

    constructor(private actualiteService: ActualiteService) {
        this.actualiteService.getActualite().subscribe(data => this.actualites=data);
    }

  ngOnInit(): void {
  }

}
