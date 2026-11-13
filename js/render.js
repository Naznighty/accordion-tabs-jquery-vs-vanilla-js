var D=[["آکاردئون چیست؟","بخشی از محتوا را باز و بسته می‌کند تا صفحه شلوغ نشود."],["چرا aria-expanded؟","وضعیت باز یا بسته را به صفحه‌خوان‌ها هم اعلام می‌کند."],["یکی باز، بقیه بسته","با باز شدن یک بخش، بخش قبلی خودکار بسته می‌شود."]];
function mk(k){
  var a="",t="",p="";
  D.forEach(function(d,i){
    var id="p-"+k+"-"+i;
    a+='<div class="acc-item'+(i?'':' open')+'"><button class="acc-btn" aria-expanded="'+(i==0)+'">'+d[0]+'</button><div class="acc-panel"><div><p>'+d[1]+'</p></div></div></div>';
    t+='<button role="tab" class="'+(i?'':'on')+'" aria-selected="'+(i==0)+'" aria-controls="'+id+'">'+d[0]+'</button>';
    p+='<div id="'+id+'" role="tabpanel" class="'+(i?'':'on')+'">'+d[1]+'</div>';
  });
  document.getElementById("acc-"+k).innerHTML=a;
  document.getElementById("tabs-"+k).innerHTML='<div role="tablist">'+t+'</div>'+p;
}
mk("jq");mk("js");
