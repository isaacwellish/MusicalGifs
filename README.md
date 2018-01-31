# Gif Your World
A sound powered gif generator

Using the Giphy and wordassociations.net APIs, in conjunction with built in microphone capabilities in p5.js, this application can generate a never ending stream of gifs based on audio input.

The program takes a 3 second sample from the user's computer mic and determines the "energy level" based on the loudness of the user's environment. Based on predefined input words that are set to three energy level variables high, mid and low such as "walking", "jogging", and "sprinting", the program will enter the corresponding input word into Gihpy's API and spit out a random gif within the search for that word. For example if the energy level was high and the corresponding input word was "sprinting", a search for sprinting would be entered into Giphy's database and a random result would be selected. At this point, the program takes the selected word and using the Word Associations API, enters it into the database, returns ten results related the word, picks a word at random, enters it into a Giphy search. For example if the word "sprinting" was entered, after a sprinting related gif is shown, the word sprinting is searched through the Word Associations API, ten words related to sprinting are returned and one of them is chosen at random, say the word "tired" at which this new word is entered into a new Giphy search where a random gif is selected and shown. The process loops on for a minute until the microphone takes another 3 second sample of the user's environment and starts the process from the beginning.

Find a functional version of the application here: https://bit.ly/gifyourworld

To run the application on your computer:

1. Register for your own API keys on https://developers.giphy.com/ (GIPHY API KEY) as well as https://wordassociations.net/en/api (WORD ASSOCIATIONS API KEY)

2. Clone the project

3. Open the sketch.js file within the projectMain folder in a text editor

4. Enter your API keys in the variables labled "API"

5. You can now run the project on a local server and the application should work in your browser

6. To calibrate threshholds for your microphone, use console.log(mic.getLevel()) to measure microphone levels and find the right thresholds for you 

7. Change input words corresponding to mic levels in the high mid and lowEnergy variables at the top.

Enjoy!




