import { Component } from "@angular/core";

/** Describes the ViewModel Class Demo */

@Component({
  selector: 'nx-angular-vm-shell',
  styleUrls: ['../view-model.scss'],
  template: `
  <h2>ViewModel Class</h2>

  <p>Formalize the view model in its own class.</p>

  <nx-angular-vm-container></nx-angular-vm-container>

  <section id="notes">
    <h4>Notes:</h4>
    <ul>
      <li>Project the model into a ViewModel class with just what we need in the way we want it.</li>
      <li>ViewModel class holds much of the presentation logic.</li>
      <li>ViewModel class is super easy to unit test.</li>
    </ul>
  <`
})
export class VmShellComponent { }