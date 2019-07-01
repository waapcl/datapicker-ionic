import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as moment_ from 'moment';
const moment = moment_;


@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.page.html',
  styleUrls: ['./data-picker.page.scss'],
})
export class DataPickerPage implements OnInit {

  dataForm: FormGroup;

  date;
  hasta;
  datePickerObj: any = {};
  public dias_entrega = 1

  monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  weeksList = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.dataForm = formBuilder.group({
      date: new FormControl('', [Validators.required]),
      hasta: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    const disabledDates: Date[] = [
      new Date(1545911005644),
      new Date(),
      new Date(2018, 12, 12), // Months are 0-based, this is August, 10th.
      new Date('Wednesday, December 26, 2018'), // Works with any valid Date formats like long format
      new Date('12-14-2018'), // Short format
    ];

    this.datePickerObj = {
      // inputDate: new Date('12'), // If you want to set month in dateObject of date-picker
      // inputDate: new Date('2018'), // If you want to set year in dateObject of date-picker
      // inputDate: new Date('2018-12'), // If you want to set year & month in dateObject of date-picker
      // inputDate: new Date('2018-12-01'), // If you want to set date in dateObject of date-picker
      // inputDate: '1', // If you want to set date as a string in date-picker
      // inputDate: '2018', // If you want to set date as a string in date-picker
      // inputDate: '2018-12', // If you want to set date as a string in date-picker
      // inputDate: '2018-12-12', // If you want to set date as a string in date-picker
      // inputDate: moment(new Date('12')), // If you want to set date as a moment object in date-picker
      // inputDate: moment(new Date('2018')), // If you want to set date as a moment object in date-picker
      // inputDate: moment(new Date('2018-12')), // If you want to set date as a moment object in date-picker
      // inputDate: moment(new Date('2018-12-12')), // If you want to set date as a moment object in date-picker

      // fromDate: new Date('2019-03-05'), // need this in order to have toDate
      // toDate: new Date('2019-03-28'),
      // showTodayButton: false,
      // closeOnSelect: true,
      // disableWeekDays: [],
      // mondayFirst: true,
      // setLabel: 'Select a Date',
       setLabel: 'Hecho',
      // todayLabel: 'Today',
       todayLabel: 'Hoy',
      // closeLabel: 'Close',
       closeLabel: 'Cancelar',
      // disabledDates: [],
      // titleLabel: 'Select a Date',
       monthsList: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
       weeksList: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      dateFormat: 'YYYY-MM-DD',
      // clearButton: false,
      // momentLocale: 'pt-BR',
      // yearInAscending: true,
      // btnCloseSetInReverse: true,

      btnProperties: {
        expand: 'block', // "block" | "full"
        fill: '', // "clear" | "default" | "outline" | "solid"
        size: '', // "default" | "large" | "small"
        disabled: '', // boolean (default false)
        strong: '', // boolean (default false)
        color: ''
        // "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark" , and give color in string
      }
    };
  }

  onChangeDate(event) {
     console.log("Evento", event.target.attributes[1].value)
     /* console.log("Evento", event.target.attributes) */
     if(this.dataForm.value.hasta.length>0) this.diasEntreFechas()
     /* console.log(this.dataForm.value.hasta.length) */

/*     console.log('onChangeDate date ', this.dataForm.get(event.target.attributes.1.value).value);
 */  }

  onClickSubmit() {
    console.log('onClickSubmit', this.dataForm.value);
    this.diasEntreFechas()
  }

  /* Dias entre fechas */
  diasEntreFechas(){
  /*   console.log("Este es el dia1", dia1);
    console.log("Este es el dia1", dia2) */
    let fecha1 = moment(this.dataForm.value.date);
    let fecha2 = moment(this.dataForm.value.hasta);
    let dias = fecha2.diff(fecha1, 'days')+1;
    this.dias_entrega = dias
/*   console.log(dias, 'dias de Entrega'); 
 */  }
}
