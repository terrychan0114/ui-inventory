import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Inventory } from '../classes/inventory';
import { PostInventory } from '../classes/post_inventory';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-new-data',
  templateUrl: './new-data.component.html',
  styleUrls: ['./new-data.component.scss']
})
export class NewDataComponent implements OnInit {
  inventory_list: Inventory[];
  return_status: number;
  part_parameter: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }
  home_route: any = 'http://10.10.4.76:8081/inventory';
  // home_route: any = 'http://10.10.4.61:4201/inventory';
  add_inventory(lot_number,part_number,quantity,location,description,outside_process,status,lead_time,remarks){
    var opost = new PostInventory();
    opost.lot_number = lot_number;
    opost.part_number = part_number;
    opost.quantity = parseInt(quantity);
    opost.location = location;
    opost.description = description;
    opost.outside_process = outside_process;
    opost.status = status;
    opost.lead_time = lead_time;
    opost.remarks = remarks;
    this.data.postData(this.home_route,'',opost)
      .subscribe(data=> 
        {
          this.return_status = data;
          console.log(this.return_status)
        }
      );
    // this.search_part(part_number);
  }
  search_part(value){
    this.part_parameter = 'part_number';
    console.log("Calling getData")
    this.data.getData(this.home_route,'/part-number',this.part_parameter,value)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        // console.log(this.inventory_list)
      }
    )
  }
  verify_pn(value){
    this.part_parameter = 'part_number';
    this.data.getData(this.home_route,'/part-number',this.part_parameter,value)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        console.log(this.inventory_list)
      }
    )
  }
  verify_ln(value){
    this.part_parameter = 'lot_number';
    this.data.getData(this.home_route,'/lot-number',this.part_parameter,value)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        console.log(this.inventory_list)
      }
    )
  }
}