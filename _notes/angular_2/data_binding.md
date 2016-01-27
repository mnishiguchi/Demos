# Data binding

## One-way data binding

### String interpolation
```html
<h1>{{title}}</h1>
```

### Capturing [native DOM events](https://developer.mozilla.org/en-US/docs/Web/Events)
```html
<button type="submit"
  class="btn"
  (click)="updateMessage(message)">
  Update Message
</button>
```

### Binding to properties
```html
<experiment
  *ngFor="#experiment of experiments"
  [experiment]="experiment">
</experiment>
```

==

## Two-way data binding
- Combine *property binding (component to view)* and *event binding (view to component)* to accomplish two-way data binding.
- 
```html
<input type="text" [(ngModel)]="message" placeholder="Message">
```

```js
//...
@Component({
  selector:    'experiment',
  templateUrl: 'app/experiments/experiment-details/experiment.detail.component.html',
  styles: [...]
})
export class ExperimentDetailComponent {

  // The @Input annotation
  // - declares a data-bound property so that it is automatically updated during change detection.
  @Input() experiment: Experiment;

  //...

} // end ExperimentDetailComponent
```
