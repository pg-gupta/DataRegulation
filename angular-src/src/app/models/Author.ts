// export interface Author {
//   _id?: string;
//   name: string;
//   isSelected:boolean;
//   age: string;
// }

export class Author {
  _id?: string;
  name: string;
  isSelected:boolean;
  age: string;

  constructor(){
    this.isSelected=false;
  }
}
