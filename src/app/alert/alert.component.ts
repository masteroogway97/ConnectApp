import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Network, Connection } from "@ionic-native/network/ngx";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: [`
    ion-title {
      text-align : center;
    }

    #coming-soon {
      margin-left : 17%;
      font-size : 150%;
      font-family : serif;
    }

    ion-button {
      margin-top : 8%;
    }

    ion-title {
      font-size : 200%;
      font-family : serif;
    }
  `],
})
export class AlertComponent implements OnInit {

  isOnline : boolean;
  connectionStatus : string;
  connectionStatusMsg : string;
  networkState : any;
  constructor(public alertController: AlertController, private platform: Platform) {
    // this.initializeApp();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Network Connectivity',
      subHeader: this.getConnectStatus(),
      message: this.getConnectionStatusMessage(),
      buttons: ['OK']
    });
  
    await alert.present();
  }
  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     document.addEventListener("online", this.checkConnection, false);
  //     document.addEventListener("offline", this.checkConnection, false);
  //   });
  // }
  // main function
  checkConnection() {
    this.networkState = Network.prototype.type;
    console.log(this.networkState);
    if(this.networkState != 'none'){
      this.isOnline = true; 
      this.presentAlert();
    } else {
      this.isOnline = false;
      this.presentAlert();
    }
}



  ngOnInit(): void {
  }
   getConnectStatus() : string {
    if(this.isOnline){
      this.connectionStatus = 'Online';
    } else {
      this.connectionStatus = 'Offline';
    }
    return this.connectionStatus
  }

  getConnectionStatusMessage() : string{
    if(this.isOnline){
      this.connectionStatusMsg = "Welcome to KNOW YOUR WASTE!\n We're building and will be live soon!";
    } else {
      this.connectionStatusMsg = "OOPS! Looks like you're Offline.";
    }
    return this.connectionStatusMsg
  }
}