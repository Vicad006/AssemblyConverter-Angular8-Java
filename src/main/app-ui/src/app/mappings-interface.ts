export interface Coordinate {
  assembly: string;
  coord_system: string;
  seq_region_name: string;
  strand: number;
  start: number;
  end: number;
}


interface Assembly {
  original: Coordinate;
  mapped: Coordinate;
}

export interface MappingInterface {

  mappings: Assembly[];

}
