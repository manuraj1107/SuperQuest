const data = [
    {
    id: 1,
    query: "switch is not exported from react-router-dom",
    output: {
        sourceName:'stackoverflow',
        link: 'https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom',
        tag: 'article',
        titleAns: 'Using Routes instead of Switch in react-router v6',
        description: 'You are using react-router-dom version 6, which replaced Switch with the Routes component',
        code: 
`import {BrowserRouter, Routes,  Route,} from "react-router-dom";
             // instead of "Switch"
    return(){             
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>
}`,
     }
    },
    {
   id: 2,
   query: "how to solve the cors error",
   output: {
    sourceName:'youtube',
    link: 'https://www.youtube.com/watch?v=qnA_h_PzJD0',
    tag: 'video',
    titleAns: 'how to solve the CORS error',
    description: 'Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.',
    },
    },
{
    id: 3,
    query: "How to get video duration of a video file during input",
    output: {
    sourceName: 'stackoverflow', 
    link: 'https://stackoverflow.com/questions/29285056/get-video-duration-when-input-a-video-file',
    tag: 'stackoverflow',
    titleAns: 'Get video duration when input a video file',
    description: "In modern browsers, You can use the URL API's URLcreateObjectURL() with an non appended video element to load the content of your file",
    code: `
var myVideos = [];
window.URL = window.URL || window.webkitURL;

document.getElementById('fileUp').onchange = setFileInfo;

  function setFileInfo() {
    var files = this.files;
    myVideos.push(files[0]);
    var video = document.createElement('video');
    video.preload = 'metadata';

     video.onloadedmetadata = function() {
      window.URL.revokeObjectURL(video.src);
      var duration = video.duration;
      myVideos[myVideos.length - 1].duration = duration;
   updateInfos();
   }

    video.src = URL.createObjectURL(files[0]);;
  }


    function updateInfos() {
      var infos = document.getElementById('infos');
      infos.textContent = "";
      for (var i = 0; i < myVideos.length; i++) {
        infos.textContent +=
         myVideos[i].name + 
         " duration: " + 
         myVideos[i].duration + '\n';
           }
     }`
,
    }
    },
{
    id: 4,
    query: "how to solve ceasers cypher problem with js",
    output: {
    sourceName: 'stackoverflow',
    link: 'https://stackoverflow.com/questions/44232645/caesar-cipher-in-javascript',
    tag: 'article',
    titleAns: 'Caesar Cipher in Javascript',
    description: 'Using modulus operator; makes the sentence uppercase',
    code: `
function cipherRot13(str) {
str = str.toUpperCase();
return str.replace(/[A-Z]/g, rot13);

function rot13(correspondance) {
const charCode = correspondance.charCodeAt();
//A = 65, Z = 90
return String.fromCharCode(
  ((charCode + 13) <= 90) ? charCode + 13
    : (charCode + 13) % 90 + 64
);}
}`,
 }
},
  {
    id: 6,
    query: "javascript regular expression remove spaces",
    output: {
        sourceName:"stackoverflow",
        link: "https://stackoverflow.com/questions/7151159/javascript-regular-expression-remove-spaces",
        tag: "article",
        titleAns: "use the literal notation, and the s character class:",
        description:
          "You are using react-router-dom version 6, which replaced Switch with the Routes component",
        code: `
//..
 return str.replace(/\s/g,'');
//..
              `,
    },
  },
  {
    id: 7,
    query: "javascript array methods",
    output: {
        sourceName:"youtube",
        link: "https://www.youtube.com/watch?v=BLIrBThPTXc",
        tag: "video",
        titleAns: "JavaScript Array Methods | JavaScript Tutorial in Hindi #17",
        description:
          "JavaScript Array Methods | JavaScript Tutorial in Hindi #17",
        code: `
//..
 return str.replace(/\s/g, '');
//..
              `,
    },
  },
  {
    id: 8,
    query: "access token with jwt grant",
    output: {
        sourceName:"Medium",
        link: "https://medium.com/swlh/all-you-need-to-know-about-json-web-token-jwt-8a5d6131157f#:~:text=JSON%20Web%20Token%20helps%20to,and%20not%20an%20encrypted%20one.",
        tag: "blog",
        titleAns: "Best Guide to JSON Web Token (JWT)",
        description:
          "JSON Web Token helps to maintain the integrity and authenticity of the information because it is digitally signed using secret or public/private key....",
        code: "",
    },
  },
  {
    id: 9,
    query: "java dsa interview questions",
    output: {
        sourceName:"interviewbit",
        link: "https://www.interviewbit.com/data-structure-interview-questions/",
        tag: "website",
        titleAns: "Data Structure Interview Questions",
        description: "Data Structure Interview Questions",
        code: "",
    },
  },
  {
    id: 10,
    query: "js string manipulation",
    output: {
     sourceName:"w3schools",
        link: "https://www.w3schools.com/js/js_string_methods.asp",
        tag: "website",
        titleAns: "JavaScript String Methods",
        description: "JavaScript String Methods",
        code: "",
    },
  },
];

export default data;
