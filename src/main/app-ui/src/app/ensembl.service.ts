import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import {Coordinate, MappingInterface} from "./mappings-interface";

@Injectable({
  providedIn: 'root'
})
export class EnsemblService {

  private _baseUrl = 'http://rest.ensembl.org/map';

  constructor(private http: HttpClient) { }

  getOneAssemblyMapping(specie: string, mapVersion: string, coordinate: Coordinate): Observable<MappingInterface[]>{

    specie = "human";
    var assemblyVersion = coordinate.assembly;
    var seqRegionName = coordinate.seq_region_name;
    var start = coordinate.start;
    var end = coordinate.end;
    var strand = coordinate.strand;

    const url = `${this._baseUrl}/${specie}/${assemblyVersion}/${seqRegionName}:${start}..${end}:${strand}/${mapVersion}?content-type=application/json`;

    console.log(url);
    // http://rest.ensembl.org/map/human/GRCh38/7:450000..500000:1/GRCh37?content-type=application/json

    return this.http.get<MappingInterface[]>(url);
  }







  /*getMultipleAssemblyMapping(specie: string, mapVersion: string, coordinates: Coordinate[]): Observable<MappingInterface[]>{

    specie = "human";

    coordinates.forEach((coordinate, row) => {

      var assemblyVersion = coordinate.assembly;
      var seqRegionName = coordinate.seq_region_name;
      var start = coordinate.start;
      var end = coordinate.end;
      var strand = coordinate.strand;

      const url = `${this._baseUrl}/${specie}/${assemblyVersion}/${seqRegionName}:${start}..${end}:${strand}/${mapVersion}?content-type=application/json`;

      console.log(url);

     // return this.http.get<MappingInterface[]>(url);

    });

    return this.http.get<MappingInterface[]>("http://rest.ensembl.org/map/human/GRCh38/7:450000..500000:1/GRCh37?content-type=application/json");


    // http://rest.ensembl.org/map/human/GRCh38/7:450000..500000:1/GRCh37?content-type=application/json


  }*/


}
