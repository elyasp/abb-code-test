### Human Machine Interface

## Fullstack application commissioned by ABB Robotics

### Objective
Create a front-end application that present deviations and conditions of a robotic arm. 

It show some measurements of every feature on a part.
```Part``` is the produced piece
```Feature``` is every one of the inspected elements of the part, it can be: Seam, Slot, Hole
```Control``` is every parameter measured of every Feature like: position (x,y,z), length , diameter…
Measurements are:
```Dev``` is the deviation from the expected measurement of the control
```Dev out total``` is the total deviation outside measurement for the last N pieces measured.

The number of controls can be different on every feature, this is why the component might have different lengths and the control header is red, green, yellow based on if the feature is on expected quality.


## Instructions

1. RUN SERVER

   - open terminal and cd to /server (inside root of application folder)
   - run `npm install`
   - run `npm run dev`

2. START CLIENT

   - open terminal and cd to root of app /machine-interface-application
   - run `npm install`
   - run `npm start`

## Notes

Since i'm using a mock backend with fake data, the same responded json is used in each data unit, resulting in synchronized updating.
One way I could solve it is by creating a unique axios call for each control (x,y,z,diameter) and have the same amount of states as the combined length of all the features, but the principle remains the same.

