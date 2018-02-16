import { Log } from "./Log";
import { LogType } from "./LogType";

export class GridData {
    types: LogType[];
    headers: string[];
    rows: Log[];
    pageSize: number;
    pageNumber: number;
    totalRows: number;
}