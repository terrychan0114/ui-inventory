import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
//   statusList: any[] = [
//     {
//         "Comments": "Need heat treat",
//         "Due": "ASAP",
//         "Job#": "5H9700-5Z",
//         "Part#": "5H8000K-08",
//         "Qty": "50min"
//     },
//     {
//         "Comments": "due 9/8",
//         "Due": "2020-06-15T00:00:00",
//         "Job#": "5L6220",
//         "Part#": "5L6220T-01",
//         "Qty": "30min"
//     },
//     {
//         "Comments": "Need heat treat (due 9/8)",
//         "Due": "2020-09-01T00:00:00",
//         "Job#": "5H8000-4Z",
//         "Part#": "5H8591T-02",
//         "Qty": "50min"
//     }
// ]
  statusList: any[];
  header: any;
  factory: string = 'nj';
  constructor(private data: DataService) { }
  home_route: any = 'http://10.10.4.61:8090/status';
  // home_route: any = 'http://10.10.4.76:8081/inventory';
  route: any;
  ngOnInit(): void {
    this.header = this.getHeaders();
  }
  switchToFactory(location){
    this.factory = location;
    this.getHeaders();
  }
  // setInterval(getHeaders(), 3000);
  getHeaders() {
    let headers: string[] = [];
    if (this.factory == "nj"){
      this.route = '/nj';
    }
    else if (this.factory == "va"){
      this.route = '/va';
    }
    console.log("Calling getAllData")
    this.data.getAllData(this.home_route+this.route)
    .subscribe(data=> 
      {
        this.statusList = data;
        console.log(this.statusList)
      }
    )

    if(this.statusList) {
      this.statusList.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if(!headers.find((header) => header == key)){
            headers.push(key)
          }
        })
      })
    }
    console.log(headers);
    this.header=headers;
    
  }

  // myFunction() {
  //   setInterval(this.getHeaders, 3000);
  // }

}
