import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-other-information',
  templateUrl: './other-information.component.html',
  styleUrls: ['./other-information.component.css']
})
export class OtherInformationComponent {

  @Input('otherInfoFormGroup')
  otherInfoFormGroup!: FormGroup;

  @Input('formData')
  formData: any;

  @Input()
  patientRevisit = false;

  @Input()
  revisitData: any;

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(){
    this.formData.forEach((item: any) => {
      if(item.fieldName)
      this.otherInfoFormGroup.addControl(item.fieldName, new FormControl());
    });
    console.log("otherInfoFormGroup Data", this.otherInfoFormGroup);
    if(this.patientRevisit)
    this.otherInfoFormGroup.patchValue(this.revisitData);
  console.log('personal Form Data', this.formData)
  }
  
}
