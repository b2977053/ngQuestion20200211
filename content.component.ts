import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  dNow: number;
  exGraphs: ExGraph[];
  datasetOptions: DataDatasetOption[];

  constructor() {
    this.dNow = Date.now();
    this.exGraphs = [{
      Title: 'New vs Returning'
      , Synopsis: 'Traffic'
      , BorderColor: '#252830'
      , Datas : [{
        Data: 230
        , Labels: 'Returning'
        , Color: '#1ca8dd'
      }, {
        Data: 130
        , Labels: 'New'
        , Color: '#1bc98e'
      }]
    }];

    this.datasetOptions = this.exGraphs.map((exGraph) => {
      return { borderColor: exGraph.BorderColor,
        backgroundColor: exGraph.Datas.map((data) => {
        return data.Color;
      }) };
    });



  }

  ngOnInit(): void {
    console.log(this.exGraphs);
  }

}


export interface ExGraph {
  Title: string;
  Synopsis: string;
  BorderColor: string;
  Datas: Data[];
}

export interface Data {
  Data: number;
  Labels: string;
  Color: string;
}

export interface DataDatasetOption {
  borderColor: string;
  backgroundColor: string[];
}
