import { Component } from '@angular/core';

/** Describes the simple-shell Vm Semo */
@Component({
  selector: 'nx-angular-simple-shell',
  styleUrls: ['../view-model.scss'],
  template: `
  <h2>Simple Binding</h2>

  <p>Two-way binding directly to the model data.</p>

  <nx-angular-simple-container></nx-angular-simple-container>

  <section id="notes">
    <h4>Notes:</h4>
    <ul>
      <li>Mutates the Customer model directly in the Details view.</li>
      <li>Adding a customer updates the customer list immediately.</li>
      <li>Changes to customer detail update customer list immediately.</li>
      <li>Difficult to enforce validation of customer changes (ex: name required).</li>
    </ul>
  </section>
`})
export class SimpleShellComponent { }