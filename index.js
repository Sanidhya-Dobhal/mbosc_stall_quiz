let questions = [
  {
    "questions": "Multiple Choice: The mascot of the Linux kernel is a:",
    "options": {
      "a": "Penguin",
      "b": "Robot",
      "c": "Dog",
      "d": "Dragon"
    },
    "answer": "a"
  },
  {
    "questions": "True or False: The \"golang\" command is used to compile Go programs.",
    "options": {
      "a": true,
      "b": false
    },
    "answer": "b"
  },
  {
    "questions": "Multiple Choice: A popular Linux distribution known for its user-friendliness and focus on beginners is:",
    "options": { 
      "a": "Arch Linux",
      "b": "Ubuntu",
      "c": "Gentoo",
      "d": "Fedora"
    },
    "answer": "b"
  },
  {
    "questions": "What language is Go written in?",
    "options": {
      "a": "Go and C#",
      "b": "C",
      "c": "C and Go",
      "d": "Rust"
    },
    "answer": "c"
  },
  {
    "questions": "Multiple Choice: Blender is a free and open-source software primarily used for what purpose?",
    "options": {
      "a": "Video editing",
      "b": "3D modeling and animation",
      "c": "Word processing",
      "d": "Web development"
    },
    "answer": "b"
  },
  {
    "questions": "Multiple Choice: LibreOffice is a fork (a variation) of which open-source office suite project?",
    "options": {
      "a": "Apache OpenOffice",
      "b": "Microsoft Office",
      "c": "Google Docs",
      "d": "WPS Office"
    },
    "answer": "a"
  },
  {
    "questions": "Approximately how many distros of Linux exist right now?",
    "options": {
      "a": "50",
      "b": "100",
      "c": "2500",
      "d": "600"
    },
    "answer": "d"
  },
  {
    "questions": "True or False : Android, the world's most popular mobile operating system, is based on the open-source Linux kernel. True or False?",
    "options": {
      "a": true,
      "b": false
    },
    "answer": "a"
  },
  {
    "questions": "Multiple Choice: Git, a popular version control system, is most known for allowing developers to:",
    "options": {
      "a": "Write and edit code collaboratively",
      "b": "Browse the internet anonymously",
      "c": "Design user interfaces",
      "d": "Securely transfer large files"
    },
    "answer": "a"
  },
  {
    "questions": "Multiple Choice: The document editor LibreOffice Writer can open and edit documents created in which popular file format?",
    "options": {
      "a": "Pages (.pages)",
      "b": "DOCX",
      "c": "ODT",
      "d": "XLSX"
    },
    "answer": "c"
  },
  {
    "questions": "Which of the following is NOT an open-source software?",
    "options": {
      "a": "MySQL",
      "b": "Photoshop",
      "c": "Linux",
      "d": "VLC media player"
    },
    "answer": "b"
  },
  {
    "questions": "True or False: Open-source software is inherently more secure than closed-source software because the code is publicly available.",
    "options": {
      "a": true,
      "b": false
    },
    "answer": "b"
  },
  {
    "questions": "Multiple Choice: Which open-source software recently was targeted and almost had exposed a backdoor to millions of devices using its system?",
    "options": {
      "a": "Package manager (e.g., APT, yum)",
      "b": "Kernel components",
      "c": "Compression library",
      "d": "Desktop environment (e.g., GNOME, KDE)"
    },
    "answer": "c"
  },
  {
    "questions": "Multiple Choice: Many popular apps and websites are built using free and open-source software.  Is this a good or bad thing for users?",
    "options": {
      "a": "Good - It often means more features and lower costs",
      "b": "Bad - It can be less secure",
      "c": "Unsure",
      "d": "Depends on the software"
    },
    "answer": "a"
  },
  {
    "questions": "True or False: Open-source software means anyone can see and even change the code that makes it work.",
    "options": {
      "a": true,
      "b": false
    },
    "answer": "a"
  },
  {
    "questions": "Multiple Choice:  Which of these is NOT typically a benefit of using open-source software?",
    "options": {
      "a": "It's free to use",
      "b": "There's a large community to help with problems",
      "c": "It's more secure because anyone can find flaws",
      "d": "It can be customized to fit specific needs"
    },
    "answer": "c"
  }
]

let start =0;
const cont = document.getElementById("cont");
var sub_but = document.getElementsByTagName("button")[0];
let rand_in =10000;//We set this value of rand_in as we do not want the questions to be removed when the click_eve is called for the first time and this solves the problem upto 10000 questions without needing an additional if-else block to check if the function is being called for the first time which is inefficient asa that condition would be checked for all the questions. 
let score =0;
let no_answered = 0;
function click_eve(){
  let ops = document.getElementsByTagName("input");
  for(i=0;i<ops.length;i++)
    if(ops[i].checked)
      if(ops[i].value === questions[rand_in]["answer"])
        document.getElementById("no_corr").innerText = ++score;
    questions.splice(rand_in,1);
  rand_in = Math.floor(Math.random() *questions.length);
  let typ;
  if(questions.length>0){
  typ = new Typed("#cont2",{
    strings:[`<span id ="the_question"><b>${questions[rand_in].questions}</b></span>
    <div id ="options_div">
    <div>
    <input type = "radio" name = "options" value = "a"><span>${questions[rand_in].options.a}<span/></input>
    </div>
    <div>
    <input type = "radio" name = "options" value="b"><span>${questions[rand_in].options.b}<span/></input>
    </div>
    <div>
    ${questions[rand_in].options.c===undefined? ``:`<input type = radio name = "options" value = "c"><span>${questions[rand_in].options.c}<span/></input>`}
    </div>
    <div>
    ${questions[rand_in].options.d===undefined? ``:`<input type = radio name = "options" value = "d"><span>${questions[rand_in].options.d}<span/></input>`}
    </div>
    </div>`],
    typeSpeed:10,
  onBegin:()=>{
    document.getElementById("submit_btn").removeEventListener("click",click_eve);
  },
  onComplete:()=>{
    document.getElementById("submit_btn").addEventListener("click",click_eve);
  }})
}
else{
  typ = new Typed("#cont",{
    strings:[``],
    typeSpeed:0,
    onComplete:function(){
      document.getElementById("cont").style.display = "flex";
      document.getElementById("cont").style.flexDirection ="column";
      document.getElementById("cont").style.justifyContent ="space-evenly"
      document.getElementById("cont").style.textAlign = "center";
      typ = new Typed("#cont",{
        strings:[`<b><span style = "color:rgb(64,233,38);">Congratulations!</span> You have attempted all questions.</b>
        <p>Click below to start a new game</p>
        `],
        typeSpeed:10,
        onComplete:function(){
          let sub_btn = document.getElementById("submit_btn");
          sub_btn.classList.add("ani_for_sub_but");
          sub_btn.innerText = "New Game";
          sub_btn.addEventListener("click",()=>{
          location.reload();
    });
        }
        });
      }
    })
  }
  document.getElementById("no_answered").innerText = no_answered++;
}
sub_but.addEventListener("click",click_eve);
click_eve();