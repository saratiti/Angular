import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as ApexCharts from 'apexcharts';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { CompanyService } from 'src/app/service/company.service';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { JobService } from 'src/app/service/job.service';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  @ViewChild('pdfTable')pdfTable!: ElementRef;
  @ViewChild('pdfTable1')pdfTable1!: ElementRef;
  
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
  constructor(private route:Router,public compan:CompanyService,public j :JobService) { 
    }

   
getnumber(){
// this.compan.getnumberofCompany()

}
length:number=0;
datenow :Date=new Date();
startDate:Date=new Date();
EndDate:Date=new Date();
countofjob:number[]=[];
countofcom:number[]=[];

searchTwoDate:FormGroup=new FormGroup({
  DateFrom:new FormControl(),
  DateTo:new FormControl(),
 
 });



searchDate()
{ 
  const value = this.searchTwoDate.value;

this.compan.getnumberofCompany(value).subscribe((res:any)=>{
this.compan.count=res;
 console.log(this.compan.count);

this.length=this.compan.count.length;
for(let i=0;i<res.length;i++)
{
  this.dayofcompany[i]=this.compan.count[i].registerDate;
  this.countofcom[i]=this.compan.count[i].countcompany;

}

},err=>{console.log('erorr');
})

// GetNumberjobs

this.j.GetNumberjobs(value).subscribe((res:any)=>{
  this.j.countofjob=res;
  // console.log( this.j.countofjob);
  
 
  for(let i=0;i<res.length;i++)
  {
this.countofjob[i]=this.j.countofjob[i].countjob;
   this.dayofjob[i]=this.j.countofjob[i].postingdate; 
  }
  // console.log(this.countofjob);
  
  },err=>{console.log('erorr');
  })

  this.report();
    this.report1();


}
  ngOnInit(): void { 
    // for(let i = 0; i < 6; i++) {
     
    //   this.startDate.setDate(this.startDate.getDate() + i);
    //   this.dayofcompany[i]=this.startDate.toDateString();
    //  }
    //  this.EndDate.setDate(this.EndDate.getDate()+ 6);
    //  this.end=this.EndDate.toDateString();
    //  console.log(this.dayofcompany);
  
  }

 
  dayofcompany:any[]=[];
  dayofjob:any[]=[];
end:any;
///number of company
    report(){
       
      var options = {
        chart: {
            height: 350,
            // width:650,
            type: 'area',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        series: [ {
            name: '# of company',
            data: this.countofcom
        }],
        colors: ['#ff8a00'],

        xaxis: {
            type: 'datetime',
            categories:this.dayofcompany
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy '
            },
            
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#chart"),
        options
    );

    chart.render();

    }
  

    report1(){

     
       
      var options = {
        chart: {
            height: 350,
            // width:650,
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
            data: this.countofjob
        }],
        colors: ['#ff8a00'],

        xaxis: {
            type: 'datetime',
            categories: this.dayofjob
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy '
            },
            
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#chart1"),
        options
    );

    chart.render();

    }

  
    profile(){
      this.route.navigate(['admin/profile'])
  
     } 
   
      company(){
      this.route.navigate(['admin/company'])
  
      }
      job(){ this.route.navigate(['admin/job']) }
      applyjob(){ this.route.navigate(['admin/applyjob'])}
   Report(){
    this.route.navigate(['admin/Report'])
  
   }
   Manage(){
    this.route.navigate(['admin/Manage'])
  
  }
  User()
  { 
     this.route.navigate(['admin/user'])
  
  }
     login()
     {
      localStorage.removeItem('token');
 

      this.route.navigate(['auth/login'])
  
     }
     message()
     {
       this.route.navigate(['admin/message'])
     }
}
