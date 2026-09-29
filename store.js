// ===== সেটিংস (এখানে বদলান) =====
const CFG={name:'Eyakub Shop',wa:'966567225245',fb:'https://www.facebook.com/profile.php?id=61594226919156',user:'admin',pass:'admin123'};
const CATS={shoes:'ছেলেদের জুতা',bags:'লেডিস ব্যাগ'};
const COLORS=['কালো','সাদা','নীল','ধূসর','বাদামি','লাল','গোলাপি'];
const HEX={'কালো':'#1a1a1a','সাদা':'#f1f1f1','নীল':'#2b5cff','ধূসর':'#8a8f98','বাদামি':'#8b5a2b','লাল':'#d33','গোলাপি':'#f19aa8'};
const KEY='eyk_products';
const tk=n=>'৳'+Number(n).toLocaleString('en-IN');
function art(cat,color){const c=HEX[color]||'#1a1a1a';
 const s=cat==='bags'?`<path d='M75 55Q75 22 100 22Q125 22 125 55' fill='none' stroke='${c}' stroke-width='6'/><path d='M55 55H145L155 105H45Z' fill='${c}'/><rect x='92' y='68' width='16' height='10' rx='3' fill='#fff' opacity='.6'/>`
 :`<path d='M25 88Q28 52 62 52L82 34Q100 48 132 58Q178 62 182 88Z' fill='${c}'/><rect x='22' y='88' width='162' height='12' rx='6' fill='#fff' stroke='#ccc'/><path d='M96 56l6 8M108 60l6 8' stroke='#fff' stroke-width='3' opacity='.7'/>`;
 return 'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 130'><rect width='200' height='130' fill='#eef3f0'/>${s}</svg>`)}
function seed(){const sn=['Runner','Street','Classic','Sport','Casual','Air Max','Comfort','Urban','Trail','Flex'],bn=['Handbag','Tote','Shoulder Bag','Clutch','Crossbody','Mini Bag','Satchel','Office Bag'];
 const P=[];for(let i=0;i<300;i++){const bag=i>=150,k=i%150,old=bag?1200+(k%12)*150:1800+(k%15)*200,d=[15,20,25,30,35][k%5];
 P.push({id:i+1,cat:bag?'bags':'shoes',name:(bag?bn[k%8]:sn[k%10]+' Shoe')+' '+(k+1),color:[COLORS[k%5],COLORS[(k+2)%7]],sizes:bag?['Free']:['39','40','41','42','43','44'],old,price:Math.round(old*(100-d)/100/10)*10,stock:5+(k*7)%40,sold:(k*37)%900,rating:(4+(k%9)/10).toFixed(1),desc:'১০০% অরিজিনাল ও টেকসই। ডেলিভারি সারা বাংলাদেশে।',img:''})}return P}
async function loadProducts(){try{const l=localStorage.getItem(KEY);if(l)return JSON.parse(l)}catch(e){}
 try{const r=await fetch('products.json?'+Date.now());if(r.ok)return await r.json()}catch(e){}return seed()}
function saveProducts(p){localStorage.setItem(KEY,JSON.stringify(p))}
function catName(c){return CATS[c]||c}
