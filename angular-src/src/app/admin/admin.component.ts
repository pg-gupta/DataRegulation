import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../models/Document';
import { DocService } from '../services/doc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private newDoc: Document;
  docs: Document[];
  fileToUpload: File = null;

  constructor(private docServ: DocService, private router: Router) {
  }

  public getList() {
    this.docServ.getAll().subscribe(result => {
      this.docs=result;
  }, error => console.error(error));
}

  public onSubmit() {
  }

  handleFileInput(files: FileList) {
    let file = files.item(0);
    if (file!==null && /\.(tsv)$/i.test(file.name)) {
      const reader  = new FileReader();
      reader.onload=()=>{
        let jsonDocs = []
        let data = reader.result.toString();
        let lines = data.split('\n');
        let columnNames = lines[0].split('\t');
        let columnNames_keys = []
        for(let q = 0; q < columnNames.length; q++){
          let columnname = columnNames[q].toLowerCase().split(' ').join('_')
          columnNames_keys.push(columnname)
        }
        for(let i = 1; i<lines.length; i++) {
          let newDoc = {}
          let line = lines[i].split('\t')
          for(let j = 0; j<columnNames_keys.length; j++) {
            let currentColumn = line[j];
            if(columnNames_keys[j]==='authors' || columnNames_keys[j]==='keywords'){
              newDoc[columnNames_keys[j]] = currentColumn.split(",");
            } else {
              newDoc[columnNames_keys[j]] = currentColumn;
            }
            
          }
          jsonDocs.push(<Document>newDoc);
        }
        this.docs = jsonDocs;
      }
      reader.readAsText(file);
    } else {
      let info = "File not supported. Please upload a .tsv file";
      console.log(info);
    }
  }

  submitMultipleDocuments(){
    this.docServ.addMultiple(this.docs).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }

  ngOnInit(){
    // this.getList();
  }
}
