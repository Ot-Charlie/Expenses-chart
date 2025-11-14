# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](./Screenshot_14-11-2025_213435_127.0.0.1.jpeg.jpg)


### Links

- Solution URL: [https://github.com/Ot-Charlie/Expenses-chart]
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- JSON data



### What I learned
This was my first time working with a JSON file. I learnt how to import the data and utilize it in realtime. 
I am particularly proud of how I coded the tooltip so as to position itself relative to it's bar.

To see how you can add code snippets, see below:

```html
<div class="bar-container">
        <div id="bar-chart">
          <span class="tooltip"></span>
        </div>
        <p>mon</p>
      </div>
```
```css

```
```js
    const maxAmount = Math.max(...data.map(d => d.amount));
    
    bars.forEach((bar, index) => {
      const amount = data[index].amount;
      const heightPercent = (amount / maxAmount) * 100;
      bar.style.height = `${heightPercent}%`;
```



### Continued development
I made a lot of errors in my styling with I think affected my responsiveness. I hope to keep working on that and improve. Also I hope to work with more dynamic data such as JSON so I can get used to it.

### Useful resources

- [Claude AI]- A good companion who guided me efficiently on how to implemnt and use the JSON data.

## Author

- Website - [Onwuli Charles](https://onwuli-charles.netlify.app)
- Frontend Mentor - [Ot.charlie](https://www.frontendmentor.io/profile/ot.charlie)
- Twitter - [Charle3](https://www.twitter.com/kingcharlie01)


