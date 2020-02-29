import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form:any;
  form2:any[];

  testform:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.testform = this.formBuilder.group({
      fname:[''],
      address:[''],
      pcity:[''],
      pack:[''],
      train:[''],
      p1:['']
    });
  }

  key:any = "products";

  getProductsFromLocalStorage = ()=> {
    let products = [];

    if(localStorage.getItem(this.key)){
      products=JSON.parse(localStorage.getItem(this.key));
    }

    return products;
  }

  Submit(){

    let products = this.getProductsFromLocalStorage();

    let product = {
      name:this.testform.controls['fname'].value,
      address:this.testform.controls['address'].value,
      city:this.testform.controls['pcity'].value,
      package:this.testform.controls['pack'].value,
      trainer:this.testform.controls['train'].value,
      phone:this.testform.controls['p1'].value

    };

    products.push(product);
    localStorage.setItem(this.key,JSON.stringify(products));
  }

}
