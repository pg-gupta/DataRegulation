import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from '../models/List';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-doc-details',
  templateUrl: './doc-details.component.html',
  styleUrls: ['./doc-details.component.css']
})
export class DocDetailsComponent {

  private id;
  private sub: any;
  private item: List;
  //private listServ;
  constructor(private route: ActivatedRoute,private listServ: ListService) { }

  private ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id; // (+) converts string 'id' to a number

      this.listServ.get(this.id).subscribe(result => {
        this.item = result;
      }, error => console.error(error));
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
