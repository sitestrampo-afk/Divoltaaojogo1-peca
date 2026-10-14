const icons = {
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',
  heart: '<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  bag: '<path d="M5 7h14l2 14H3L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/>',
  grid: '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/>',
  shield: '<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4Z"/><path d="m8 12 3 3 5-6"/>',
  tool: '<path d="M14 6a6 6 0 0 0-8 8l-4 4a3 3 0 0 0 4 4l4-4a6 6 0 0 0 8-8l-4 4-4-4 4-4Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  car: '<path d="m5 8 2-5h10l2 5M3 9h18v9H3V9Zm2 9v3m14-3v3M6 13h2m8 0h2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.bag}</svg>`;
document.querySelectorAll('[data-icon]').forEach(el => el.innerHTML = icon(el.dataset.icon));
let artId = 0;
function partArt(type) {
  const id = `metal-${++artId}`;
  const metal = `url(#${id})`;
  const defs = `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#eff0ed"/><stop offset=".3" stop-color="#b5b9b4"/><stop offset=".5" stop-color="#e1e4df"/><stop offset=".75" stop-color="#858c85"/><stop offset="1" stop-color="#c3c8bf"/></linearGradient></defs>`;
  let shape;
  if (type === 'disc') {
    const holes = Array.from({length: 24}, (_, i) => {const a = i * Math.PI / 12;return `<circle cx="${150 + Math.cos(a) * 88}" cy="${125 + Math.sin(a) * 88}" r="3.2" fill="#747c72"/><circle cx="${150 + Math.cos(a + .07) * 73}" cy="${125 + Math.sin(a + .07) * 73}" r="2.5" fill="#889080"/>`;}).join('');
    shape = `<ellipse cx="152" cy="136" rx="113" ry="108" fill="#5f675d"/><circle cx="150" cy="125" r="112" fill="${metal}"/><circle cx="150" cy="125" r="99" fill="none" stroke="#91988d" stroke-width="1"/><circle cx="150" cy="125" r="57" fill="#717a6b"/><circle cx="148" cy="120" r="52" fill="${metal}"/><circle cx="148" cy="120" r="24" fill="#3d453b"/><circle cx="148" cy="120" r="18" fill="#788273"/>${holes}${Array.from({length:5},(_,i)=>{const a=i*Math.PI*2/5;return `<circle cx="${148+Math.cos(a)*38}" cy="${120+Math.sin(a)*38}" r="5" fill="#515a4b"/>`;}).join('')}`;
  } else if (type === 'pads') {
    shape = `<g transform="translate(35 20) rotate(-10 110 100)"><path d="M15 65Q110-5 210 65L215 135Q115 80 8 145Z" fill="#232922"/><path d="M22 61Q115 4 203 61L201 109Q110 65 20 117Z" fill="#586052"/><path d="M24 68Q112 13 197 68" fill="none" stroke="#747d6c" stroke-width="3"/><path d="m8 135 20 1-2 20-20-1m190-28 20 1-2 20-20-1" fill="#8a9281"/><path d="M32 144Q120 99 205 148L204 203Q115 163 24 207Z" fill="#30362c"/><path d="M40 147Q123 112 195 149L191 184Q114 153 35 190Z" fill="#686e60"/></g>`;
  } else if (type === 'filter') {
    shape = `<ellipse cx="150" cy="200" rx="59" ry="18" fill="#38483c"/><path d="M91 61h118v136q-59 31-118 0Z" fill="#47604f"/><path d="M96 66h20v127q-15-2-20-8Z" fill="#6d846f"/><path d="M91 94h118v66H91Z" fill="#f1efe4"/><path d="M91 96h118v10H91Z" fill="#a7c56b"/><text x="150" y="133" text-anchor="middle" fill="#44583e" font-family="Arial" font-size="18" font-weight="bold">DIVOLTA</text><text x="150" y="149" text-anchor="middle" fill="#6d7867" font-family="Arial" font-size="8" letter-spacing="2">OIL FILTER</text><ellipse cx="150" cy="61" rx="59" ry="18" fill="${metal}"/><ellipse cx="150" cy="61" rx="39" ry="12" fill="#59634f"/><ellipse cx="150" cy="61" rx="14" ry="8" fill="#292e27"/>`;
  } else if (type === 'shock') {
    shape = `<g transform="rotate(32 150 125)"><rect x="140" y="13" width="20" height="34" rx="8" fill="${metal}"/><rect x="146" y="40" width="8" height="45" fill="${metal}"/><rect x="127" y="82" width="46" height="112" rx="9" fill="#26342e"/><rect x="132" y="89" width="8" height="96" rx="4" fill="#617164"/><rect x="125" y="98" width="50" height="30" fill="#b2d65d"/><rect x="135" y="192" width="30" height="20" fill="#424d3f"/><circle cx="150" cy="222" r="17" fill="${metal}"/><circle cx="150" cy="222" r="8" fill="#3a4635"/>${Array.from({length:8},(_,i)=>`<path d="M120 ${55+i*15}q60-13 60 4q0 10-60 13" fill="none" stroke="#a3aba0" stroke-width="7"/>`).join('')}</g>`;
  } else if (type === 'plug') {
    shape = `<g transform="rotate(30 150 125)"><rect x="145" y="12" width="10" height="27" rx="4" fill="${metal}"/><rect x="135" y="37" width="30" height="88" rx="7" fill="#eeeee6"/>${Array.from({length:6},(_,i)=>`<rect x="132" y="${47+i*10}" width="36" height="6" rx="3" fill="#ced2c8"/>`).join('')}<path d="m128 127 11-10h22l11 10-7 25h-30Z" fill="${metal}"/><rect x="138" y="152" width="24" height="57" fill="${metal}"/>${Array.from({length:8},(_,i)=>`<path d="M136 ${158+i*6}h28" stroke="#7e887b" stroke-width="2"/>`).join('')}<path d="M144 208v12h15v-12" fill="none" stroke="#717c6a" stroke-width="5"/><path d="M150 204v12" stroke="#929d83" stroke-width="4"/></g>`;
  } else if (type === 'air') {
    shape = `<g transform="translate(35 38) rotate(-12 115 80)"><path d="m0 20 230-10v145L0 165Z" fill="#323b2f"/><path d="m10 29 210-9v123L10 153Z" fill="#dbc898"/>${Array.from({length:23},(_,i)=>`<path d="m${15+i*9} 29 0 113" stroke="#a38f61" stroke-width="3"/><path d="m${18+i*9} 28 0 114" stroke="#f0e4c2" stroke-width="3"/>`).join('')}<path d="m0 20 230-10v145L0 165Z" fill="none" stroke="#525c45" stroke-width="8"/></g>`;
  } else if (type === 'belt') {
    shape = `<g transform="rotate(-25 150 125)"><ellipse cx="150" cy="125" rx="93" ry="59" fill="none" stroke="#2d342b" stroke-width="24"/><ellipse cx="150" cy="122" rx="93" ry="59" fill="none" stroke="#586050" stroke-width="10"/><ellipse cx="150" cy="122" rx="93" ry="59" fill="none" stroke="#949b88" stroke-width="1.5"/>${Array.from({length:40},(_,i)=>{const a=i*Math.PI/20;return `<path d="M${150+Math.cos(a)*83} ${125+Math.sin(a)*48}l${Math.cos(a)*10} ${Math.sin(a)*10}" stroke="#171f15" stroke-width="4"/>`;}).join('')}</g>`;
  } else {
    shape = `<g transform="rotate(-20 150 125)"><rect x="130" y="15" width="40" height="94" rx="7" fill="${metal}"/><rect x="134" y="24" width="32" height="54" rx="8" fill="#d9dfd0"/><path d="M150 33v36" stroke="#9b9c6b" stroke-width="5"/><path d="M120 109h60v45h-60Z" fill="${metal}"/><path d="M125 115h50m-50 9h50m-50 9h50m-50 9h50" stroke="#646e5e" stroke-width="3"/><path d="m115 152 8 70h54l8-70Z" fill="#343e30"/><path d="M133 223v17m34-17v17" stroke="#b3bd9f" stroke-width="5"/></g>`;
  }
  return `<svg viewBox="0 0 300 250" role="img" aria-label="Ilustração da peça">${defs}${shape}</svg>`;
}
const products = [
  {id:1,name:'Disco de freio ventilado',brand:'Fremax',category:'Freios',price:189.90,type:'disc',badge:'Mais vendido',fit:['Volkswagen Gol','Volkswagen Fox'],code:'DV-001'},
  {id:2,name:'Jogo de pastilhas de freio',brand:'Cobreq',category:'Freios',price:89.90,type:'pads',badge:'Essencial',fit:['Chevrolet Onix','Chevrolet Prisma'],code:'DV-002'},
  {id:3,name:'Filtro de óleo do motor',brand:'Mann-Filter',category:'Filtros',price:32.90,type:'filter',badge:'',fit:['Fiat Palio','Fiat Uno'],code:'DV-003'},
  {id:4,name:'Amortecedor dianteiro',brand:'Monroe',category:'Suspensão',price:279.90,type:'shock',badge:'Destaque',fit:['Volkswagen Gol','Volkswagen Fox'],code:'DV-004'},
  {id:5,name:'Vela de ignição',brand:'NGK',category:'Elétrica',price:39.90,type:'plug',badge:'',fit:['Chevrolet Onix','Fiat Uno'],code:'DV-005'},
  {id:6,name:'Filtro de ar do motor',brand:'Tecfil',category:'Filtros',price:45.90,type:'air',badge:'Essencial',fit:['Chevrolet Onix','Chevrolet Prisma'],code:'DV-006'},
  {id:7,name:'Correia dentada',brand:'Gates',category:'Motor',price:79.90,type:'belt',badge:'',fit:['Fiat Palio','Fiat Uno'],code:'DV-007'},
  {id:8,name:'Lâmpada de farol H7',brand:'Osram',category:'Elétrica',price:49.90,type:'bulb',badge:'Destaque',fit:['Volkswagen Fox','Chevrolet Prisma'],code:'DV-008'}
];
const $ = selector => document.querySelector(selector);
const money = value => value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function readStorage(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
const savedCart = readStorage('divolta-cart', []);
let cart = Array.isArray(savedCart) ? savedCart.filter(item => products.some(p => p.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0).map(item => ({id:item.id,quantity:Math.min(item.quantity,99)})) : [];
const savedFavorites = readStorage('divolta-favorites', []);
let favorites = new Set(Array.isArray(savedFavorites) ? savedFavorites.filter(id => products.some(p=>p.id===id)) : []);
let category='Todas', vehicle='', onlyFavorites=false, toastTimer, previousFocus;
function persist() { try {localStorage.setItem('divolta-cart',JSON.stringify(cart));localStorage.setItem('divolta-favorites',JSON.stringify([...favorites]));} catch {} }
function toast(message) { $('#toast').textContent=message;$('#toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').hidden=true,2800); }
function renderProducts() {
  const query=normalize($('#search').value.trim());
  let list=products.filter(p=>(category==='Todas'||p.category===category)&&(!vehicle||p.fit.includes(vehicle))&&(!onlyFavorites||favorites.has(p.id))&&normalize([p.name,p.brand,p.category,p.code,...p.fit].join(' ')).includes(query));
  const sort=$('#sort').value;
  if(sort==='price-asc')list.sort((a,b)=>a.price-b.price);
  if(sort==='price-desc')list.sort((a,b)=>b.price-a.price);
  if(sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
  $('#products').innerHTML=list.map(p=>`<article class="product-card"><div class="product-image">${p.badge?`<span class="product-badge ${p.badge==='Essencial'?'neutral':''}">${p.badge}</span>`:''}${partArt(p.type)}<button class="favorite ${favorites.has(p.id)?'active':''}" data-favorite="${p.id}" aria-label="${favorites.has(p.id)?'Remover dos':'Adicionar aos'} favoritos: ${p.name}" aria-pressed="${favorites.has(p.id)}">${icon('heart')}</button></div><div class="product-info"><div class="brand-row"><span>${p.brand}</span><span>${p.code}</span></div><h3>${p.name}</h3><p class="product-fit">${p.fit.map(f=>f.split(' ').slice(1).join(' ')).join(' / ')} · aplicação ilustrativa</p><div class="price">${money(p.price)}</div><p class="installments">Preço demonstrativo por ${p.type==='pads'?'jogo':'unidade'}</p><button class="add-button" data-add="${p.id}">${icon('plus')} Adicionar ao carrinho</button></div></article>`).join('');
  $('#empty-state').hidden=list.length>0;
  $('#result-count').textContent=`${list.length} de ${products.length} peças`;
  const active=[];if(vehicle)active.push(vehicle);if(onlyFavorites)active.push('Favoritos');if(query)active.push('Busca ativa');if(category!=='Todas')active.push(category);
  $('#filter-summary').hidden=!active.length;$('#filter-summary').replaceChildren();
  if(active.length){const label=document.createElement('span');label.textContent=active.join(' · ');const button=document.createElement('button');button.textContent='Limpar filtros';button.addEventListener('click',resetFilters);$('#filter-summary').append(label,button);}
  document.querySelectorAll('[data-category]').forEach(button=>{button.classList.toggle('active',button.dataset.category===category);button.setAttribute('aria-pressed',button.dataset.category===category);});
  $('#favorites-button').classList.toggle('active',onlyFavorites);$('#favorites-button').setAttribute('aria-pressed',onlyFavorites);
}
function resetFilters(){category='Todas';vehicle='';onlyFavorites=false;$('#search').value='';$('#vehicle-brand').value='';updateModels();renderProducts();}
function renderCart(){
  const count=cart.reduce((total,item)=>total+item.quantity,0);$('#cart-count').textContent=count;$('#cart-button').setAttribute('aria-label',`Abrir carrinho, ${count} itens`);
  $('#cart-items').innerHTML=cart.length?cart.map(item=>{const p=products.find(p=>p.id===item.id);return `<div class="cart-item">${partArt(p.type)}<div><h3>${p.name}</h3><strong>${money(p.price*item.quantity)}</strong><div class="quantity-row"><button data-quantity="${p.id}" data-delta="-1" aria-label="Diminuir quantidade de ${p.name}">−</button><span>${item.quantity}</span><button data-quantity="${p.id}" data-delta="1" aria-label="Aumentar quantidade de ${p.name}" ${item.quantity>=99?'disabled':''}>+</button><button class="remove" data-remove="${p.id}" aria-label="Remover ${p.name}">Remover</button></div></div></div>`;}).join(''):'<div class="cart-empty">Seu carrinho está esperando o próximo passo.<br>Explore o catálogo e adicione suas peças.</div>';
  $('#cart-total').textContent=money(cart.reduce((total,item)=>total+products.find(p=>p.id===item.id).price*item.quantity,0));$('#checkout-button').disabled=!cart.length;$('#checkout-message').hidden=true;persist();
}
function setCartOpen(open){$('#cart-drawer').hidden=!open;$('#drawer-backdrop').hidden=!open;document.body.style.overflow=open?'hidden':'';if(open){previousFocus=document.activeElement;$('#close-cart').focus();}else previousFocus?.focus();}
function updateModels(){const models={Chevrolet:['Onix','Prisma'],Fiat:['Palio','Uno'],Volkswagen:['Gol','Fox']};const brand=$('#vehicle-brand').value;$('#vehicle-model').innerHTML='<option value="">Selecione o modelo</option>'+(models[brand]||[]).map(model=>`<option>${model}</option>`).join('');$('#vehicle-model').disabled=!brand;}
$('#hero-part').innerHTML=partArt('disc');$('#year').textContent=new Date().getFullYear();
$('#categories').innerHTML=['Todas','Freios','Motor','Suspensão','Elétrica','Filtros'].map(c=>`<button data-category="${c}" aria-pressed="${c==='Todas'}">${c}</button>`).join('');
$('#categories').addEventListener('click',event=>{const button=event.target.closest('[data-category]');if(button){category=button.dataset.category;renderProducts();}});
document.querySelectorAll('[data-nav-category]').forEach(link=>link.addEventListener('click',()=>{category=link.dataset.navCategory;renderProducts();}));
$('.nav-main').addEventListener('click',resetFilters);
$('#search').addEventListener('input',renderProducts);$('#search-form').addEventListener('submit',event=>{event.preventDefault();$('#catalog').scrollIntoView({behavior:'smooth'});});$('#sort').addEventListener('change',renderProducts);
$('#vehicle-brand').addEventListener('change',updateModels);
$('#vehicle-form').addEventListener('submit',event=>{event.preventDefault();const brand=$('#vehicle-brand').value,model=$('#vehicle-model').value;if(!brand||!model){toast('Selecione a marca e o modelo do carro.');(!brand?$('#vehicle-brand'):$('#vehicle-model')).focus();return;}vehicle=`${brand} ${model}`;renderProducts();$('#catalog').scrollIntoView({behavior:'smooth'});});
$('#favorites-button').addEventListener('click',()=>{onlyFavorites=!onlyFavorites;renderProducts();$('#catalog').scrollIntoView({behavior:'smooth'});});
$('#products').addEventListener('click',event=>{const add=event.target.closest('[data-add]'),favorite=event.target.closest('[data-favorite]');if(add){const id=Number(add.dataset.add),existing=cart.find(item=>item.id===id);if(existing&&existing.quantity>=99){toast('Limite de 99 unidades por peça.');return;}if(existing)existing.quantity++;else cart.push({id,quantity:1});renderCart();toast('Peça adicionada ao carrinho.');}if(favorite){const id=Number(favorite.dataset.favorite);if(favorites.has(id))favorites.delete(id);else favorites.add(id);persist();renderProducts();}});
$('#cart-items').addEventListener('click',event=>{const quantity=event.target.closest('[data-quantity]'),remove=event.target.closest('[data-remove]');if(quantity){const item=cart.find(item=>item.id===Number(quantity.dataset.quantity));item.quantity=Math.min(99,item.quantity+Number(quantity.dataset.delta));cart=cart.filter(item=>item.quantity>0);renderCart();}if(remove){cart=cart.filter(item=>item.id!==Number(remove.dataset.remove));renderCart();}});
$('#cart-button').addEventListener('click',()=>setCartOpen(true));$('#close-cart').addEventListener('click',()=>setCartOpen(false));$('#drawer-backdrop').addEventListener('click',()=>setCartOpen(false));$('#reset-filters').addEventListener('click',resetFilters);
$('#checkout-button').addEventListener('click',()=>{const count=cart.reduce((total,item)=>total+item.quantity,0);$('#checkout-message').textContent=`Sua seleção tem ${count} ${count===1?'item':'itens'}, totalizando ${$('#cart-total').textContent}. Esta loja é demonstrativa; para vender de verdade, configure o pagamento e confirme estoque, frete e aplicação das peças.`;$('#checkout-message').hidden=false;});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('#cart-drawer').hidden)setCartOpen(false);if(event.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&$('#cart-drawer').hidden){event.preventDefault();$('#search').focus();}if(event.key==='Tab'&&!$('#cart-drawer').hidden){const focusable=[...$('#cart-drawer').querySelectorAll('button:not(:disabled),a[href],input,select')].filter(el=>el.getClientRects().length);const first=focusable[0],last=focusable[focusable.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}});
renderProducts();renderCart();
