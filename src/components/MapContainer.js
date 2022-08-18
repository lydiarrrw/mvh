const mapTemplate = document.createElement("template");

mapTemplate.innerHTML = `
<style>
.mapouter {
  margin-left: 2rem;
}

@media (min-width: 768px) {
  .mapouter {
    margin: 0 auto;
  }
 }
</style>
<div class="mapouter"><div class="gmap_canvas"><iframe width="350" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=milburn%20village%20hall&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a><br><style>.mapouter{position:relative;text-align:left;height:350px;width:500px;}</style><a href="https://www.embedgooglemap.net">embed google map in webpage</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:350px;width:500px;}</style></div></div>
`;

class Map extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(mapTemplate.content);
  }
}

customElements.define("map-component", Map);
