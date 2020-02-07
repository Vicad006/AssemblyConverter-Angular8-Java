import { Component, OnInit } from '@angular/core';
import {EnsemblService} from "../ensembl.service";
import {Coordinate, MappingInterface} from "../mappings-interface";

@Component({
  selector: 'app-assembly-converter',
  templateUrl: './assembly-converter.component.html',
  styles: [``]
})
export class AssemblyConverterComponent implements OnInit {

  private specie;
  private mapVersion;
  private coordinate: Coordinate = {} as any;
  private data;
  showTable: boolean = false;
  showForm: boolean = true;

  mappingResult:MappingInterface = {} as any;

  constructor(private _ensemblService: EnsemblService) {

  }

  ngOnInit() {

    this.coordinate.assembly = "GRCh38";
    this.coordinate.seq_region_name = "10";
    this.coordinate.start = 25000;
    this.coordinate.end = 30000;
    this.coordinate.strand = 1;

    this.mapVersion = "GRCh37";
  }

  getData() {

    this.mappingResult = {mappings: []};

      console.log(this.coordinate.end)


    this._ensemblService.getOneAssemblyMapping(this.specie, this.mapVersion,this.coordinate)
      .subscribe(
        data => {

          this.data = data;

          // This receives the mappings node of the json in required format
          let mappings = this.data.mappings;

          console.log(mappings);

          this.mappingResult = this.data;

        }
      );

    this.switchInterface();
  }

  switchInterface() {

    this.showTable = this.showTable == false;
    this.showForm = (this.showForm == false);

  }

  setExampleQuery() {

    this.coordinate.assembly = "NCBI34";
    this.coordinate.seq_region_name = "7";
    this.coordinate.start = 490000;
    this.coordinate.end = 500000;
    this.coordinate.strand = 1;

    this.mapVersion = "GRCh37";

  }
}





