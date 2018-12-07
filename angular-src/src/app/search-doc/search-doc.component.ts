import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../models/Document';
import { DocService } from '../services/doc.service';
import { Author } from '../models/Author';
import { AuthorService } from '../services/author.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-doc',
  templateUrl: './search-doc.component.html',
  styleUrls: ['./search-doc.component.css']
})
export class SearchDocComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  private newDoc: Document;
  docs: Document[];
  authors: Author[];
  peopleFilter: any;
  authorsSelected:string[]=[];
  query:string="";
  @Output() addList: EventEmitter<Document> = new EventEmitter<Document>();
  constructor(private docServ: DocService,private authorService:AuthorService, private router: Router) {
  }

  public getList() {
    this.docServ.getAll().subscribe(result => {
      this.docs = result;
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


  public onSubmit() {
    console.log(this.newDoc.category);
    this.docServ.add(this.newDoc).subscribe(
      response=> {

        if(response.success== true)
        this.addList.emit(this.newDoc);
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
      this.docServ.query(queryObj).subscribe(response=>{
        this.docs=response;
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
