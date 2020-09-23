import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Inventory } from '../classes/inventory';
import { PostInventory } from '../classes/post_inventory';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  inventory_list: Inventory[];
  return_status: number;
  part_parameter: string;
  constructor(private data: DataService) { }
  home_route: any = 'http://10.10.4.61:8081/inventory';
  // home_route: any = 'http://10.10.4.61:8083/inventory';
  ngOnInit(): void {
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
  search_lot(value){
    this.part_parameter = 'lot_number';
    this.data.getData(this.home_route,'/lot-number',this.part_parameter,value)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        // console.log("Original data return")
        // console.log(this.inventory_list)
      }
    )
    // console.log("Clicked on search lot button");
  }
  update_inventory(lot_number,part_number,quantity,location,description,outside_process,status,lead_time,remarks){
    var opost = new PostInventory();
    var newpost: any;
    this.search_lot(lot_number);
    opost.lot_number = lot_number;
    opost.part_number = part_number;
    opost.quantity = parseInt(quantity);
    opost.location = location;
    opost.description = description;
    opost.outside_process = outside_process;
    opost.status = status;
    opost.lead_time = lead_time;
    opost.remarks = remarks;
    newpost = this.check_entry(this.inventory_list[0],opost);
    this.data.putData(this.home_route,'',newpost)
      .subscribe(data=> 
        {
          this.return_status = data;
          console.log(this.return_status)
        }
      );
    setTimeout(this.search_lot,1000,lot_number);
  }
  check_entry(original_data,new_data){
    const inventory_keys = Object.keys(original_data);
    // console.log("New data entry")
    // console.log(new_data);
    for (let invetory_key of inventory_keys){
      if(new_data[invetory_key] !== ""){
        // console.log(`Check type of $inventory_key`);
        // console.log(new_data[invetory_key]);
        // console.log(typeof(new_data[invetory_key]));
        // console.log(original_data[invetory_key]);
        original_data[invetory_key] = new_data[invetory_key];
        // console.log("1");
      }
    }
    // console.log("New post object");
    // console.log(original_data);
    return original_data;
  }
  verify(value){
    this.part_parameter = 'part_number';
    this.data.getData(this.home_route,'/part-number',this.part_parameter,value)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        // console.log(this.inventory_list)
      }
    )
  }

}
