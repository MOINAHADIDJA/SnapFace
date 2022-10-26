import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute) { }

  faceSnap!: FaceSnap;

  btnText!: string;

  ngOnInit(): void {

    this.btnText = "Oh snap!";
    const facesnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(facesnapId);
  }

  onSnap(): void {

    if (this.btnText === "Oh snap!") {
      this.faceSnapService.snapFaceById(this.faceSnap.id, 'snap ');
      this.btnText = "Oops snap!";

    }
    else {

      this.faceSnapService.snapFaceById(this.faceSnap.id, 'unsnap');
      this.btnText = "Oh snap!";
    }

  }


}
