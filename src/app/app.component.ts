import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { MainScene } from './Scenes/MainScene';
import { TitleScene } from './Scenes/TitleScene';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'supamario';

  config: Phaser.Types.Core.GameConfig = {
    title: "Super Mario Phaser",
    type: Phaser.WEBGL,
    width: 256,
    height: 224,
    zoom: 3,
    pixelArt: true,
    scene: [ TitleScene, MainScene ],
    parent: 'mario',
    backgroundColor: "#001122",
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 500 }
      }
    }
  };

  ngOnInit(): void {
    new Phaser.Game(this.config);
  }
}