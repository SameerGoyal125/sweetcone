var i=0;function increment(){i<98&&(i+=4,document.getElementById("number").innerHTML=i)}setInterval("increment()",50);const stringd=["S","w","e","e","t"," ","C","o","n","e"],colors=["#80B1FF","#C5C5FF","#A4A4F4","#FFD2EA","#FFC2DF","#FFA4D4","#FFCC99","#FFE98A","#79E8B3","#B3FFC7","#BBEFFF","#99E2FF"];var no,change=[100];function randomchange(){result="";for(let n in stringd)result+=stringd[n].fontcolor(colors[Math.floor(Math.random()*colors.length)]);document.getElementById("head").innerHTML=result,change=[100]}setInterval("randomchange()",500);const soon=["Coming on Solana","Coming shortly!"];var w=0;function textchange(){2==w&&(w=0),document.getElementById("coming").innerHTML=soon[w],w+=1}setInterval("textchange()",1e3);
