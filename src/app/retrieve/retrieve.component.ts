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
  
  input_data: string;
  part_parameter: string;

  
  displayedColumns: string[]=['location','lot_number','part_number','quantity','description','last_updated','remarks'];
  inventory_list: Inventory[];

  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginitor: MatPaginator;
  
  constructor(private data: DataService) { }

  home_route: any = 'http://10.10.4.76:8081/inventory';
  // home_route: any = 'http://10.10.4.61:8083/inventory';
  ngOnInit(): void {
    this.search_all();
  }

  part_number_click(){
    this.selector = true;
    // console.log("Clicked on part number button");
  }
  lot_number_click(){
    this.selector = false;
    // console.log("Clicked on lot number button");
  }

  search_part(value){
    this.part_parameter = 'part_number';
    console.log("Calling getData")
    this.data.getData(this.home_route,'/part-number',this.part_parameter,value)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        console.log(this.inventory_list)
      }
    )
  }

  search_lot(value){
    this.part_parameter = 'lot_number';
    this.data.getData(this.home_route,'/lot-number',this.part_parameter,value)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        console.log(this.inventory_list)
      }
    )
    console.log("Clicked on search lot button");
  }

  search_all(){
    this.data.getAllData(this.home_route)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        console.log(this.inventory_list)
      }
    )
    console.log("Clicked on search lot button");
  }
}

// export interface Inventory {
//   loction: string;
//   lot_number: string;
//   part_number: string;
//   quantity: string;
//   description: string;
//   status: string;
//   lead_time: string;
//   last_updated: string;
//   remarks: string;
//   data_added: string;
//   outside_process: string;
// } 