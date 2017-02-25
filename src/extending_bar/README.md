
## Properties
Name                | Default                  |  Type      | Description
--------------------|--------------------------|------------|--------------------------------------------------------
delay               | 1000                     | Number(ms) | Initial delay before animation plays.
stroke              | '#de0e1b'                | String     | Color for the border.
fill                | 'transparent'            | String     | Color for the center section.
width               | 300                      | Number(dp) | Width of center section after animation.
borderWidth         | 1                        | Number(dp) | Width of the border.
centerHeight        | 6                        | Number(dp) | Height of the center section.
duration            | 2000                     | Number(ms) | The duration that the animation will take to complete.

## Examples
```
<ExtendingBar/>
<ExtendingBar fill={'green'}  stroke={'blue'} width={200}/>
<ExtendingBar stroke={'purple'} centerHeight={10} borderWidth={4} width={400}/>
<ExtendingBar stroke={'blue'} centerHeight={30} duration={1000}/>
<ExtendingBar stroke={'#64cdc8'} duration={6000}/>
```
![](https://res.cloudinary.com/dnrciuoum/image/upload/v1484408576/extending_bar_1_iadk7v.gif)
![](https://res.cloudinary.com/dnrciuoum/image/upload/v1484408576/extending_bar_2_sp23rg.gif)
![](https://res.cloudinary.com/dnrciuoum/image/upload/v1484408580/extending_bar_3_cfd8gz.gif)
![](https://res.cloudinary.com/dnrciuoum/image/upload/v1484408580/extending_bar_4_dogke9.gif)
![](https://res.cloudinary.com/dnrciuoum/image/upload/v1484408580/extending_bar_5_tuvz8r.gif)
