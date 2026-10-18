/* ponytail: static bilingual copy; no translation service, tracking or storage. */
'use strict';
(() => {
  const english = {
    opAd:'Ad made in Shortforme',opData:'Years of accumulated data',opCore:'We run your campaigns',opMethod:'Proven campaign method',opLive:'Campaign running',opF1:'Ad as it is',opF2:'We run it',opF3:'Results managed',
    sfTagMotion:'Concept motion',mkA:'Product photos',mkB:'Key strength',mkC:'On-screen person',mkD:'Chosen format',mkS1:'No more storage hassle',mkS2:'Individually packed, easy',mkS3:'Meet it today',mkP1:'Plan',mkP2:'Scenes',mkP3:'Captions',mkP4:'Done',
    bpPage:'Oddsignal ventures',bpMore:'Learn more',bpSfLead:'Short-form ads for your brand',bpSf1:'Everyone needs <br>short-form ads now',bpSf2:'Proven references, <br>easy for anyone',bpSf3:'Why Oddsignal?',
    bpSf1p:'Video is now something small brands and local shops need too. But it is a field with a wide information gap: hard for non-specialists, with prices that vary enormously. And while short-form ad tools abound abroad, formats built to persuade Korean consumers are hard to find.',
    bpSf2p:'Built on data from years of growing creators and brands on social media, we offer ad formats proven in the Korean market. With no video expertise, you enter your brand details, get an illustrated storyboard, and edit the elements yourself to finish your short-form ad. From there, we are extending into a campaign service that puts our operating know-how to work for low cost and high efficiency.',bpHt1:'Learning becomes a habit. <br>Experience sets the standard',bpHt1p:'Hightemp is an online fitness education brand featuring Park Jaehun’s Allright Class. You take lessons on web and mobile, get 1:1 feedback, and carry what you learn into real training.',bpHt2:'Same time spent, <br>different results',bpHt2p:'Hightemp gives you today’s routine, built on the knowledge of Korea’s No. 1 bodybuilder, and data that grows more accurate as it builds helps you find your own way. Available on the web and in the iOS and Android apps.',
    bpSf3Letter:'Drawing on the success of dozens of creator products and years of data from the content commerce ecosystem, we provide proven ad creative formats, not videos that merely look good.<br>As a marketer and video creator with AX (AI Transformation) experience at a unicorn startup, I aim to resolve the information asymmetry in persuading the public through video.',bpSf3Sign:'Oddsignal FOUNDER.',
    bvNeedA:'Brands',bvNeedB:'Local shops',bvNeedC:'Individuals',bvMake0:'Pick a reference',bvRefCta:'Make my brand ad',bvFormUrl:'Product link URL',bvFormGo:'Import',bvFormA:'Product name',bvFormB:'Key strengths',bvFormC:'Details',bvMakeA:'Your brand details',bvMakeB:'Review storyboard',bvMakeC:'Done',bvVennA:'Marketing<br>Data',bvVennB:'Video<br>Creator',bvVennC:'Development<br>Experience',
    skip:'Skip to content',navVentures:'Ventures',navApproach:'Approach',navAbout:'About',navContact:'Contact',
    hero1:'From the signal',hero2:'others missed,',hero3:'we begin.',
    heroBody:'At every crossroads of change, a small signal that feels different.<br>Oddsignal turns it into growth.',
    heroCta:'Our ventures',contactCta:'Let’s talk',concept:'From brief to scenes · Creative workflow',heroFoot:'We build ideas, operate them, and make the next version better.',
    sfTab1:'About Shortforme',sfTab2:'Pick an ad format',sfTab3:'Plan by chat',
    sf1Title:'Pick a curated ad',sf1Body:'Preview ad examples and choose the format that fits your product.',
    sf2Title:'Start from a real ad',sf2Body:'Browse real short-form ads by industry and see when each one works best. Press ‘Design with this format’ on the one you like and production starts, fitted to your product.',
    
    sf3Title:'Decide what to make, just by talking',sf3Body:'Tell us about your brand, your product and the moment you want to sell in. The AI recommends the right creative and takes it into production.',
    sf4Title:'Your ad as it is, run by us',sf4Body:'We run campaigns for the ads you make in Shortforme, as they are, using years of accumulated data and a proven campaign method.',
    
    htTab1:'App',htTab2:'Plan',htTab3:'Learn & lift',htTagSample:'App screen · sample data',htTagCompose:'App screen, composed example',
    ht1Title:'Watch lessons, get feedback',ht1Body:'Take lessons on web and mobile, and get 1:1 feedback.',
    ht2Title:'Learning becomes a habit.<br>Experience sets the standard.',ht2Body:'Get today’s routine, built on the knowledge of Korea’s No. 1 bodybuilder.',
    ht3Title:'Same time spent, different results',ht3Body:'Data that gets more accurate as it builds,<br>so you can find your own way.',
    prEyebrow:'01 — MARKETING TRACK RECORD',prTitle:'The <em>experience</em> of turning <br>small-brand potential into results',
    prLead:'Helping good products reach more people.<br>We connect content, technology and the work in between.',
    prTag:'Growth concept',prP1y:'2022',prP2y:'2023',prP3y:'2024',prP4y:'2026',prP5y:'NOW',
    prP1t:'Creator marketing agency MOMENTO',prP1d:'Founded',
    prP2t:'Brand commerce BRAVECOMPANY',prP2d:'Acquired, then exit',
    prP3t:'Content commerce NEWPEAK',prP3d:'Co-founder<b>KRW 1B in sales in the first year</b>',
    prP4t:'NEWPEAK Co., Ltd.',prP4d:'Reached a KRW 10B valuation, then exit',
    prP5t:'Oddsignal',prP5d:'AI marketing platform<b>FOUNDER</b>',
    prNote:'The curve and the heights of the points are a concept of growth, not actual figures.',
    venturesTitle:'Two ventures.<br><em>One point of view.</em>',venturesBody:'Creating and operating belong together.<br>We learn by doing both.',frame1:'A real product',frame2:'A brand story',frame3:'A short film',shortVisualFoot:'A short story that starts with a good product.',shortName:'Shortforme',
    shortTitle:'Short-form ads for your brand',shortBody:'Everyone needs short-form ads now.<br>We provide video production tools proven in the Korean ad ecosystem.',shortTag1:'Product-led planning',shortTag2:'Scene-by-scene review',inService:'Live',shortCta:'Shortforme.kr',
    highVisualFoot:'Where knowledge becomes practice.',highName:'Hightemp',highTitle:'A change in your life. Value beyond it.',highBody:'A fitness education brand featuring Park Jaehun’s Allright Class. Classes and feedback across web and mobile help connect learning with real training.',highTag1:'Online classes',highTag3:'Feedback',brandSite:'Brand website',highCta:'HIGHTEMP.co.kr',newTab:' (opens in a new tab)',
    approachTitle:'So ideas turn<br><em>straight into action.</em>',
    step1:'Understand.',step1Body:'Start with the product, the customer and the problem worth solving.',step2:'Execute right away.',step2Body:'Find the message. Turn it into content and a useful product.',step3:'Check it ourselves.',step3Body:'Check the actual experience and output. Refine the details.',step4:'Improve.',step4Body:'Bring what we learn from operations into the next iteration.',
    aiTitle:'Building with AI, thoughtfully.',aiBody:'We are preparing an operating system that connects Claude to development, planning, quality review and analysis. People remain responsible for key decisions and review before publication.',aiStatus:'Planned direction',
    aboutTitle:'Made by a creator.<br><em>Built to operate.</em>',aboutBody1:'Oddsignal is an independent studio rooted in marketing and video production. We create content, operate customer-facing experiences, and build the tools that the work calls for.',aboutBody2:'We bring Hightemp’s web and app operating experience together with Shortforme’s creative-tool development, exploring how a small team can consistently make good work.',founder:'Yeowoon Yoo',
    contactTitle:'Let’s make<br><em>the next story.</em>',contactBody:'For conversations about brands, content and new possibilities.',footerStatement:'New possibilities between content and technology.',backTop:'Back to top',company:'Oddsignal · Founder Yeowoon Yoo<br>Business registration 393-08-03564 · Pyeongchang, South Korea'
  };
  const labels = {home:'Oddsignal home',nav:'Main navigation',language:'Select language',menu:'Open menu',scroll:'Explore our ventures',shortVisual:'Conceptual Shortforme workflow: product, scenes and film',prGraphA:'Concept graph of steep growth from 2022 to now: MOMENTO founded, Brave Company exit, NEWPEAK co-founder with KRW 1B first-year sales, NEWPEAK exit at a KRW 10B valuation, Oddsignal founder',sfDeck:'Shortforme feature preview',sfMakeArt:'Concept motion: product photos, key strength, on-screen person and the chosen format come together into a vertical short-form ad, scene by scene',sfRunArt:'Concept motion: the ad made in Shortforme goes as it is into campaign operations run with years of accumulated data and a proven campaign method',htDeck:'Hightemp app feature preview',htTabs:'Hightemp app preview steps',sfTabs:'Shortforme preview steps',sfIntroArt:'Shortforme logo: a coral app icon beside the ShortForMe wordmark',email:'Email Oddsignal',bvNeed:'Small brands, local shops and individuals now need short-form ads on Instagram, YouTube, TikTok and X',bvMake:'Four steps: pick a reference (one of nine ad examples opens large, shows ROAS 400%, and its ‘Make my brand ad’ button is pressed), your brand details (paste a product link and the photo and details fill in), review the storyboard (three illustrated frames), done (the short-form ad plays)',bvVenn:'Marketing data, video creation and development experience overlap in one person',sfLogoLink:'Shortforme.kr (new tab)',htIosLink:'Get the Hightemp iOS app on the App Store (new tab)',htPlayLink:'Get the Hightemp Android app on Google Play (new tab)'};
  const altEn = {htStageAlt:'Face and upper body of an athlete shouting with a raised fist on a bodybuilding competition stage',sfChatAlt:'Actual Shortforme creative planning chat: the question “What shall we make?”, three starter prompts and the message box below',sfCharAlt:'Actual Shortforme create screen: choosing a character sheet from virtual person presets',sfFormatAlt:'Actual Shortforme ad example detail: a real ad video for a ready-to-cook product, notes on when to use it and what to look for, and the Design with this format button',appAlt:'Hightemp’s public class and feedback app presentation',htRoutineAlt:'Park Jaehun running on a treadmill in a dark gym, seen from behind, beside a phone playing a class in the Hightemp app',htBuilderAlt:'A phone floating in the middle of a dark gym, showing the routine builder of the Hightemp app with a chest muscle anatomy view',htLessonAlt:'Park Jaehun, seen from behind lifting dumbbells, with the Allright Class Full and Chapter packages and a shoulder training question card',};
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const korean = new Map(nodes.map(node => [node,node.innerHTML]));
  const labelNodes = [...document.querySelectorAll('[data-label]')];
  const koreanLabels = new Map(labelNodes.map(node => [node,node.getAttribute('aria-label')]));
  const altNodes = [...document.querySelectorAll('[data-alt]')];
  const koreanAlts = new Map(altNodes.map(node=>[node,node.alt]));
  const originalTitle=document.title;
  const description=document.querySelector('meta[name="description"]');
  const originalDescription=description.content;
  const root=document.documentElement,pageLinks=[...document.querySelectorAll('a[data-page]')];
  const nav=document.querySelector('.nav');
  const menu=document.querySelector('.menu-toggle');
  let current='ko';
  function closeMenu(returnFocus=false){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',current==='en'?'Open menu':'메뉴 열기');if(returnFocus)menu.focus();}
  function setLanguage(lang,updateUrl=false){
    current=lang==='en'?'en':'ko';
    nodes.forEach(node=>{node.innerHTML=current==='en'?english[node.dataset.i18n]:korean.get(node);});
    labelNodes.forEach(node=>node.setAttribute('aria-label',current==='en'?labels[node.dataset.label]:koreanLabels.get(node)));
    altNodes.forEach(node=>{node.alt=current==='en'?(altEn[node.dataset.alt]||koreanAlts.get(node)):koreanAlts.get(node);});
    document.documentElement.lang=current;
    document.title=current==='en'?(root.dataset.titleEn||'Oddsignal — From the signal others missed, we begin.'):originalTitle;
    description.content=current==='en'?(root.dataset.descEn||'An independent Korean studio connecting content and technology. Discover Shortforme and Hightemp.'):originalDescription;
    // Links to the other page carry the chosen language along.
    pageLinks.forEach(link=>{link.href=link.dataset.page+(current==='en'?'?lang=en':'')+(link.dataset.hash||'');});
    document.querySelectorAll('[data-lang]').forEach(link=>{if(link.dataset.lang===current)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');});
    closeMenu();
    if(updateUrl){const url=new URL(location.href);url.searchParams.set('lang',current);history.pushState({lang:current},'',url);}
  }
  document.querySelectorAll('[data-lang]').forEach(link=>link.addEventListener('click',event=>{if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button!==0)return;event.preventDefault();setLanguage(link.dataset.lang,true);}));
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('is-open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',current==='en'?(open?'Close menu':'Open menu'):(open?'메뉴 닫기':'메뉴 열기'));});
  nav.addEventListener('click',event=>{const link=event.target.closest('a');if(!link)return;closeMenu();const target=link.hash&&document.querySelector(link.hash);if(target){target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true')closeMenu(true);});
  window.addEventListener('popstate',()=>setLanguage(new URL(location.href).searchParams.get('lang')));
  // Preview decks (Shortforme, Hightemp): manual tabs + auto advance that stops on the first interaction.
  document.querySelectorAll('.sf-deck').forEach(deck=>{
    const tabs=[...deck.querySelectorAll('[role=tab]')],slides=[...deck.querySelectorAll('.sf-slide')];
    const panes=[...(deck.closest('.venture')||deck).querySelectorAll('.sf-pane')];
    const calm=matchMedia('(prefers-reduced-motion: reduce)');
    let index=0,timer=0,visible=false,touched=false;
    const show=(i,focus)=>{index=(i+slides.length)%slides.length;slides.forEach((slide,n)=>{slide.hidden=n!==index;});panes.forEach((pane,n)=>pane.classList.toggle('is-on',n===index));tabs.forEach((tab,n)=>{tab.setAttribute('aria-selected',String(n===index));tab.tabIndex=n===index?0:-1;});if(focus)tabs[index].focus();};
    const stop=()=>{clearInterval(timer);timer=0;};
    const run=()=>{stop();if(touched||!visible||document.hidden||calm.matches)return;timer=setInterval(()=>show(index+1),5500);};
    const touch=()=>{touched=true;stop();};
    tabs.forEach((tab,n)=>tab.addEventListener('click',()=>{touch();show(n);}));
    // Mouse users: the left and right thirds of the image are click zones (an arrow shows on hover). A click that ends a drag is the swipe, not a second step.
    let swipedAt=0;deck.querySelectorAll('.deck-zone').forEach(zone=>zone.addEventListener('click',()=>{if(performance.now()-swipedAt<400)return;touch();show(index+Number(zone.dataset.dir));}));
    deck.addEventListener('keydown',event=>{if(!event.target.matches('[role=tab]'))return;const keys={ArrowRight:index+1,ArrowLeft:index-1,Home:0,End:slides.length-1};if(!(event.key in keys))return;event.preventDefault();touch();show(keys[event.key],true);});
    deck.addEventListener('pointerenter',touch);deck.addEventListener('focusin',touch);
    // Swipe: touch anywhere on the banner, mouse drag on the image only (so text stays selectable).
    const banner=deck.closest('.venture')||deck;let startX=null,startY=0;
    banner.addEventListener('pointerdown',e=>{startX=e.pointerType==='mouse'&&!deck.contains(e.target)?null:e.clientX;startY=e.clientY;});
    banner.addEventListener('pointerup',e=>{if(startX===null)return;const dx=e.clientX-startX,dy=e.clientY-startY;startX=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){swipedAt=performance.now();touch();show(index+(dx<0?1:-1));}});
    banner.addEventListener('pointercancel',()=>{startX=null;});
    document.addEventListener('visibilitychange',run);
    if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;run();},{threshold:.5}).observe(deck);
  });
  // Hightemp slider: swipeable track with arrows and dots; the caption beside it follows the slide.
  document.querySelectorAll('.ht-carousel').forEach(deck=>{
    const track=deck.querySelector('.ht-track'),slides=[...track.children],dots=[...deck.querySelectorAll('.ht-dot')],caps=[...deck.closest('article').querySelectorAll('.sf-pane')];
    const calm=matchMedia('(prefers-reduced-motion: reduce)');
    let index=0,timer=0,visible=false,touched=false;
    const mark=i=>{index=i;dots.forEach((d,n)=>d.setAttribute('aria-current',String(n===i)));caps.forEach((c,n)=>c.classList.toggle('is-on',n===i));};
    const go=i=>{i=(i+slides.length)%slides.length;track.style.setProperty('--i',i);mark(i);};
    const stop=()=>{clearInterval(timer);timer=0;};
    const run=()=>{stop();if(touched||!visible||document.hidden||calm.matches)return;timer=setInterval(()=>go(index+1),5500);};
    const touch=()=>{touched=true;stop();};
    let startX=null;track.addEventListener('pointerdown',e=>{startX=e.clientX;});track.addEventListener('pointerup',e=>{if(startX===null)return;const dx=e.clientX-startX;startX=null;if(Math.abs(dx)>40){touch();go(index+(dx<0?1:-1));}});
    deck.querySelectorAll('.ht-arrow,.deck-zone').forEach(b=>b.addEventListener('click',()=>{touch();go(index+Number(b.dataset.dir));}));
    dots.forEach((d,n)=>d.addEventListener('click',()=>{touch();go(n);}));
    track.addEventListener('keydown',event=>{const keys={ArrowRight:index+1,ArrowLeft:index-1};if(!(event.key in keys))return;event.preventDefault();touch();go(keys[event.key]);});
    deck.addEventListener('pointerenter',touch);deck.addEventListener('focusin',touch);track.addEventListener('touchstart',touch,{passive:true});
    document.addEventListener('visibilitychange',run);
    if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;run();},{threshold:.5}).observe(deck);
  });
  // Track-record graph: hovering or focusing a dot or its label lights that label up.
  (()=>{
    const graph=document.querySelector('.pr-graph');if(!graph)return;
    const dots=[...graph.querySelectorAll('.pr-dot')],hits=[...graph.querySelectorAll('.pr-hit')],items=[...document.querySelectorAll('.pr-points li')];
    const on=i=>{items.forEach((li,n)=>li.classList.toggle('is-on',n===i));dots.forEach((d,n)=>d.classList.toggle('is-on',n===i));};
    hits.forEach((hit,i)=>{hit.addEventListener('pointerenter',()=>on(i));hit.addEventListener('pointerleave',()=>on(-1));});
    items.forEach((li,i)=>{li.tabIndex=0;li.addEventListener('pointerenter',()=>on(i));li.addEventListener('pointerleave',()=>on(-1));li.addEventListener('focus',()=>on(i));li.addEventListener('blur',()=>on(-1));});
  })();
  // Hero: one dot grid covers the whole first section. A slow fluid field moves the grid like the surface of water, and the logo is drawn in the same grid as halftone spheres, so it ripples with the field instead of floating on top of it. The pointer only adds a gentle wake.
  (()=>{
    const hero=document.querySelector('.hero'),canvas=hero&&hero.querySelector('.hero-fluid'),slot=hero&&hero.querySelector('.hero-logo-slot'),copy=hero&&hero.querySelector('.hero-copy');
    const ctx=canvas&&canvas.getContext&&canvas.getContext('2d');if(!ctx||!slot||!copy||typeof Path2D==='undefined')return;
    const calm=matchMedia('(prefers-reduced-motion: reduce)'),INK='#f4f1ea',ACCENT='#eb5d28',TAU=6.2832;
    // Logo geometry in the favicon's 64-unit grid: a ring of twelve dots plus the orange signal dot; the drawing is centred on (30,30.5) and spans 50 units.
    const RING=[[20,20],[28,20],[36,20],[12,28],[44,28],[12,36],[44,36],[12,44],[44,44],[20,52],[28,52],[36,52]],SIGNAL=[47,10];
    // Light from the upper left, used to shade each logo dot as a sphere.
    const LX=-.42,LY=-.52,LZ=Math.sqrt(1-LX*LX-LY*LY);
    let W=0,H=0,S=0,CS=10,cw=0,ch=0,dpr=1,u,v,u0,v0,tmp,div,fade,dots=[],box=null,t=0;
    const ptr={x:0,y:0,px:0,py:0,on:false,moved:false};
    const bnd=(b,x)=>{for(let i=1;i<=W;i++){x[i]=b===2?-x[i+S]:x[i+S];x[i+S*(H+1)]=b===2?-x[i+S*H]:x[i+S*H];}
      for(let j=1;j<=H;j++){x[S*j]=b===1?-x[1+S*j]:x[1+S*j];x[W+1+S*j]=b===1?-x[W+S*j]:x[W+S*j];}};
    const advect=(b,d,d0)=>{for(let j=1;j<=H;j++)for(let i=1;i<=W;i++){const k=i+S*j;let x=i-u0[k],y=j-v0[k];
        x=x<.5?.5:x>W+.5?W+.5:x;y=y<.5?.5:y>H+.5?H+.5:y;const i0=x|0,j0=y|0,s=x-i0,r=y-j0,a=i0+S*j0;
        d[k]=(1-s)*((1-r)*d0[a]+r*d0[a+S])+s*((1-r)*d0[a+1]+r*d0[a+S+1]);}bnd(b,d);};
    const project=()=>{const p=tmp;for(let j=1;j<=H;j++)for(let i=1;i<=W;i++){const k=i+S*j;div[k]=-.5*(u[k+1]-u[k-1]+v[k+S]-v[k-S]);p[k]=0;}
      bnd(0,div);bnd(0,p);
      for(let n=0;n<12;n++){for(let j=1;j<=H;j++)for(let i=1;i<=W;i++){const k=i+S*j;p[k]=(div[k]+p[k-1]+p[k+1]+p[k-S]+p[k+S])*.25;}bnd(0,p);}
      for(let j=1;j<=H;j++)for(let i=1;i<=W;i++){const k=i+S*j;u[k]-=.5*(p[k+1]-p[k-1]);v[k]-=.5*(p[k+S]-p[k-S]);}bnd(1,u);bnd(2,v);};
    const push=(cx,cy,r,fu,fv)=>{const r2=r*r,i0=Math.max(1,cx-2*r|0),i1=Math.min(W,cx+2*r+1|0),j0=Math.max(1,cy-2*r|0),j1=Math.min(H,cy+2*r+1|0);
      for(let j=j0;j<=j1;j++)for(let i=i0;i<=i1;i++){const k=i+S*j,dx=i-cx,dy=j-cy,w=Math.exp(-(dx*dx+dy*dy)/r2);u[k]+=fu*w;v[k]+=fv*w;}};
    const layout=()=>{const cb=canvas.getBoundingClientRect();if(!cb.width||!cb.height)return false;
      dpr=Math.min(2,devicePixelRatio||1);cw=cb.width;ch=cb.height;canvas.width=Math.round(cw*dpr);canvas.height=Math.round(ch*dpr);
      CS=cw<761?5.5:Math.max(9,Math.round(cw/160));W=Math.ceil(cw/CS);H=Math.ceil(ch/CS);S=W+2;const n=S*(H+2);
      [u,v,u0,v0,tmp,div,fade]=Array.from({length:7},()=>new Float32Array(n));
      // Background dots fade behind the copy so the headline stays easy to read, and towards the top and bottom edges.
      const cr=copy.getBoundingClientRect(),wide=getComputedStyle(hero).display==='grid',edgeX=cr.right-cb.left,edgeY=cr.bottom-cb.top;
      for(let j=1;j<=H;j++)for(let i=1;i<=W;i++){const x=(i-.5)*CS,y=(j-.5)*CS;
        const f=.35+.65*Math.min(1,Math.max(0,wide?(x-edgeX+40)/260:(y-edgeY+20)/160));fade[i+S*j]=Math.max(0,f*Math.min(1,y/120,(ch-y)/80));}
      const sr=slot.getBoundingClientRect(),sc=Math.min(sr.width,sr.height)/50,mx=sr.left-cb.left+sr.width/2,my=sr.top-cb.top+sr.height/2;
      dots=RING.concat([SIGNAL]).map(([a,b],k)=>({x:mx+(a-30)*sc,y:my+(b-30.5)*sc,r:(k===12?4:3)*sc*1.08,accent:k===12,ph:k*1.7}));
      box={x0:mx-28*sc,x1:mx+28*sc,y0:my-28*sc,y1:my+28*sc};
      hero.classList.add('is-fluid');return true;};
    const step=()=>{t+=1/60;
      // Two slow currents wander across the section so the surface keeps moving without a pointer.
      for(let n=0;n<2;n++){const a=t*(.11+n*.04)+n*2.4;
        push(W*(.5+.42*Math.sin(a*1.3+n)),H*(.5+.38*Math.sin(a*1.9+n*3)),Math.max(4,W/18),Math.cos(a*1.3+n)*.012,Math.cos(a*1.9+n*3)*.015);}
      if(ptr.moved){const dx=(ptr.x-ptr.px)/CS,dy=(ptr.y-ptr.py)/CS,cap=f=>Math.max(-.35,Math.min(.35,f*.06));
        if(dx||dy)push(ptr.x/CS+.5,ptr.y/CS+.5,cw<761?5:4,cap(dx),cap(dy));ptr.px=ptr.x;ptr.py=ptr.y;ptr.moved=false;}
      project();u0.set(u);v0.set(v);advect(1,u,u0);advect(2,v,v0);project();
      for(let k=0;k<u.length;k++){u[k]*=.985;v[k]*=.985;}};
    // How much a logo sphere covers the point (x,y): 0 outside, otherwise the lit side of the sphere gives larger dots than the shadow side.
    const sphereAt=(x,y)=>{for(const d of dots){const dy0=y-d.y-Math.sin(t*.9+d.ph)*d.r*.04,dx=(x-d.x)/d.r,dy=dy0/d.r,q=dx*dx+dy*dy;if(q>=1)continue;
        const nz=Math.sqrt(1-q),lit=Math.max(0,dx*LX+dy*LY+nz*LZ),edge=Math.min(1,(1-Math.sqrt(q))*6);return [(.18+.82*lit)*edge,d.accent];}
      return null;};
    const shadowAt=(x,y)=>{let s=0;for(const d of dots){const dx=(x-d.x-d.r*.18)/(d.r*1.25),dy=(y-d.y-d.r*.42)/(d.r*1.05),q=dx*dx+dy*dy;if(q<1)s=Math.max(s,(1-q)*.85);}return s;};
    const draw=()=>{ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,cw,ch);
      const base=new Path2D(),ink=new Path2D(),orange=new Path2D(),rmax=CS*.46,A=CS*3.2,b0=.7*Math.sqrt(CS/10);
      for(let j=1;j<=H;j++)for(let i=1;i<=W;i++){const k=i+S*j,uu=u[k],vv=v[k],gx=(i-.5)*CS,gy=(j-.5)*CS,x=gx+uu*CS*.8,y=gy+vv*CS*.8;
        // The logo is sampled through the flow, so it bends like something seen through moving water.
        if(gx>box.x0&&gx<box.x1&&gy>box.y0&&gy<box.y1){const sx=gx-uu*A,sy=gy-vv*A,hit=sphereAt(sx,sy);
          if(hit){const r=rmax*Math.sqrt(hit[0]);if(r>.35){const p=hit[1]?orange:ink;p.moveTo(x+r,y);p.arc(x,y,r,0,TAU);}continue;}
          const f=fade[k]*(1-shadowAt(sx,sy)),r=(b0+Math.min(.9,Math.hypot(uu,vv)*6))*f;if(r>.2){base.moveTo(x+r,y);base.arc(x,y,r,0,TAU);}continue;}
        const f=fade[k];if(f<=0)continue;const r=(b0+Math.min(.9,Math.hypot(uu,vv)*6))*f;base.moveTo(x+r,y);base.arc(x,y,r,0,TAU);}
      ctx.fillStyle=INK;ctx.globalAlpha=.24;ctx.fill(base);ctx.globalAlpha=.94;ctx.fill(ink);ctx.fillStyle=ACCENT;ctx.globalAlpha=1;ctx.fill(orange);};
    let running=false,visible=true,last=0,queued=false;
    const loop=now=>{if(!running)return;requestAnimationFrame(loop);if(now-last<15)return;last=now;step();draw();};
    const sync=()=>{const go=visible&&!document.hidden&&!calm.matches&&W>0;if(go&&!running){running=true;requestAnimationFrame(loop);}else if(!go)running=false;};
    const rebuild=()=>{queued=false;if(!layout())return;for(let k=0;k<30;k++)step();draw();sync();};
    const later=()=>{if(!queued){queued=true;requestAnimationFrame(rebuild);}};
    if('ResizeObserver' in window)new ResizeObserver(later).observe(hero);else addEventListener('resize',later);
    addEventListener('load',later);
    hero.addEventListener('pointermove',e=>{const b=canvas.getBoundingClientRect(),x=e.clientX-b.left,y=e.clientY-b.top;if(!ptr.on){ptr.px=x;ptr.py=y;ptr.on=true;}ptr.x=x;ptr.y=y;ptr.moved=true;});
    hero.addEventListener('pointerleave',()=>{ptr.on=false;});
    if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();}).observe(hero);
    document.addEventListener('visibilitychange',sync);
    if(calm.addEventListener)calm.addEventListener('change',()=>{sync();if(W)draw();});
    later();
  })();
  // Hide the mobile menu only after all handlers are installed.
  // About: on the two-column layout the diagram is shifted so the lower brand card's bottom edge sits on the bottom of the last text line beside it. Re-measured when either column reflows (resize, language, fonts).
  const aboutSign=document.querySelector('.about-sign'),aboutCopy=document.querySelector('.about-copy');
  if(aboutSign&&aboutCopy&&'ResizeObserver' in window){
    const card=aboutSign.querySelector('.bz-ac'),lastLine=[...aboutCopy.querySelectorAll('p')].pop();
    const align=()=>{aboutSign.style.translate='';if(!card||!lastLine||getComputedStyle(aboutSign.parentElement).display!=='grid')return;
      const cs=getComputedStyle(lastLine),textBottom=lastLine.getBoundingClientRect().bottom-(parseFloat(cs.lineHeight)-parseFloat(cs.fontSize))/2;
      aboutSign.style.translate=`0 ${Math.round((textBottom-card.getBoundingClientRect().bottom)*10)/10}px`;};
    const watch=new ResizeObserver(align);watch.observe(aboutCopy);watch.observe(aboutSign);addEventListener('load',align);new MutationObserver(align).observe(root,{attributes:true,attributeFilter:['lang']});
  }
  // Venn: keep the three-circle overlap lit. The circles turn in 3D at different depths, so their on-screen boxes are read every frame while the scene is in view.
  const vennMid=document.querySelector('.bv-orb-mid');
  if(vennMid){
    const orbs=[...vennMid.parentElement.querySelectorAll('.bv-orb')];let running=false;
    const draw=()=>{if(!running)return;const o=vennMid.getBoundingClientRect(),rects=orbs.map(el=>el.getBoundingClientRect());
      vennMid.style.setProperty('--s',rects.map(r=>`${r.width}px ${r.height}px`).join(','));
      vennMid.style.setProperty('--p',rects.map(r=>`${r.left-o.left}px ${r.top-o.top}px`).join(','));
      vennMid.classList.add('is-on');requestAnimationFrame(draw);};
    new IntersectionObserver(entries=>{const visible=entries[0].isIntersecting;if(visible&&!running){running=true;draw();}else running=visible;}).observe(vennMid);
  }
  setLanguage(new URL(location.href).searchParams.get('lang'));
  document.documentElement.classList.add('js');
})();
