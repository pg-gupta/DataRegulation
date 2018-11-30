import { Component, OnInit, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';
import { Router,ActivatedRoute } from '@angular/router';

@Pipe({
    name: 'myfilter'
})
export class FilterPipe implements PipeTransform {
    transform(items: List[], filter: {[key: string]: any }): List[] {
      if(items==null) return null;
        return items.filter(item => {
                let notMatchingField = Object.keys(filter)
                                             .find(key => item[key] !== filter[key]);
                return !notMatchingField;
            });
    }
}

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  private newList: List;
  lists: List[];
  peopleFilter: any;
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  constructor(private listServ: ListService, private router: Router) {
  }

  ngOnInit() {
    this.getList();

  }

  public getList() {
    this.listServ.getAllLists().subscribe(result => {
      this.lists = result;
    //  this.peopleFilter = {title:'Stand Up for Learning' , doctype: 'Newspaper'};
      this.peopleFilter={};
    }, error => console.error(error));
  }

  public onSubmit() {
  	console.log(this.newList.category);
  	this.listServ.addList(this.newList).subscribe(
  		response=> {

  			if(response.success== true)
  				this.addList.emit(this.newList);
  		},
	);

  }

  onClick() {
    this.router.navigate(['app-doc-details', '456']);
  }
}
