import { Component, OnInit } from "@angular/core";

@Component({
  selector: "angular-loading-circle",
  template: `
    <div class="loading-circle"></div>
  `,
  styles: [
    `
      .loading-circle {
        position: absolute;
        left: 50%;
        top: 50%;
        height: 60px;
        width: 60px;
        margin: 0px auto;
        -webkit-animation: rotation 0.6s infinite linear;
        -moz-animation: rotation 0.6s infinite linear;
        -o-animation: rotation 0.6s infinite linear;
        animation: rotation 0.6s infinite linear;
        border-left: 6px solid rgba(0, 174, 239, 0.15);
        border-right: 6px solid rgba(0, 174, 239, 0.15);
        border-bottom: 6px solid rgba(0, 174, 239, 0.15);
        border-top: 6px solid rgba(0, 174, 239, 0.8);
        border-radius: 100%;
      }
      @-webkit-keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(359deg);
        }
      }
      @-moz-keyframes rotation {
        from {
          -moz-transform: rotate(0deg);
        }
        to {
          -moz-transform: rotate(359deg);
        }
      }
      @-o-keyframes rotation {
        from {
          -o-transform: rotate(0deg);
        }
        to {
          -o-transform: rotate(359deg);
        }
      }
      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    `
  ]
})
export class AngularLoadingCircleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
