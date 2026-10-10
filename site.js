/* ponytail: static bilingual copy; no translation service, tracking or storage. */
'use strict';
(() => {
  const english = {
    opAd:'Ad made in Shortforme',opData:'Years of accumulated data',opCore:'We run your campaigns',opMethod:'Proven campaign method',opLive:'Campaign running',opF1:'Ad as it is',opF2:'We run it',opF3:'Results managed',
    sfTagMotion:'Concept motion',mkA:'Product photos',mkB:'Key strength',mkC:'On-screen person',mkD:'Chosen format',mkS1:'No more storage hassle',mkS2:'Individually packed, easy',mkS3:'Meet it today',mkP1:'Plan',mkP2:'Scenes',mkP3:'Captions',mkP4:'Done',
    bpPage:'Oddsignal ventures',bpMore:'Learn more',bpSfLead:'Short-form ads for your brand',bpSf1:'Everyone needs <br>short-form ads now',bpSf2:'Proven references, <br>easy for anyone',bpSf3:'Why Oddsignal?',
    bpSf1a:'Video is now something small brands and local shops need too.',bpSf1b:'But video is a field with a wide information gap. It is hard for non-specialists, and prices vary enormously.',bpSf1c:'There are many short-form ad tools abroad, but formats built to persuade Korean consumers are hard to find.',
    bpSf2a:'Built on data from years of growing creators and brands on social media, we offer ad formats proven in the Korean market.',bpSf2b:'No video expertise needed. Enter your brand details to get an illustrated storyboard, then edit the elements yourself to finish your short-form ad.',bpSf2c:'Beyond that, we are extending into a campaign service that puts our operating know-how to work for low cost and high efficiency.',
    bpSf3Letter:'Drawing on the success of dozens of creator products and years of data from the content commerce ecosystem, we provide proven ad creative formats, not videos that merely look good.<br>As a marketer and video creator with AX (AI Transformation) experience at a unicorn startup, I aim to resolve the information asymmetry in persuading the public through video.',bpSf3Sign:'Oddsignal FOUNDER.',
    bvNeedA:'Brands',bvNeedB:'Local shops',bvNeedC:'Individuals',bvMake0:'Pick a reference',bvRefCta:'Make my brand ad',bvFormUrl:'Product link URL',bvFormGo:'Import',bvFormA:'Product name',bvFormB:'Key strengths',bvFormC:'Details',bvMakeA:'Your brand details',bvMakeB:'Review storyboard',bvMakeC:'Done',bvVennA:'Marketing',bvVennB:'Video',bvVennC:'Development',
    skip:'Skip to content',navVentures:'Ventures',navApproach:'Approach',navAbout:'About',navContact:'Contact',
    hero1:'From the signal',hero2:'others missed,',hero3:'we begin.',
    heroBody:'At every crossroads of change, a small signal that feels different.<br>Oddsignal turns it into growth.',
    heroCta:'Our ventures',contactCta:'Let’s talk',concept:'From brief to scenes · Creative workflow',heroFoot:'We build ideas, operate them, and make the next version better.',
    sfTab1:'Pick a proven format',sfTab2:'Add your brand',sfTab3:'One-stop ad',sfTab4:'Run ads',
    sf1Title:'Pick a curated ad',sf1Body:'Preview ad examples and choose the format that fits your product.',
    sf2Title:'Add your brand',sf2Body:'Add product photos, name and key strengths, then pick the on-screen person from character sheets.',
    
    sf3Title:'Your short-form ad, in one go',sf3Body:'Your brand goes into the chosen format and flows from plan to scenes and captions into a finished ad.',
    sf4Title:'Your ad as it is, run by us',sf4Body:'We run campaigns for the ads you make in Shortforme, as they are, using years of accumulated data and a proven campaign method.',
    
    htTab1:'App',htTab2:'Plan',htTab3:'Learn & lift',htTagSample:'App screen · sample data',htTagCompose:'App screen, composed example',
    ht1Title:'Watch lessons, get feedback',ht1Body:'Take lessons on web and mobile, and get 1:1 feedback.',
    ht2Title:'Learning becomes a habit.<br>Experience sets the standard.',ht2Body:'Get today’s routine, built on the knowledge of Korea’s No. 1 bodybuilder.',
    ht3Title:'Same time spent, different results',ht3Body:'Data that gets more accurate as it builds,<br>so you can find your own way.',
    prEyebrow:'01 — MARKETING TRACK RECORD',prTitle:'Small brands, big possibilities,<br><em>real impact.</em>',
    prLead:'Helping good products reach more people.<br>We connect content, technology and the work in between.',
    prTag:'Growth concept',prP1y:'2022',prP2y:'2023',prP3y:'2024',prP4y:'2026',prP5y:'NOW',
    prP1t:'Creator marketing agency MOMENTO',prP1d:'Founded',
    prP2t:'Brand commerce BRAVECOMPANY',prP2d:'Acquired, then exit',
    prP3t:'Content commerce NEWPEAK',prP3d:'Co-founder<b>KRW 1B in sales in the first year</b>',
    prP4t:'NEWPEAK Co., Ltd.',prP4d:'Reached a KRW 10B valuation, then exit',
    prP5t:'Oddsignal',prP5d:'AI marketing platform<b>FOUNDER</b>',
    prNote:'The curve and the heights of the points are a concept of growth, not actual figures.',
    venturesTitle:'Two ventures.<br><em>One point of view.</em>',venturesBody:'Creating and operating belong together.<br>We learn by doing both.',frame1:'A real product',frame2:'A brand story',frame3:'A short film',shortVisualFoot:'A short story that starts with a good product.',shortName:'Shortforme',
    shortTitle:'Short-form ads.<br>Made for your brand.',shortBody:'Choose a format from curated short-form ads and apply it to your brand. Add your product photos and details to create your own branded video ad with ease.',shortTag1:'Product-led planning',shortTag2:'Scene-by-scene review',inDevelopment:'In development (DEMO)',shortCta:'Shortforme.oddsignal.kr',
    highVisualFoot:'Where knowledge becomes practice.',highName:'Hightemp',highTitle:'A change in your life.<br>Value beyond it.',highBody:'A fitness education brand featuring Park Jaehun’s Allright Class. Classes and feedback across web and mobile help connect learning with real training.',highTag1:'Online classes',highTag3:'Feedback',brandSite:'Brand website',highCta:'HIGHTEMP.co.kr',newTab:' (opens in a new tab)',
    approachTitle:'How a good idea<br><em>gets to work.</em>',approachBody:'From understanding a brand to reviewing the result.<br>Human judgment and technology, each in the right place.',
    step1:'Understand.',step1Body:'Start with the product, the customer and the problem worth solving.',step2:'Create.',step2Body:'Find the message. Turn it into content and a useful product.',step3:'Review.',step3Body:'Check the actual experience and output. Refine the details.',step4:'Improve.',step4Body:'Bring what we learn from operations into the next iteration.',
    aiTitle:'Building with AI, thoughtfully.',aiBody:'We are preparing an operating system that connects Claude to development, planning, quality review and analysis. People remain responsible for key decisions and review before publication.',aiStatus:'Planned direction',
    aboutTitle:'Made by a creator.<br><em>Built to operate.</em>',aboutBody1:'Oddsignal is an independent studio rooted in marketing and video production. We create content, operate customer-facing experiences, and build the tools that the work calls for.',aboutBody2:'We bring Hightemp’s web and app operating experience together with Shortforme’s creative-tool development, exploring how a small team can consistently make good work.',founder:'Yeowoon Yoo',
    contactTitle:'Let’s make<br><em>the next story.</em>',contactBody:'For conversations about brands, content and new possibilities.',footerStatement:'New possibilities between content and technology.',backTop:'Back to top',company:'Oddsignal · Founder Yeowoon Yoo<br>Business registration 393-08-03564 · Pyeongchang, South Korea'
  };
  const labels = {home:'Oddsignal home',nav:'Main navigation',language:'Select language',menu:'Open menu',scroll:'Explore our ventures',shortVisual:'Conceptual Shortforme workflow: product, scenes and film',prGraphA:'Concept graph of steep growth from 2022 to now: MOMENTO founded, Brave Company exit, NEWPEAK co-founder with KRW 1B first-year sales, NEWPEAK exit at a KRW 10B valuation, Oddsignal founder',sfDeck:'Shortforme feature preview',sfMakeArt:'Concept motion: product photos, key strength, on-screen person and the chosen format come together into a vertical short-form ad, scene by scene',sfRunArt:'Concept motion: the ad made in Shortforme goes as it is into campaign operations run with years of accumulated data and a proven campaign method',htDeck:'Hightemp app feature preview',htTabs:'Hightemp app preview steps',sfTabs:'Shortforme preview steps',email:'Email Oddsignal',bvNeed:'Small brands, local shops and individuals now need short-form ads on Instagram, YouTube, TikTok and X',bvMake:'Four steps: pick a reference (one of nine ad examples opens large, shows ROAS 400%, and its ‘Make my brand ad’ button is pressed), your brand details (paste a product link and the photo and details fill in), review the storyboard (three illustrated frames), done (the short-form ad plays)',bvVenn:'Marketing, video and development overlap in one person'};
  const altEn = {sfCharAlt:'Actual Shortforme create screen: choosing a character sheet from virtual person presets',shortformeAlt:'Actual Shortforme home: ad examples and creative filters',appAlt:'Hightemp’s public class and feedback app presentation',htRoutineAlt:'Park Jaehun running on a treadmill, seen from behind, beside a phone showing today’s routine in the Hightemp app',htLessonAlt:'Park Jaehun, seen from behind lifting dumbbells, with the Allright Class Full and Chapter packages and a shoulder training question card',};
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
    deck.addEventListener('keydown',event=>{if(!event.target.matches('[role=tab]'))return;const keys={ArrowRight:index+1,ArrowLeft:index-1,Home:0,End:slides.length-1};if(!(event.key in keys))return;event.preventDefault();touch();show(keys[event.key],true);});
    deck.addEventListener('pointerenter',touch);deck.addEventListener('focusin',touch);
    // Swipe: touch anywhere on the banner, mouse drag on the image only (so text stays selectable).
    const banner=deck.closest('.venture')||deck;let startX=null,startY=0;
    banner.addEventListener('pointerdown',e=>{startX=e.pointerType==='mouse'&&!deck.contains(e.target)?null:e.clientX;startY=e.clientY;});
    banner.addEventListener('pointerup',e=>{if(startX===null)return;const dx=e.clientX-startX,dy=e.clientY-startY;startX=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){touch();show(index+(dx<0?1:-1));}});
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
    deck.querySelectorAll('.ht-arrow').forEach(b=>b.addEventListener('click',()=>{touch();go(index+Number(b.dataset.dir));}));
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
  // Hero signal stage: gentle pointer parallax on desktop; pause the loop while off screen.
  (()=>{
    const stage=document.querySelector('.signal-stage');if(!stage)return;
    const svg=stage.querySelector('svg.signal-paths');
    const calm=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover: hover) and (pointer: fine)');
    let frame=0;
    stage.closest('.hero').addEventListener('pointermove',event=>{
      if(calm.matches||!fine.matches||frame)return;
      frame=requestAnimationFrame(()=>{frame=0;const box=stage.getBoundingClientRect();
        stage.style.setProperty('--mx',Math.max(-1,Math.min(1,(event.clientX-box.left-box.width/2)/box.width*2)).toFixed(3));
        stage.style.setProperty('--my',Math.max(-1,Math.min(1,(event.clientY-box.top-box.height/2)/box.height*2)).toFixed(3));});
    });
    stage.closest('.hero').addEventListener('pointerleave',()=>{stage.style.setProperty('--mx',0);stage.style.setProperty('--my',0);});
    if(calm.matches&&svg)svg.pauseAnimations();
    if('IntersectionObserver' in window)new IntersectionObserver(entries=>{const on=entries[0].isIntersecting;stage.classList.toggle('is-paused',!on);if(svg&&!calm.matches)on?svg.unpauseAnimations():svg.pauseAnimations();}).observe(stage);
  })();
  // Hide the mobile menu only after all handlers are installed.
  setLanguage(new URL(location.href).searchParams.get('lang'));
  document.documentElement.classList.add('js');
})();
