# ConnectApp
Checks the connectivity of the mobile device

The latest version of the softwares below is recommended.
### Requirements
- node.js and npm
- Ionic CLI and Cordova
- Angular CLI
- Android Studio
- Code Editor

### Installation
1.	`node.js` and `npm` are essential and should be installed.
- If you don't have it, follow this link https://nodejs.org/en/download/ and download the stable version of node.js which will install both node and npm.
2.	Create a new folder and cd into that folder. This will be your project folder.
3.	Open the folder in cmd (Windows) or terminal (Mac or Linux) and install ionic and cordova:
- `npm install -g ionic cordova`
4.	Install the latest angular CLI:
- `npm install -g @angular/cli`

All set to create a new App!

### Create a new App
1.	Run `ionic start <name_of_the_app> blank`. Choose `angular` framework since we're working with Angular.
2.	`cd` into the app folder.
3.	When using Ionic Framework in an Angular project, install the latest @ionic/angular package from npm. This comes with all of the Ionic Framework components and Angular specific services and features.
- `npm install @ionic/angular@latest --save`
3.	Copy the contents of `src/app/app.component.html` and `src/app/app.component.ts` from the repository and paste it in the respective files of your app which was created now.

Time to build!

### Building the App
1.	To target the Android platform, some additional environment setup is required. Android apps can be created on Windows, macOS, and Linux. Follow the instructions to setup.
- https://ionicframework.com/docs/installation/android
2.	After the above setup, you are ready to test the app either in an emulator or on an actual device.
3.	Add the android platform:
- `ionic cordova platform add android`
4.	In the project folder, open cmd or terminal and run:
- `ionic cordova build android`

### Running the App
After build successfully finishes, hit the following command to run the app:
- `ionic cordova run android`
