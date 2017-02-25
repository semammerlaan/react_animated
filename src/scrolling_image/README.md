
## Properties

Name          | Default     |  Type         | Description
--------------|-------------|---------------|-----------------------------------
image         | N/A         | Number(asset) | Image that will be translated.
color         | black       | String        | Background color for the image.
maxX          | 2500        | Number(dp)    | Max horizontal translation.
maxY          | 1000        | Number(dp)    | Max vertical translation.

## Examples
```
const fog = require('./fog.png');
/...
  render() {
    return (
      <View>
        <ScrollingImage image={fog} color='black'/>
      </View>
    );
  }
```
![](https://res.cloudinary.com/dnrciuoum/image/upload/v1484408579/scrolling_image_sxjqd5.gif)
