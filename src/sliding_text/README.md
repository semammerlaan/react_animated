
## Properties
Name                | Default                  |  Type      | Description
--------------------|--------------------------|------------|------------------------------------------------
font                | N/A                      | Object     | See FontToJsvg utility from [media_utilities](https://github.com/Introvertuous/media_utilities).
letters             | N/A                      | Array      | Array of letter objects.
delay               | 0                        | Number(ms) | Delay before the animation begins.
stroke              | red                      | String     | Color for the letter's outline.

## Examples
```
//...

import {SlidingText} from 'react_native_animated';
const letter = SlidingText.createLetter;
const ttf = require('./benguiat.json');

//...

render () {
  const letters = [
    letter(-118, 94, 'S', -88, 94, 0.65, 7000),
    letter(-60, 54, 'T', -60, 84, 0.5, 5000),
    letter(-48, 84, 'R', -40, 84, 0.5, 4000),
    letter(-18, 84, 'A', -12, 84, 0.5, 4000),
    letter(18, 84, 'N', 13, 84, 0.5, 4000),
    letter(48, 84, 'G', 38, 84, 0.5, 4000),
    letter(64, 54, 'E', 64, 84, 0.5, 7000),
    letter(105, 166, 'R', 85, 166, 0.65, 5000),

    letter(-66, 106, 'T', -52, 106, 0.5, 4000),
    letter(-30, 141, 'H', -30, 106, 0.5, 5000),
    letter(-13, 106, 'I', -3, 106, 0.5, 4000),
    letter(10, 116, 'N', 10, 106, 0.5, 3000),
    letter(48, 106, 'G', 33, 106, 0.5, 4000),
    letter(60, 156, 'S', 60, 106, 0.5, 7000)
  ];

  return (
    <View>
      <SlidingText.component font={ttf} letters={letters}/>
    </View>
  )
}
```
![](https://res.cloudinary.com/dnrciuoum/image/upload/v1484408582/sliding_text_jaypzd.gif)
