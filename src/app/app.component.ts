import { Component } from "@angular/core";
import CryptoJS = require("crypto-js");

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "CryptoJS";
  encrWord = "";
  encrValue = "";
  decrWord = "";
  decrValue = "";
  keys = "r*(^er453";

  setValue() {
    this.encrValue = this.encr(this.keys, this.encrWord);
  }

  getValue() {
    this.decrValue = this.decr(this.keys, this.decrWord);
  }

  private encr(keys, text) {
    const b64 = CryptoJS.AES.encrypt(text, keys).toString();
    const e64 = CryptoJS.enc.Base64.parse(b64);
    const eHex = e64.toString(CryptoJS.enc.Hex);
    return eHex;
  }

  private decr(keys, text) {
    const reb64 = CryptoJS.enc.Hex.parse(text);
    const bytes = reb64.toString(CryptoJS.enc.Base64);
    const decrypt = CryptoJS.AES.decrypt(bytes, keys);
    const plain = decrypt.toString(CryptoJS.enc.Utf8);
    return plain;
  }
}
