import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  tokenDetails: any;
  token: any;

  ngOnInit(): void {
    console.log("Token: ", localStorage.getItem("token"));

    this.token = localStorage.getItem("token");

    if (this.token) {
      const base64Url = this.token.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      this.tokenDetails = JSON.parse(atob(base64));

      console.log(this.tokenDetails);
    }
  }
}
