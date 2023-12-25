# Ngx-Vision

This library provides an Angular directive to efficiently detect elements in the viewport and trigger events based on their visibility status. It leverages the Intersection Observer API to monitor changes in the visibility of an element and provides granular control over the threshold, allowing users to define at what percentage of visibility the events should be triggered.

## How to install
Install via npm.

`npm i ngx-vision`

## Usage


1. In your project's app.module.ts, import ngx-vision and add it in the imports. 

```
  import { NgxVisionModule } from 'ngx-vision'

  @NgModule({
      imports: [
        NgxVisionModule
      ],
    })
</script>
```

2. Apply the directive to any HTML element you wish to observe.

```html
<div appVision threshold="50" [observeOnce]="true" (changeVision)="handleChange($event)" (enterVision)="handleEnter($event)" (exitVision)="handleExit($event)">
  <!-- Your content goes here -->
</div>
```

## Example Use Cases

1. **Lazy loading images**

Load images only when they enter the viewport to improve application performace.

```html
<img appVision [threshold]="'20'" (enterVision)="loadImage($event)">
```

2. **Trigger Animations**

Animate elements when they become visible on screen.

```html
<div appVision (enterVision)="animateElement($event)">
  <!-- Your animated content goes here -->
</div>
```

## API
### Inputs
| Input  | Type |       Description  |
| ------------- |:-------------:|-------------|
| threshold     | string    |      Sets the threshold for when to trigger elements in percentage (i.e if a element should be visible when it is halfway on the screen, enter `"50"`. Can be a single number or a string of numbers separated by commas. Defaults to `"0"`.       |
| observeOnce     | boolean     |       If set to `true`, the observer will unobserve the element after it first enters the viewport. Defaults to `false`      |

### Outputs

| Ouput  | Returns |       Description  |
| ------------- |:-------------:|-------------|
| (changeVision)     | VisionEvent    |      Emitted when the visibility status of an element changes.      |
| (enterVision)     | VisionEvent    |      Emitted when an element enters the viewport.     |
| (exitVision)    | VisionEvent    |     Emitted when an element exits the viewport.      |


### VisionEvent object

| Key  | Type |       Description  |
| ------------- |:-------------:|-------------|
| element     | ElementRef    |      The ElementRef of the observed element.     |
| visible    | boolean    |      Indicates whether the element is currently visible or not.     |
| scrollDirection   | Direction    |     An object indicating the scroll direction in both x and y axes.      |

### Direction object

| Key  | Value | 
| ------------- |:-------------:|
| x     | `"left"` or `"right"`   
| y    | `"up"` or `"down"`     | 
## Compatibility
This library is compatible with Angular 15 and above.

## License
This library is licensed under the MIT license.

