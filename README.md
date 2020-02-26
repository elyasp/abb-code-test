### Human Machine Interface

## Fullstack application made as part of a code-test

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

## Next Steps

- Create a unique data route for each control Unit.
- Update styling and visual details, and find the exact SVG icons used in the example.
- Implement the drop-up '...' menu with functionality like export data, refresh component etc.
- Make responsive & organize into masonry layout
