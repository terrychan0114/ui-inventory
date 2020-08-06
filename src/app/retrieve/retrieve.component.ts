import { Component, OnInit } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DataService } from '../services/data.service';
// import { Inventory } from '../classes/inventory';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss']
})
export class RetrieveComponent implements OnInit {
  selector = false;
  inventory_list: Object;
  input_data: string;
  part_parameter: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  part_number_click(){
    this.selector = true;
    console.log("Clicked on part number button");
  }
  lot_number_click(){
    this.selector = false;
    console.log("Clicked on lot number button");
  }

  search_part(value){
    this.part_parameter = 'part_number';
    this.data.getData('/part-number',this.part_parameter,value)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        console.log(this.inventory_list)
      }
    )
    console.log("Clicked on search part button");
  }
  search_lot(value){
    this.part_parameter = 'lot_number';
    this.data.getData('/lot-number',this.part_parameter,value)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        console.log(this.inventory_list)
      }
    )
    console.log("Clicked on search lot button");
  }
}
