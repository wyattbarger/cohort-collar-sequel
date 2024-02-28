import Phaser from 'phaser';

export default class Title extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.add.text(350, 200, 'Game', { fill: '#0f0', fontSize: 48, shadow: '2px 2px #000' });
    const startButton = this.add.text(300, 400, 'Click to Start!', { fill: '#0f0' });
    startButton.setInteractive();
    startButton.on('pointerdown', () => {
      this.scene.start('LevelOne');
    });


    //remove when start button has functionality
    // this.input.keyboard.once('keydown-SPACE', () => {
    //   this.scene.start('LevelOne');
    // });
  }
}