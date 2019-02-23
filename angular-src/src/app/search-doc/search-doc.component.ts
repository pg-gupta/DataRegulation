import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ViewEncapsulation, HostListener  } from '@angular/core';
import { Document } from '../models/Document';
import { DocService } from '../services/doc.service';
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
  peopleFilter: any;
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
  previousQuery=[];


  @ViewChild('AcademicBtn') AcademicBtn: ElementRef;
  @Output() addList: EventEmitter<Document> = new EventEmitter<Document>();
  constructor(private docServ: DocService,private router: Router) {
    this.docs=[];
  }

  @HostListener("window:beforeunload",["$event"])
  clearLocalStorage(event){
    localStorage.clear();
  }

  public getList() {
    this.docServ.getAll().subscribe(result => {
      this.docs = result.sort((a: any, b: any) =>
      new Date(b.version_date).getTime() - new Date(a.version_date).getTime()
    );
    this.peopleFilter={};
  }, error => console.error(error));
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

  if(localStorage.getItem("previousQuery")!=null){
    this.previousQuery= JSON.parse(localStorage.getItem("previousQuery"));
    this.previousQuery.forEach(item=>{
      if(item.$or){
        item.$or.forEach(or=>{
          if(item.$or[0].hasOwnProperty(Object.keys(or)[0]))
          {
            var key =Object.keys(or)[0]
            var value= item.$or[0][key];

            if(key=='research_scope'){
              if(value=='News'){
                this.isNewsArticlePressed=true;
              }
              else if(value=='Academic'){
                this.isAcademicPressed=true;
                this.isAcademicChecked=true;
              }
              else{
                this.isReportsPressed=true;
              }
              this.selectedResearchScope.push({'research_scope':value});
            }
            else if(key=='is_emphasized'){
              this.isMajorDevPressed=true;
              this.isImportant.push({'is_emphasized':true});
            }
            else if(key=='type_of_article'){
              this.selectedTypeOfDoc.push(value);
            }
          }
        });
      }
      else if(item.$text){
         this.searchText=item.$text.$search;
      }
    });
    console.log("previousQuery: "+ JSON.stringify(this.previousQuery));
    this.fetchData(this.previousQuery);
  }
  else{
    let el: HTMLElement = this.AcademicBtn.nativeElement as HTMLElement;
    el.click();
  }
  // let el: HTMLElement = this.AcademicBtn.nativeElement as HTMLElement;
  // el.click();
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
  var selectedType= this.selectedTypeOfDoc.map(function(obj){
    return {'type_of_article':obj.name};
  });
  var selectedResearchScopeItem= this.selectedResearchScope;
  var isEmphasized=this.isImportant;
  this.query=[];

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
  // setting localstorage with previous query
  localStorage.setItem("previousQuery",JSON.stringify(this.query));
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
