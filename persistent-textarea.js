/*
//  Persistent Textarea with Automatic Attribute Propagation
//  By LNSY
//. https://lnsy.dev
*/

class PersistentTextarea extends HTMLElement {
  connectedCallback() {
    // Ensure there is an `id` attribute for this element
    const id = this.getAttribute('id');
    if (!id) {
      console.error('PersistentTextarea requires an "id" attribute.');
      return;
    }
    // Create the textarea element
    this.textareaElement = document.createElement('textarea');
    // Loop over attributes of the host element and set them on the textarea element
    Array.from(this.attributes).forEach(attr => {
      // You might want to exclude some attributes from being copied, such as 'id' or class specific to styling the host component.
      if (attr.name.toLowerCase() !== 'id') { // Exclude 'id', add more conditions for other attributes if needed
        this.textareaElement.setAttribute(attr.name, attr.value);
      }
    });
    this.appendChild(this.textareaElement);
    // Check localStorage for a saved value
    const storedValue = localStorage.getItem(id);
    if (storedValue !== null) {
      this.textareaElement.value = storedValue;
    }
    // Listen for changes in the textarea and update localStorage
    this.textareaElement.addEventListener('input', () => {
      localStorage.setItem(id, this.textareaElement.value);
    });
  }
}

// Define the custom element
customElements.define('persistent-textarea', PersistentTextarea);
