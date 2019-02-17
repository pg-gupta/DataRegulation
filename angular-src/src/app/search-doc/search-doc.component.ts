import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ViewEncapsulation  } from '@angular/core';
import { Document } from '../models/Document';
import { DocService } from '../services/doc.service';
import { Author } from '../models/Author';
import { AuthorService } from '../services/author.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-doc',
  templateUrl: './search-doc.component.html',
  styleUrls: ['./search-doc.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchDocComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownListTypeOfDoc = [];
  selectedTypeOfDoc = [];
  dropdownSettingsTypeOfDoc = {};
  dropdownListResearchScope = [];
  selectedResearchScope = [];
  isImportant=[];
  dropdownSettingsResearchScope = {};
  private newDoc: Document;
  docs: Document[];
  authors: Author[];
  peopleFilter: any;
  authorsSelected:string[]=[];
  query=[];
  isAcademicChecked=false;
  isAcademicPressed=false;
  isNewsArticlePressed=false;
  isReportsPressed=false;
  isMajorDevPressed=false;
  totalDisplayed=2;
  no_pages=0;
  searchText="";
  hasMoreData=true;

  @ViewChild('AcademicBtn') AcademicBtn: ElementRef;
  @Output() addList: EventEmitter<Document> = new EventEmitter<Document>();
  constructor(private docServ: DocService,private authorService:AuthorService, private router: Router) {
    this.docs=[];
  }

  public getList() {
    this.docServ.getAll().subscribe(result => {
      this.docs = result.sort((a: any, b: any) =>
      new Date(b.version_date).getTime() - new Date(a.version_date).getTime()
    );
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

  let el: HTMLElement = this.AcademicBtn.nativeElement as HTMLElement;
  el.click();

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
      classes:"",
      labelKey:'name',
      primaryKey: '_id',
    };
  },error=>{
    console.error(error);
  });

  this.bindType();
}

public bindType(){
  this.dropdownListTypeOfDoc=[
    {"id":1,"name":"Empirical"},
    {"id":2,"name":"Theoretical"}
  ]
  this.selectedTypeOfDoc = [
  ];
  this.dropdownSettingsTypeOfDoc = {
    singleSelection: false,
    text:"Select Type",
    showCheckbox: true,
    selectAllText:'Select All',
    unSelectAllText:'UnSelect All',
    enableSearchFilter: true,
    classes:"myclass custom-class",
    labelKey:'name',
    primaryKey: 'id',
  };
}

public showAcademicResearchDocs(isAcademicChecked,isNewsChecked,isReportChecked){
  this.selectedResearchScope=[];
  this.resetPage();
  if(isAcademicChecked){
    this.selectedResearchScope.push({'research_scope':'Academic'});
    this.isAcademicChecked=true;
    this.isAcademicPressed=true;
    this.isNewsArticlePressed=false;
    this.isReportsPressed=false;
  }
  else if(isNewsChecked){
    this.selectedResearchScope.push({'research_scope':'News'});
    this.isNewsArticlePressed=true;
    this.isAcademicPressed=false;
    this.isReportsPressed=false;


  }
  else
  if(isReportChecked){
    this.selectedResearchScope.push({'research_scope':'Report'});
    this.isNewsArticlePressed=false;
    this.isAcademicPressed=false;
    this.isReportsPressed=true;
  }

  if(isAcademicChecked==undefined || isAcademicChecked==false){
    this.isAcademicChecked=false;
    this.selectedTypeOfDoc=[];
  }

  this.createQuery();
}

public getMajor(istrue){
  this.isImportant=[];
  if(istrue){
    this.isImportant.push({'is_emphasized':true});
  }
  this.createQuery();
};

public showMajorDevDocs(istrue){
  this.isImportant=[];
  this.resetPage();

  if(!istrue){
    this.isImportant.push({'is_emphasized':true});
    this.isMajorDevPressed=true;
  }
  else{
    this.isMajorDevPressed=false;
  }
  this.createQuery();
};

public searchDoc(){
  this.resetPage();
  this.createQuery();
}

public createQuery(){
  this.hasMoreData=true;
  var selectedAuthors= this.selectedItems.map(function(obj){
    return {'authors':obj.name};
  });

  var selectedType= this.selectedTypeOfDoc.map(function(obj){
    return {'type_of_article':obj.name};
  });

  var selectedResearchScopeItem= this.selectedResearchScope;
  var isEmphasized=this.isImportant;
  this.query=[];
  if(selectedAuthors.length!=0){
    this.query.push({$or:selectedAuthors});
  }
  if(selectedType.length!=0){
    this.query.push({$or:selectedType});
  }

  if(selectedResearchScopeItem.length!=0){
    this.query.push({$or:selectedResearchScopeItem});
  }
  if(this.searchText.length!=0){
    this.query.push({$text:{$search:this.searchText}});
  }


  if(isEmphasized.length!=0){
    this.query.push({$or:isEmphasized});
  }

  console.log("selected items: "+ JSON.stringify(selectedAuthors)+ " ** "+ JSON.stringify(selectedType)+"***"+ JSON.stringify(this.query));
  this.fetchData(this.query);
}

public fetchData(queryObj){
  if(queryObj.length!=0){
    this.docServ.query(queryObj,this.no_pages).subscribe(response=>{
      if(response.length<10){
        this.hasMoreData=false;
      }
      this.docs.push(...response);
    },error=>console.error(error))
  }
  else{
    this.getList();
  }
}

public loadMore(){
  this.no_pages+=1;
  this.fetchData(this.query);
}

onItemSelect(item:any){
  this.resetPage();
  this.createQuery();
}
OnItemDeSelect(item:any){
  this.resetPage();
  this.createQuery();

}
onSelectAll(items: any){
  this.resetPage();
  this.createQuery();
}
onDeSelectAll(items: any){
  this.resetPage();
  this.createQuery();
}
public resetPage(){
  this.no_pages=0;
  this.docs=[];
}
}
