import Phaser from 'phaser';
import Enemy from './Enemy.js';

export default class Skull2 extends Enemy {
    // Create a new Enemy class that extends the Phaser Physics Arcade Sprite class
  constructor(scene, x, y, sprite) {
    // Call the super method to create a new instance of the Enemy class
    super(scene, x, y, sprite);
    // Add the new Enemy class to the scene
    this.setOrigin(0.35, 0.35);
    // Set the collision bounds for the enemy
    this.setCollideWorldBounds(true);
    
  //  this.hitWidth = 90;
  //  this.hitLength = 80;
  //  this.HitOX = -1.2;
  //  this.HitOY = -.70;
    // Add a new Rectangle the same size as the sprite that is assigned to 'hitbox' to track hits on the enemy.
    // this.hitbox = new Phaser.GameObjects.Rectangle(scene, x, y, 70, 80);
    // this.hitbox.setOrigin(-1.2, -.70);
    // scene.add.existing(this.hitbox);
    // scene.physics.world.enable(this.hitbox);
    this.setSize(70, 80);
    this.setOffset(76, 70)

    this.scene.anims.create({
        key: 'skull2-anim',
        frames: [
            {key: 'skull2-1'},
            {key: 'skull2-2'},
            {key: 'skull2-3'},
            {key: 'skull2-4'},
            {key: 'skull2-5'},
        ],
        frameRate: 10,
        repeat: -1
        });
        this.anims.play('skull2-anim');
  }
  
  update() {
    
  }
}