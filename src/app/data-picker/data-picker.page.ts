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
      new Date(2018, 12, 12),
      new Date('Wednesday, December 26, 2018'), 
      new Date('12-14-2018'), 
    ];

    this.datePickerObj = {
       setLabel: 'Hecho',
       todayLabel: 'Hoy',
       closeLabel: 'Cancelar',
       monthsList: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
       weeksList: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      dateFormat: 'YYYY-MM-DD',
      btnProperties: {
        expand: 'block', 
        fill: '', 
        size: '', 
        disabled: '',
        strong: '', 
        color: ''
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
