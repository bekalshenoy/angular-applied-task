import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnChanges {
  @Input()
  content: string = '';
  tableData: string[][] = [];
  headers: string[] = [];

  ngOnChanges() {
    this.tableData = this.content.split('\n').map((row) => row.split(','));
    this.headers = this.tableData.shift() || [];
  }
}
