import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Inventory } from '../classes/inventory';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss']
})

export class RetrieveComponent implements OnInit {
  selector = false;
  sort_flag: boolean = true;
  // part_parameter: string;
  sorting: string='location';
  lot_number: string;
  part_number: string;
  displayedColumns: string[]=['location','lot_number','part_number','quantity','description','last_updated','remarks'];
  inventory_list: Inventory[];

  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginitor: MatPaginator;
  
  constructor(private data: DataService) { }

  // home_route: any = 'http://10.10.4.61:8081/inventory';
  home_route: any = 'http://10.10.4.61:4201/inventory';
  ngOnInit(): void {
    this.search_all();
  }
  sort(value){
    this.sorting=value;
    if (this.sort_flag == true) {
      this.search_all();
    }else{
      if (this.selector == true){
      this.search_part(this.part_number)
      }else{
        this.search_lot(this.lot_number)
      }
    }
  }
  part_number_click(){
    this.selector = true;
    this.sort_flag = false;
    // console.log("Clicked on part number button");
  }
  lot_number_click(){
    this.selector = false;
    this.sort_flag = false;
    // console.log("Clicked on lot number button");
  }

  search_part(value){
    var param = {
      'sorting':this.sorting,
      'part_number': value
    };
    this.part_number = value;
    // this.part_parameter = 'part_number';
    console.log("Calling getData")
    this.data.getData(this.home_route,'/part-number',param)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        console.log(this.inventory_list)
      }
    )
  }

  search_lot(value){
    var param = {
      'sorting':this.sorting,
      'lot_number': value
    };
    this.lot_number = value;
    this.data.getData(this.home_route,'/lot-number',param)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        console.log(this.inventory_list)
      }
    )
    console.log("Clicked on search lot button");
  }

  search_all(){
    this.sort_flag = true;
    var param = {
      'sorting':this.sorting,
    };
    this.data.getAllData(this.home_route,param)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        console.log(this.inventory_list)
      }
    )
    console.log("Clicked on search lot button");
  }
}