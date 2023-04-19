const calendarTemplate = document.createElement("template");

calendarTemplate.innerHTML = `
<iframe
          src="https://calendar.google.com/calendar/embed?src=milburnvillagehall%40gmail.com&ctz=Europe%2FLondon"
          style="border: 0"
          width="100%"
          height="500px"
          frameborder="0"
          scrolling="no"
        ></iframe>
`;

class Calendar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(calendarTemplate.content);
  }
}

customElements.define("calendar-component", Calendar);
