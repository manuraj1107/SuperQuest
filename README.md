## SuperQuest

#### SuperQuest is a web-App and browser-based extension which is solving for searching quick and optimal answers/solutions of the User's problem on a single page.

<hr />


### Installation

1. fork the repository
2. Open your terminal and paste 
```
git clone git@github.com:manuraj1107/SuperQuest.git
```

3. To install the package and dependencies

```
cd SuperQuest/
npm i
```

4. For the WebApp

```
npm run dev
```

#### For Installing chrome extension

1. run the command in the terminal

```
 npm run build

```


2. This will create the <b>dist</b> named folder

3. Open your Web browser

4. goto settings> manage extension> developer mode on> load unpacked> goto your project directory>select dist folder> click upload>now pin the extension


#### NOTE
We hard-coded our own Custom Api because Currently our dyanamic Api was not working properly 
so here we fetching data with Custom Api just to show what we wanted the solution to work like, or how we want the problem to solved , In the upcoming days we are adding the  features like Bookmark, Authentication, inside extension vertical tabs, improve the function of our dynamic API

Current Version has the  limited possibilities, Still you can search the common error and questions like:

1. cors or how to solve the cors error
2. How to get video duration of a video file during input
3. how to solve ceasers cypher problem with js
4. javascript regular expression remove spaces

we trying to make things more better, This is it Stay Tuned!
<hr />


### Problem
Most developers find answers on Stackoverflow, can there be a quicker solution for searching on Stackoverflow (Maybe through extension only), Save some time on searching, copying, etc? StackOverflow or Error query web app as an extension, just copy the code-error and paste it to the extension and get results (doc, videos, etc), Save time from opening lots of tabs.

### Solution

1. we are trying to bring the best and optimal solution for the user query.
and in the future, we can merge all the data into our DB and through our DB we can show the best results to lower the user's time of the search. and we can add bookmark features, vertical tab functionality, and many more so that users can save time.

2. show the searching functionality by searching on the UI and the extension and also show the API containing data.superquest is trying to minimize the time of search and give the optimized solution.


