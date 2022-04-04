export interface TableProps {
  headers: string[];
  data: { [key: string]: string | number }[];
  sorting: any;
  sort: any;
}
