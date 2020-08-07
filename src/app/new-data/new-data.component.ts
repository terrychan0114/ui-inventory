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
    this.data.postData('',opost)
      .subscribe(data=> 
        {
          this.return_status = data;
          console.log(this.return_status)
        }
      );
  }
  verify(value){
    this.part_parameter = 'lot_number';
    this.data.getData('/lot-number',this.part_parameter,value)
    .subscribe(data=> 
      {
        this.inventory_list = data;
        console.log(this.inventory_list)
      }
    )
  }
}