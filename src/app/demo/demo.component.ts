import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit {
  public demoFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.demoFormGroup = this.formBuilder.group({
      fname: [''],
      lname: [''],
      email: ['']
    });
    this.patchValue();
  }

  public onFormSubmit(): void {
    var name = this.demoFormGroup.value.fname + " " + this.demoFormGroup.value.lname;
    var email = this.demoFormGroup.value.email;
    alert("Submitted : \n Name: " + name + "\n Email: " + email);
  }

  public setValue(): void{
    this.demoFormGroup.setValue({fname:"Rinkesh", lname:"Patel", email:"rinkesh@gmail.com"});
  }

  public patchValue(): void{
    this.demoFormGroup.patchValue({fname:"Rinkesh"});
  }

  public reset(): void{
    this.demoFormGroup.reset();
  }
}
