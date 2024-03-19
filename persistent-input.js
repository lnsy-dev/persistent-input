/*
//  Persistent Input with Automatic Attribute Propagation
//  By LNSY
//  https://lnsy.dev
*/


class PersistentInput extends HTMLElement {
  connectedCallback() {
    // Ensure there is an `id` attribute for this element
    const id = this.getAttribute('id');
    if (!id) {
      console.error('PersistentInput requires an "id" attribute.');
      return;
    }
    // Create the input element
    this.inputElement = document.createElement('input');

    // Loop over attributes of the host element and set them on the input element
    Array.from(this.attributes).forEach(attr => {
      // You might want to exclude some attributes from being copied, such as 'id' or class specific to styling the host component.
      if (attr.name.toLowerCase() !== 'id') { // Exclude 'id', add more conditions for other attributes if needed
        this.inputElement.setAttribute(attr.name, attr.value);
      }
    });

    this.appendChild(this.inputElement);

    // Check localStorage for a saved value
    const storedValue = localStorage.getItem(id);
    if (storedValue !== null) {
      this.inputElement.value = storedValue;
    }

    // Listen for changes in the input and update localStorage
    this.inputElement.addEventListener('input', () => {
      localStorage.setItem(id, this.inputElement.value);
    });
  }
}


// Define the custom element

customElements.define('persistent-input', PersistentInput);
