import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  btnText!: string;

  ngOnInit(): void {

    this.snapped = false;
    this.btnText="Oh snap!"
  }

  onSnap(): void{
    console.log("1" + this.snapped + "" + !this.snapped);

    if (!this.snapped) {
      console.log("1"+this.snapped+""+!this.snapped);
      this.faceSnap.snaps++;
      this.snapped = true;
      this.btnText="Oops snap!"
      console.log("2"+this.snapped);


    }
    else {
      console.log("3"+this.snapped);

      this.faceSnap.snaps--;
      this.snapped = false;
      this.btnText = "Oh snap!"
      console.log(this.snapped);

    }

  }




}
