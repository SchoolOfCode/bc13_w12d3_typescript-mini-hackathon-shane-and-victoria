the task for this afternoon (and you'll have a little bit of time tomorrow morning too) is to plan, design and build something using TypeScript. Treat it as a mini-hackathon and the aim is to practice TypeScript. Here's an empty repo as a starting point: https://classroom.github.com/a/WxbbNnc_ (so that you've got somewhere to keep your code/files).
For example, if you want to build something involving React (doesn't have to be), you can use the command you used earlier (from the docs) to have Create React App initialise your TypeScript project for you. (edited) 

PLAN
Keep it to just the frontend

IDEA
An app that uses api to predict your age based on name and another api that use name to predict gender. It gives you a little picture, according to your results. Cute!

FLOW
User puts their name into input box.
User clicks button 
The input value (name) is saved as a variable, and tagged onto the end of two things:

    1. A url that's used in a fetch request to the age prediction API and returns a number
    2. A url that's used in a fetch request to the gender prediction API and returns m/f
    
These answers are set to two different states which will be used to render two display components:

    1. a p tag saying the person's predicted age
    2. an image that is conditionally rendered depending on m/f, and young/medium/old

Styling: we can use probably most of the stuff that's default in CRA. 

Voila. 


COMPONENTS:

#APP
#INPUT - form (so inc button)
#RESULTS-DISPLAY
    #IMAGEDISPLAY (conditionally rendered) - stretch goal
    #AGEDISPLAY - MVP
#TOGGLEBUTTON (stetch goal to adjust dark/light mode)


PLAN:
    start just building it in app.js
    THEN start abstracting out into different components