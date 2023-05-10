export class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TitleScene' });
  }

  preload() {
    this.load.setBaseURL('assets/');
    this.load.image('title', 'title.png');
    this.load.image('start', 'start.png');
  }

  create() {
    this.add.image(0, 0, 'title').setOrigin(0, 0);
    let button = this.add.image(128, 144, 'start');

    button.setInteractive();

    button.on('pointerdown', () => {
      this.cameras.main.fadeOut(300);
      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
        this.scene.start('MainScene');
      });
    });
  }

}