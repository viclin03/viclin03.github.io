import{S as A,i as Y,s as C,k,a as _,q as H,l as x,m as D,c as P,r as R,h as I,n as b,b as T,G as W,J as $,H as S,K as M,o as j,u as q}from"../chunks/index.8feb9419.js";function F(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var v={};v.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];v.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];v.elizaQuits=["bye","goodbye","done","exit","quit"];v.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];v.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];v.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};v.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];v.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var a=v;function m(o){this.noRandom=!!o,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}m.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var o=0;o<a.elizaKeywords.length;o++){this.lastchoice[o]=[];for(var e=a.elizaKeywords[o][2],n=0;n<e.length;n++)this.lastchoice[o][n]=-1}};m.prototype._dataParsed=!1;m.prototype._init=function(){var o={};if(a.elizaSynons&&typeof a.elizaSynons=="object")for(var e in a.elizaSynons)o[e]="("+e+"|"+a.elizaSynons[e].join("|")+")";(!a.elizaKeywords||typeof a.elizaKeywords.length>"u")&&(a.elizaKeywords=[["###",0,[["###",[]]]]]);for(var n=/@(\S+)/,r=/(\S)\s*\*\s*(\S)/,i=/^\s*\*\s*(\S)/,f=/(\S)\s*\*\s*$/,l=/^\s*\*\s*$/,p=/\s+/g,y=0;y<a.elizaKeywords.length;y++){var d=a.elizaKeywords[y][2];a.elizaKeywords[y][3]=y;for(var e=0;e<d.length;e++){var u=d[e];if(u[0].charAt(0)=="$"){for(var h=1;u[0].charAt[h]==" ";)h++;u[0]=u[0].substring(h),u[2]=!0}else u[2]=!1;for(var t=n.exec(u[0]);t;){var g=o[t[1]]?o[t[1]]:t[1];u[0]=u[0].substring(0,t.index)+g+u[0].substring(t.index+t[0].length),t=n.exec(u[0])}if(l.test(u[0]))u[0]="\\s*(.*)\\s*";else{if(t=r.exec(u[0]),t){for(var s="",c=u[0];t;)s+=c.substring(0,t.index+1),t[1]!=")"&&(s+="\\b"),s+="\\s*(.*)\\s*",t[2]!="("&&t[2]!="\\"&&(s+="\\b"),s+=t[2],c=c.substring(t.index+t[0].length),t=r.exec(c);u[0]=s+c}if(t=i.exec(u[0]),t){var s="\\s*(.*)\\s*";t[1]!=")"&&t[1]!="\\"&&(s+="\\b"),u[0]=s+u[0].substring(t.index-1+t[0].length)}if(t=f.exec(u[0]),t){var s=u[0].substring(0,t.index+1);t[1]!="("&&(s+="\\b"),u[0]=s+"\\s*(.*)\\s*"}}u[0]=u[0].replace(p,"\\s+"),p.lastIndex=0}}if(a.elizaKeywords.sort(this._sortKeywords),m.prototype.pres={},m.prototype.posts={},a.elizaPres&&a.elizaPres.length){for(var w=new Array,e=0;e<a.elizaPres.length;e+=2)w.push(a.elizaPres[e]),m.prototype.pres[a.elizaPres[e]]=a.elizaPres[e+1];m.prototype.preExp=new RegExp("\\b("+w.join("|")+")\\b")}else m.prototype.preExp=/####/,m.prototype.pres["####"]="####";if(a.elizaPosts&&a.elizaPosts.length){for(var w=new Array,e=0;e<a.elizaPosts.length;e+=2)w.push(a.elizaPosts[e]),m.prototype.posts[a.elizaPosts[e]]=a.elizaPosts[e+1];m.prototype.postExp=new RegExp("\\b("+w.join("|")+")\\b")}else m.prototype.postExp=/####/,m.prototype.posts["####"]="####";(!a.elizaQuits||typeof a.elizaQuits.length>"u")&&(a.elizaQuits=[]),m.prototype._dataParsed=!0};m.prototype._sortKeywords=function(o,e){return o[1]>e[1]?-1:o[1]<e[1]||o[3]>e[3]?1:o[3]<e[3]?-1:0};m.prototype.transform=function(o){var e="";this.quit=!1,o=o.toLowerCase(),o=o.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),o=o.replace(/\s+-+\s+/g,"."),o=o.replace(/\s*[,\.\?!;]+\s*/g,"."),o=o.replace(/\s*\bbut\b\s*/g,"."),o=o.replace(/\s{2,}/g," ");for(var n=o.split("."),r=0;r<n.length;r++){var i=n[r];if(i!=""){for(var f=0;f<a.elizaQuits.length;f++)if(a.elizaQuits[f]==i)return this.quit=!0,this.getFinal();var l=this.preExp.exec(i);if(l){for(var p="",y=i;l;)p+=y.substring(0,l.index)+this.pres[l[1]],y=y.substring(l.index+l[0].length),l=this.preExp.exec(y);i=p+y}this.sentence=i;for(var d=0;d<a.elizaKeywords.length;d++)if(i.search(new RegExp("\\b"+a.elizaKeywords[d][0]+"\\b","i"))>=0&&(e=this._execRule(d)),e!="")return e}}if(e=this._memGet(),e==""){this.sentence=" ";var d=this._getRuleIndexByKey("xnone");d>=0&&(e=this._execRule(d))}return e!=""?e:"I am at a loss for words."};m.prototype._execRule=function(o){for(var e=a.elizaKeywords[o],n=e[2],r=/\(([0-9]+)\)/,i=0;i<n.length;i++){var f=this.sentence.match(n[i][0]);if(f!=null){var l=n[i][1],p=n[i][2],y=this.noRandom?0:Math.floor(Math.random()*l.length);this.noRandom&&this.lastchoice[o][i]>y||this.lastchoice[o][i]==y?(y=++this.lastchoice[o][i],y>=l.length&&(y=0,this.lastchoice[o][i]=-1)):this.lastchoice[o][i]=y;var d=l[y];if(this.debug&&alert(`match:
key: `+a.elizaKeywords[o][0]+`
rank: `+a.elizaKeywords[o][1]+`
decomp: `+n[i][0]+`
reasmb: `+d+`
memflag: `+p),d.search("^goto ","i")==0){var u=this._getRuleIndexByKey(d.substring(5));if(u>=0)return this._execRule(u)}var h=r.exec(d);if(h){for(var t="",g=d;h;){var s=f[parseInt(h[1])],c=this.postExp.exec(s);if(c){for(var w="",z=s;c;)w+=z.substring(0,c.index)+this.posts[c[1]],z=z.substring(c.index+c[0].length),c=this.postExp.exec(z);s=w+z}t+=g.substring(0,h.index)+s,g=g.substring(h.index+h[0].length),h=r.exec(g)}d=t+g}if(d=this._postTransform(d),p)this._memSave(d);else return d}}return""};m.prototype._postTransform=function(o){if(o=o.replace(/\s{2,}/g," "),o=o.replace(/\s+\./g,"."),a.elizaPostTransforms&&a.elizaPostTransforms.length)for(var e=0;e<a.elizaPostTransforms.length;e+=2)o=o.replace(a.elizaPostTransforms[e],a.elizaPostTransforms[e+1]),a.elizaPostTransforms[e].lastIndex=0;if(this.capitalizeFirstLetter){var n=/^([a-z])/,r=n.exec(o);r&&(o=r[0].toUpperCase()+o.substring(1))}return o};m.prototype._getRuleIndexByKey=function(o){for(var e=0;e<a.elizaKeywords.length;e++)if(a.elizaKeywords[e][0]==o)return e;return-1};m.prototype._memSave=function(o){this.mem.push(o),this.mem.length>this.memSize&&this.mem.shift()};m.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var o=Math.floor(Math.random()*this.mem.length),e=this.mem[o],n=o+1;n<this.mem.length;n++)this.mem[n-1]=this.mem[n];return this.mem.length--,e}else return""};m.prototype.getFinal=function(){return a.elizaFinals?a.elizaFinals[Math.floor(Math.random()*a.elizaFinals.length)]:""};m.prototype.getInitial=function(){return a.elizaInitials?a.elizaInitials[Math.floor(Math.random()*a.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(o){return this[this.length]=o});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var o=this[0],e=1;e<this.length;e++)this[e-1]=this[e];return this.length--,o});var B=m;const G=F(B);function K(o,e,n){const r=o.slice();return r[3]=e[n],r}function E(o){let e,n=o[3].text+"",r,i;return{c(){e=k("div"),r=H(n),this.h()},l(f){e=x(f,"DIV",{class:!0});var l=D(e);r=R(l,n),l.forEach(I),this.h()},h(){b(e,"class",i=o[3].sender+"-message svelte-1x89sme")},m(f,l){T(f,e,l),W(e,r)},p(f,l){l&1&&n!==(n=f[3].text+"")&&q(r,n),l&1&&i!==(i=f[3].sender+"-message svelte-1x89sme")&&b(e,"class",i)},d(f){f&&I(e)}}}function O(o){let e,n,r,i,f,l,p,y,d,u=o[0],h=[];for(let t=0;t<u.length;t+=1)h[t]=E(K(o,u,t));return{c(){e=k("div");for(let t=0;t<h.length;t+=1)h[t].c();n=_(),r=k("form"),i=k("input"),f=_(),l=k("button"),p=H("Send"),this.h()},l(t){e=x(t,"DIV",{class:!0});var g=D(e);for(let w=0;w<h.length;w+=1)h[w].l(g);n=P(g),r=x(g,"FORM",{class:!0});var s=D(r);i=x(s,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),f=P(s),l=x(s,"BUTTON",{type:!0,class:!0});var c=D(l);p=R(c,"Send"),c.forEach(I),s.forEach(I),g.forEach(I),this.h()},h(){b(i,"type","text"),b(i,"name","message"),b(i,"placeholder","Type your message..."),b(i,"class","svelte-1x89sme"),b(l,"type","submit"),b(l,"class","svelte-1x89sme"),b(r,"class","chat-input svelte-1x89sme"),b(e,"class","chatbot-container svelte-1x89sme")},m(t,g){T(t,e,g);for(let s=0;s<h.length;s+=1)h[s]&&h[s].m(e,null);W(e,n),W(e,r),W(r,i),W(r,f),W(r,l),W(l,p),y||(d=$(r,"submit",o[1]),y=!0)},p(t,[g]){if(g&1){u=t[0];let s;for(s=0;s<u.length;s+=1){const c=K(t,u,s);h[s]?h[s].p(c,g):(h[s]=E(c),h[s].c(),h[s].m(e,n))}for(;s<h.length;s+=1)h[s].d(1);h.length=u.length}},i:S,o:S,d(t){t&&I(e),M(h,t),y=!1,d()}}}function Q(o,e,n){let r=[];j(()=>{i("Hello! How can I help you today?")});function i(l){n(0,r=[...r,{text:l,sender:"bot"}])}function f(l){l.preventDefault();const p=l.target.elements.message,y=p.value.trim();if(y!==""){n(0,r=[...r,{text:y,sender:"user"}]),p.value="";const u=new G().transform(y);i(u)}}return[r,f]}class U extends A{constructor(e){super(),Y(this,e,Q,O,C,{})}}export{U as component};
