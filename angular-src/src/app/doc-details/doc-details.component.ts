import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Document } from '../models/Document';
import { DocService } from '../services/doc.service';

@Component({
  selector: 'app-doc-details',
  templateUrl: './doc-details.component.html',
  styleUrls: ['./doc-details.component.css']
})
export class DocDetailsComponent {

  private id;
  private sub: any;
  private item: Document;
  constructor(private route: ActivatedRoute,private docServ: DocService) { }

  private ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id; // (+) converts string 'id' to a number

      this.docServ.get(this.id).subscribe(result => {
        this.item = result;
      }, error => console.error(error));
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
