import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-new-diaper',
  templateUrl: './new-diaper.component.html',
  styleUrls: ['./new-diaper.component.scss']
})
export class NewDiaperComponent implements OnInit {

  exampleForm: FormGroup;
  avatarLink: string = "../../assets/diaper.png";

  validation_messages = {
   'name': [
     { type: 'required', message: 'Name is required.' }
   ],
   'surname': [
     { type: 'required', message: 'Surname is required.' }
   ]
 };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: ['', Validators.required ],
      surname: ['', Validators.required ]
    });
  }

  resetFields(){
    this.avatarLink = "../../assets/diaper.png";
    this.exampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required)
    });
  }

  onSubmit(value){
    this.firebaseService.createUser(value, this.avatarLink)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/home']);
      }
    )
  }

}
