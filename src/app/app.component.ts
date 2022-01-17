import { Component } from '@angular/core';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crypto';


// Declare this key and iv values in declaration
private key = CryptoJS.enc.Utf8.parse('4512631236589784');
private iv = CryptoJS.enc.Utf8.parse('4512631236589784');

// Methods for the encrypt and decrypt Using AES
encryptUsingAES256() {
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify("Your Json Object data or string")), this.key, {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log('Encrypted :' + encrypted);
    this.decryptUsingAES256(encrypted.toString());
    return encrypted;
}

decryptUsingAES256(decString: string) {
    var decrypted = CryptoJS.AES.decrypt(decString, this.key, {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log('Decrypted : ' + decrypted);
    console.log('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));

}

ngOnInit() {
  this.encryptUsingAES256();
}



}
