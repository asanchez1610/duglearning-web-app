import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';

import * as AllIcons from '@ant-design/icons-angular/icons';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

registerLocaleData(es);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule

  ],
  bootstrap: [ AppComponent ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }, { provide: NZ_ICONS, useValue: icons }]
})
export class AppModule { }


/*








@NgModule({
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule
  ],
  declarations: [ NzDemoGridOffsetComponent ],
  bootstrap: [ NzDemoGridOffsetComponent ],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]
})
export class AppModule { }
*/