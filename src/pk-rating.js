var pk = pk || {};
(function (pk) {    
    pk.rating = function (opt) {        
        var el=opt.element,
            listeners=opt.listeners === undefined ? {} : opt.listeners,
            inputValue=opt.value || 0, 
            inputName=opt.name || el.getAttribute('name') || 'pk-rating-'+pk.getRand(1,999),
            inputTabIndex=opt.tabindex || el.getAttribute('tabindex') || 0;         
        
            /*jshint multistr:true */
        var str="<div class='pk-rating'>\
            <fieldset>\
                <input type='radio' id='"+inputName+"_5' name='"+inputName+"' value='5' tabindex='"+inputTabIndex+"'/>\
                <label for='"+inputName+"_5'></label>\
                <input type='radio' id='"+inputName+"_4' name='"+inputName+"' value='4' />\
                <label for='"+inputName+"_4'></label>\
                <input type='radio' id='"+inputName+"_3' name='"+inputName+"' value='3' />\
                <label for='"+inputName+"_3'></label>\
                <input type='radio' id='"+inputName+"_2' name='"+inputName+"' value='2' />\
                <label for='"+inputName+"_2'></label>\
                <input type='radio' id='"+inputName+"_1' name='"+inputName+"' value='1' />\
                <label for='"+inputName+"_1'></label>\
            </fieldset>\
        </div>";
        el = pk.replaceEl(el, str);

        var rEl=[];
            rEl.push(el.children[0].children[8]),
            rEl.push(el.children[0].children[6]),
            rEl.push(el.children[0].children[4]),
            rEl.push(el.children[0].children[2]),
            rEl.push(el.children[0].children[0]);
        if(listeners){pk.bindListeners(listeners, rEl[0]);}
        if(listeners){pk.bindListeners(listeners, rEl[1]);}
        if(listeners){pk.bindListeners(listeners, rEl[2]);}
        if(listeners){pk.bindListeners(listeners, rEl[3]);}
        if(listeners){pk.bindListeners(listeners, rEl[4]);}

        pk.bindEvent("mousewheel", el, function(e){
            var offset=1;
            if (e.wheelDelta > 0 || e.detail < 0) {
                offset=-1;
            }
            obj.val(obj.val()+offset);         
        }); 
        
        var obj={
            0:el,
            val:function(val){                
                if(val===undefined){
                   for(var r in rEl){
                        if(rEl[r].checked){                         
                            val= rEl[r].value;
                            break;
                        }  
                   }
                   return parseInt(val === undefined ? 0 : val,0);
                };
                val = val < 0 ? 0 : val;
                val = val > 5 ? 5 : val;
                if(val===0){
                    rEl[0].checked=true;       
                    rEl[0].checked=false;                    
                }else{
                    rEl[val-1].checked=true;
                } 
            }
        }
        obj.val(inputValue);
        
        
        return obj;        
    };
    return pk;
})(pk);
