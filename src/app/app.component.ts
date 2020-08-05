


// export class AppComponent {
//   title = 'my-app';
// }

import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
import { Component, ViewChild } from '@angular/core';

// other imports are here...

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

   @ViewChild('mytestdiv') testDiv;

   testArr = [1,2,3,4,5,6,7,8,9,0,12,34,124,5234,123412,42134,11231,23123,1241,2412,312,1231,231]



  myDpOptions: IAngularMyDpOptions = {
    dateRange: true,
    dateFormat: 'dd.mm.yyyy',
    inline: true,
    monthSelector: false,
    yearSelector: false,
    sunHighlight: false,
    selectorHeight: '300px',
    selectorWidth: '350px',
    firstDayOfWeek: 'su',
    stylesData: {
      selector: 'dp1',      
      styles: `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
         .dp1 .myDpHeaderBtn {
            color: #6c757d;
           text-transform: uppercase;
         }      
         
         .dp .myDpCalTable>*{
           background-color: #eee;
         }

         .dp1 .myDpHeaderBtn:focus,
         .dp1 .myDpMonthLabel:focus,
         .dp1 .myDpYearLabel:focus {
            color: #aaa;
         }
         .dp1 .myDpDaycell:focus,
         .dp1 .myDpMonthcell:focus,
         .dp1 .myDpYearcell:focus {
            box-shadow: inset 0 0 0 1px #ccc;
         }
         .dp1 .myDpSelector:focus {
            box-shadow: -1px 1px 6px 0px #bbb;
         }

         .dp1 .myDpSelector {
            border: none;
            padding: 0 10%;
          }          

         .dp1 .myDpSelectorArrow:focus:before {
          border-bottom-color: #bbb;
         }
         .dp1 .myDpCurrMonth,
         .dp1 .myDpMonthcell,
         .dp1 .myDpYearcell {
            color: #6c757d;
            font-weight: bold;
         }
         .dp1 .myDpDaycellWeekNbr {
            color: #6c757d;
         }
         .dp1 .myDpPrevMonth,
         .dp1 .myDpNextMonth {
            color: #aaa;
         }
         .dp1 .myDpWeekDayTitle {
            background-color: transparent;
            color: #6c757d;
            font-weight: bold;
         }
         .dp1 .myDpHeaderBtnEnabled:hover,
         .dp1 .myDpMonthLabel:hover,
         .dp1 .myDpYearLabel:hover,
         .dp1 .myDpFooterBtn:hover {
            color: #212529;
         }
         .dp1 .myDpMarkCurrDay {            
            background-color: rgba(105, 53, 156, 0.1);        
            border: none;
            padding: 10px;
         }
         .dp1 .myDpDisabled {
            color: #999;
         }
         .dp1 .myDpHighlight {
            color: #cd5c5c;
         }

         .dp1 .myDpTableSingleDay:hover {
            background-color:  rgba(105, 53, 156, 0.2);                      
         }   
         
         .dp1 .myDpTableSingleDay:focus, .dp1 .myDpTableSingleDay:active {
            outline: none;              
            background-color:  #69359C;  
          }

         .dp1 .myDpRangeColor {
            background-color: rgba(105, 53, 156, 0.2);                        
         }

         .dp1 .myDpSelectedDay, .dp1 .myDpSelectedDay:hover {
          background-color:  #69359C;          
          color: #fff;
         }

         .dp1 .myDpMonthYearText {
          width: 55%;
         }

         .dp1 .myDpMonthYearSelBar {
           margin-bottom: 22px;
           justify-content: center;
         }

         .dp1 .myDpNextBtn  {
           margin: 0;

         }

       `
    }
    // other options are here...
  };

  
  myDateInit: boolean = true;
  model: IMyDateModel = null;

  constructor() { }

  ngOnInit() {
    if (this.myDateInit) {
        // Initialize to specific date (14.05.2019) with IMyDate object
        this.model = {isRange: false, singleDate: {date: { 
                                                            year: 2019, 
                                                            month: 5, 
                                                            day: 14 
                                                          }}};
    }
    else {
        // Initialize to today with javascript date object
        this.model = {isRange: false, singleDate: {jsDate: new Date()}};
    }
  }

  scrollDiv(val) {
   //   console.log('scroll click');
   //   console.log(this.testDiv);
     if(val > 0) {        
      let scrollTimer = setInterval(() => {
         this.testDiv.nativeElement.scrollLeft += 10;
      }
      , 10);  
   
      setTimeout(() => { clearInterval(scrollTimer);}, 200);   
     }

     if(val < 0) {
      let scrollTimer = setInterval(() => {
         this.testDiv.nativeElement.scrollLeft -= 10;
      }
      , 10);  
   
      setTimeout(() => { clearInterval(scrollTimer);}, 500);
     }
   


  }
}
