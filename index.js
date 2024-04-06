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
    "questions": "Multiple Choice: Android, the world's most popular mobile operating system, is based on the open-source Linux kernel. True or False?",
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
    "questions": "True or False: Open-source software means anyone can see and even change the code that makes it work.  (True)",
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
const cont = document.getElementById("cont");
var sub_but = document.getElementsByTagName("button")[0];
let rand_in =-1;
let sc =0;
let no_answered = 0;
function click_eve(){
  let ops = document.getElementsByTagName("input");
  for(i=0;i<ops.length;i++)
  {
    if(ops[i].checked)
    {
      if(ops[i].value === questions[rand_in]["answer"])
      {
        document.getElementById("no_corr").innerText = ++sc;
      }
    }
  }
  rand_in = Math.floor(Math.random() *questions.length);
  let typ = new Typed("#cont",{
    strings:[`<p id ="the_question"><b>${questions[rand_in].questions}</b></p>
    <input type = "radio" name = "options" value = "a"><span>${questions[rand_in].options.a}<span/></input>
    <br>
    <input type = "radio" name = "options" value="b"><span>${questions[rand_in].options.b}<span/></input>
    <br>
    ${questions[rand_in].options.c===undefined? ``:`<input type = radio name = "options" value = "c"><span>${questions[rand_in].options.c}<span/></input>`}
    <br>
    ${questions[rand_in].options.d===undefined? ``:`<input type = radio name = "options" value = "d"><span>${questions[rand_in].options.d}<span/></input>`}`],
    typeSpeed:10})
    document.getElementById("no_answered").innerText = no_answered++;
}
sub_but.addEventListener("click",click_eve);
click_eve();