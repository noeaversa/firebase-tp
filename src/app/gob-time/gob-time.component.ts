import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gob-time',
  templateUrl: './gob-time.component.html',
  styleUrls: ['./gob-time.component.css']
})
export class GobTimeComponent {

  constructor(private http: HttpClient){}

  info : any 
  ngOnInit(){
    this.http.get('https://apis.datos.gob.ar/series/api/series?ids=Automotriz_produccion_s2nqOo&header=titles&collapse=quarter&format=json')
      .subscribe((res) => {
        this.info = res
        console.log(res)
      })
  }
}
