import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Inventory } from '../classes/inventory';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss']
})

export class RetrieveComponent implements OnInit {
  selector = false;
  inventory_list: Inventory[];
  input_data: string;
  part_parameter: string;
  constructor(private data: DataService) { }
  home_route: any = 'http://10.10.4.76:8081/inventory';
  // home_route: any = 'http://10.10.4.61:4201/inventory';
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
