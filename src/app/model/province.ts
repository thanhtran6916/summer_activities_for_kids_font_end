import {District} from "./district";

export interface Province {
  name?: string;
  code?: string;
  districts?: District[];
}
