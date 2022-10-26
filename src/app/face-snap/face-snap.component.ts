import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  constructor(private faceSnapService: FaceSnapService,
    private route: Router) { }

  @Input() faceSnap!: FaceSnap;


  btnText!: string;
  facesnapId!:number
  ngOnInit(): void {


    this.btnText = "Oh snap!"
  }

  onSnap(): void{

    if (this.btnText === "Oh snap!") {
      this.faceSnapService.snapFaceById(this.faceSnap.id, 'snap ');
      this.btnText = "Oops snap!";

    }
    else {

      this.faceSnapService.snapFaceById(this.faceSnap.id, 'unsnap');
      this.btnText = "Oh snap!";
    }

  }

  onViewFaceSnap(): void {

    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }




}
