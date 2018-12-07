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
  selector: 'app-search-doc',
  templateUrl: './search-doc.component.html',
  styleUrls: ['./search-doc.component.css']
})
export class SearchDocComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  /////////
  private newList: List;
  lists: List[];
  authors: Author[];
  peopleFilter: any;
  authorsSelected:string[]=[];
  query:string="";
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  constructor(private listServ: ListService,private authorService:AuthorService, private router: Router) {
  }

  // ngOnInit() {
  //   this.getList();
  //   this.getAuthors();
  //
  // }

  public getList() {
    this.listServ.getAllLists().subscribe(result => {
      this.lists = result;
      //  this.peopleFilter = {title:'Stand Up for Learning' , doctype: 'Newspaper'};
      this.peopleFilter={};
    }, error => console.error(error));
  }

  public getAuthors(callback){
    this.authorService.getAll().subscribe(result=>{
      this.authors=result;
      console.log(this.authors);
      callback(this.authors);
    },error=>{
      console.error(error);
      callback(false);
    });
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

  // public createQuery(){
  //   var queryObj=[];
  //   if(this.authorsSelected!=[]){
  //     this.authorsSelected.forEach(function (value) {
  //       queryObj.push({title:value});
  //     });
  //   }
  //   else{
  //
  //   }
  //   this.fetchData(queryObj);
  // }



  // public fetchData(){
  //   this.listServ.query(this.query).subscribe(response=>{
  //     this.lists=response;
  //   },error=>console.error(error))
  // }

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
  ngOnInit(){

    this.getList();
    this.authorService.getAll().subscribe(result=>{
      this.authors=result;
      this.dropdownList=this.authors;
      this.selectedItems = [
        // {"id":2,"itemName":"Singapore"},
        // {"id":3,"itemName":"Australia"},
        // {"id":4,"itemName":"Canada"},
        // {"id":5,"itemName":"South Korea"}
      ];
      this.dropdownSettings = {
        singleSelection: false,
        text:"Select Author",
        showCheckbox: true,
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true,
        classes:"myclass custom-class",
        labelKey:'name',
        primaryKey: '_id',
      };
    },error=>{
      console.error(error);
    });
  }
  public createQuery(){
    var selected= this.selectedItems.map(function(obj){
      return {'title':obj.name};
    })
    console.log("selected items: "+ selected);
    this.fetchData(selected);
  }

  public fetchData(queryObj){
    if(queryObj.length!=0){
      this.listServ.query(queryObj).subscribe(response=>{
        this.lists=response;
      },error=>console.error(error))
    }
    else{
      this.getList();
    }
  }
  onItemSelect(item:any){
    // console.log(item);
    // console.log(this.selectedItems);
    this.createQuery();
  }
  OnItemDeSelect(item:any){
    // console.log(item);
    // console.log(this.selectedItems);
    this.createQuery();

  }
  onSelectAll(items: any){
    //console.log(items);
    this.createQuery();
  }
  onDeSelectAll(items: any){
    //console.log(items);
    this.createQuery();
  }


}
