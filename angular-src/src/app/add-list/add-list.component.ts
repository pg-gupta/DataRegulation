import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';
import { Author } from '../models/Author';
import { AuthorService } from '../services/author.service';
import { Router,ActivatedRoute } from '@angular/router';

// @Pipe({
//   name: 'myfilter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: List[], filter: {[key: string]: any }): List[] {
//     if(items==null) return null;
//     return items.filter(item => {
//       let notMatchingField = Object.keys(filter)
//       .find(key => item[key] !== filter[key]);
//       return !notMatchingField;
//     });
//   }
// }

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  private newList: List;
  lists: List[];
  authors: Author[];
  peopleFilter: any;
  authorsSelected:string[]=[];
  query:string="";
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  constructor(private listServ: ListService,private authorService:AuthorService, private router: Router) {
  }

  ngOnInit() {
    this.getList();
    this.getAuthors();

  }

  public getList() {
    this.listServ.getAllLists().subscribe(result => {
      this.lists = result;
      //  this.peopleFilter = {title:'Stand Up for Learning' , doctype: 'Newspaper'};
      this.peopleFilter={};
    }, error => console.error(error));
  }

  public getAuthors(){
    this.authorService.getAll().subscribe(result=>{


      this.authors=result;
      console.log(this.authors);
    },error=>console.error(error));
  }
  toggleSelection(authorname){
    var index=this.authorsSelected.indexOf(authorname);
    if(index>-1){
      this.authorsSelected.splice(index,1);
    }
    else{
      this.authorsSelected.push(authorname);
    }

    this.createQuery();

    console.log(this.authorsSelected);

  }

  public createQuery(){
    if(this.authorsSelected!=[]){
      var querystr="{$or:[";
      this.authorsSelected.forEach(function (value) {
        //var str= new String("{name:'"+value+"'},");
        querystr= querystr+"{title:'"+value+"'},";
        //querystr+=value;
        //  console.log(value);
      });
      querystr=querystr.slice(0,-1);
      querystr=querystr+"]}";
      this.query=querystr;
      console.log(querystr);
    }
    else{
      this.query="";
    }
    this.fetchData();

  }

  public fetchData(){
    this.listServ.query(this.query).subscribe(response=>{
      this.lists=response;
    },error=>console.error(error))
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
