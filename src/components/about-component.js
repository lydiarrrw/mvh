const aboutTemplate = document.createElement("template");

aboutTemplate.innerHTML = `
<style>
@import url("bundle.js");
</style>
<div class="about-tab-bar">
<div class="about-tab">
Whole Hall
</div>
<div class="about-tab">
Large Hall
</div>
<div class="about-tab">
Small Hall
</div>
</div>
<div class="about-tab_container_whole">
whole hall info
</div>
<div class="about-tab_container_large">
large hall info
</div>
<div class="about-tab_container_small">
small hall info
</div>
<div class="about-tab_container_information">
<h2>Facilities</h2>
<ul>
  <li>Comfortable padded chairs</li>
  <li>6 'lightweight' Gopack tables (seat 6 to a table)</li>
  <li>3 small Gopack tables</li>
  <li>
    Multi purpose connectable table system, can be used as tables as
    various sizes and as a stage
  </li>
  <li>Projector, screen and fully integrated Kef sound system.</li>
  <li>Air source heating</li>
  <li> Fully equipped kitchen</li>
</ul>
<h2>Accessibility</h2>
<p>The hall has the following features:</p>
<ul>
  <li>Ramp leading to the entrance for wheelchair access.</li>
  <li>Accessible toilet</li>
  <li>Hearing loop</li>
</ul>
<p>If you have any questions then please get in touch.</p>
</div>
`;

class Aboutcomp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(aboutTemplate.content);
  }
}

customElements.define("about-component", Aboutcomp);
