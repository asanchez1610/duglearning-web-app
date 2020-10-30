import { Component, OnInit } from '@angular/core';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { NzButtonSize } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //Properties
  title = 'duglearning-web-app';
  listDocsTypes: Array<{ label: string; value: string }> = [];
  listSchools: Array<{ label: string; value: string }> = [];
  docTypeSelected: String = 'DNI';
  schoolsSelected: String = '';
  sizeSelect: NzSelectSizeType = 'large';
  sizeButton: NzButtonSize = 'large';
  listCodes: Array<{ label: string; value: string }> = [];
  listTagCodes = [];

  ngOnInit(): void {

    //Mocks tipo documento
    const docs: Array<{ label: string; value: string }> = [];
    docs.push({ label: 'DNI', value: 'DNI' });
    docs.push({ label: 'RUC', value: 'RUC' });
    docs.push({ label: 'CE', value: 'CE' });
    docs.push({ label: 'PASSAPORTE', value: 'PASSAPORTE' });
    this.listDocsTypes = docs;

    //Mocks colegios
    const schools: Array<{ label: string; value: string }> = [];
    schools.push({ label: 'Colegio 01', value: '01' });
    schools.push({ label: 'Colegio 02', value: '02' });
    schools.push({ label: 'Colegio 03', value: '03' });
    schools.push({ label: 'Colegio 04', value: '04' });
    this.listSchools = schools;

  }

}
