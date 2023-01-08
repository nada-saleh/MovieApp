import { Component, OnInit, ViewChild } from '@angular/core';
import { IforTest } from '../ServiceForTest/serviceForTest';


@Component({
  selector: 'forTest-app',
  templateUrl: './forTest.component.html',
})
export class ForTestComponent implements OnInit {




  ngOnInit(): void {
    if(this.selectedCatId==0){
      this.allCatListFilter=this.allNestList
    }else{
      this.filterProductById()
    }

  }

  constructor() {}


allCatListFilter:IforTest[]=[];
allCatList: IforTest[] = [{id: 1,name: 'flowers',},{id: 2,name: 'cars',},{id: 3,name: 'books',}];
selectedCatId:number=0
 allNestList=[
{
  id:1,
name:'Child1'
},
{
  id:1,
  name:'Child2'
},
{
  id:1,
  name:'Child3'
},

{
  id:1,
  name:'Child1'
  },
  {
    id:2,
    name:'Child2'
  },
  {
    id:2,
    name:'Child3'
  },


]
filterProductById(){
  this.allCatListFilter=this.allNestList
  .filter(item=>item.id==this.selectedCatId);
  console.log(this.allCatListFilter)
}


}
