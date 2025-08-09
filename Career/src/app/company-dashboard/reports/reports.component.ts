import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as ApexCharts from 'apexcharts';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { JobapplyService } from 'src/app/service/jobapply.service';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private route:Router,public apply:JobapplyService) { }

  show=false;

  @ViewChild('pdfTable')pdfTable!: ElementRef;
  @ViewChild('pdfTable1')pdfTable1!: ElementRef;
  @ViewChild('pdfTable2')pdfTable2!: ElementRef;

  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
  
  public downloadAsPDF1() {
    const pdfTable1 = this.pdfTable1.nativeElement;
    var html = htmlToPdfmake(pdfTable1.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
  
  public downloadAsPDF2() {
    const pdfTable2 = this.pdfTable2.nativeElement;
    var html = htmlToPdfmake(pdfTable2.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
  searchTwoDate:FormGroup=new FormGroup({
    dateFrom:new FormControl(''),
    dateTo:new FormControl(),
  
   });
   numberoftotal:number[]=[];
   numberofaccept:number[]=[];
   numberofreject:number[]=[];
//    startDate:Date=new Date();
// EndDate:Date=new Date();
   day:any[]=[];
   dayacc:any[]=[];
   dayrej:any[]=[];
   searchDate(){
 
    const value = this.searchTwoDate.value;
  this.apply.getnumberofApplyjob(value).subscribe((res:any)=>{
    this.apply.totaljob=res;
    console.log(this.apply.totaljob);
    
    for(let i=0;i<this.apply.totaljob.length;i++)
    {
      this.numberoftotal[i]=this.apply.totaljob[i].countjob;
this.day[i]=this.apply.totaljob[i].applydate;
    }
  });
 this.apply.getnumberofApplyjobaccept(value).subscribe((res:any)=>{
   this.apply.accpetjob=res;
   console.log(this.apply.accpetjob);
   for(let i=0;i<this.apply.accpetjob.length;i++)
   {
    this.numberofaccept[i]=this.apply.accpetjob[i].countjob;
    this.dayacc[i]=this.apply.accpetjob[i].responsedate;
console.log(this.numberofaccept);

   }
 }
 )
 this.apply.getnumberofApplyjobreject(value).subscribe((res:any)=>{
  this.apply.rejectjob=res;
  console.log(res);
  for(let i=0;i<this.apply.rejectjob.length;i++)
  {
    this.numberofreject[i]=this.apply.rejectjob[i].countjob;
    this.dayrej[i]=this.apply.rejectjob[i].responsedate;

console.log(this.numberofreject);

  }
})
this.show=true;  
this.report1();this.report2(); this.report3();
}
  ngOnInit(): void {}
  report1(){
    var options = {
      chart: {
          height: 350,
          type: 'area',
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      series: [{
          name: '# of jobs',
          data: this.numberoftotal
      }],
      colors: ['#ff8a00'],

      xaxis: {
          type: 'datetime',
          categories: this.day
      },
      tooltip: {
          x: {
              format: 'dd/MM/yy'
          },
      }
  }

  var chart = new ApexCharts(
      document.querySelector("#chart"),
      options
  );

  chart.render();

  }
  report3(){
    var options = {
      chart: {
          height: 350,
          type: 'area',
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      series: [{
          name: '# of jobs',
          data: this.numberofreject
      }],
      colors: ['#ff8a00'],

      xaxis: {
          type: 'datetime',
          categories: this.dayrej
      },
      tooltip: {
          x: {
              format: 'dd/MM/yy'
          },
      }
  }

  var chart = new ApexCharts(
      document.querySelector("#chart2"),
      options
  );

  chart.render();

  }
  report2(){
    var options = {
      chart: {
          height: 350,
          type: 'area',
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      series: [{
          name: '# of  Accepted job',
          data:this.numberofaccept
      
  }],
      colors: ['#ff8a00'],

      xaxis: {
          type: 'datetime',
          categories:this.dayacc
      },
      tooltip: {
          x: {
              format: 'dd/MM/yy'
          },
      }
  }

  var chart = new ApexCharts(
      document.querySelector("#chart1"),
      options
  );

  chart.render();

  }

  profile(){this.route.navigate(['company/profile']);}
  manage(){this.route.navigate(['company/manage']);}
  managejob(){this.route.navigate(['company/managejob']);}
  postjob(){this.route.navigate(['company/postjob']);}
  appliedjob(){this.route.navigate(['company/applyjob']);}
  report(){this.route.navigate(['company/report']);}
  login(){localStorage.removeItem('token');
 

  this.route.navigate(['auth/login'])}

}
