//plone integration of ui.multiselectwidget
jq(function(){
    //get all keywordwidgets
    var $targets = jq('.field.ArchetypesKeywordWidget select[id$=existing_keywords]');
    //bind click event on every fieldset that contains an keywordwidget
    $targets.each(function(i,o){
        $target = jq(o);
        //get id and cut off <fieldset->
        var loadonID = $target.closest('fieldset').attr('id').substr(9);
        $loadon = jq('ul.formTabs li.formTab [href$='+loadonID+']');
        //load widget while clicking on formTab
        $loadon.bind('click', function(e){
            $target.css('width','500px');
            
            //load widget
            $target.multiselect({sortable: false});
        });

        //hide plones default add textarea
        var $addarea = $target.parent().prev();
        $addarea.hide();
        
        //area for new items
        var content  = '<div><ul class="new_item_space"></ul>';
        content += '<form>Add new item <input class="item" name="new_item" type="text" /><input class="allowMultiSubmit" type="submit" value="+"></form></div>';
        var $selected = $target.closest('div');
        $selected.after(content);
        //add eventhandler to add and delete items
        $field = $selected.parent();
        $field.find('.allowMultiSubmit').bind('click', function(e){
            e.preventDefault();
            var item = jq(this).prev();
            var itemval = item.val()
            item.val('');
            if (itemval){
                var delbutton = '<a class="delbutton" href="#"><img src="'+portal_url+'/delete_icon.gif" /></a>';
                var toadd = '<li class="ui-state-default ui-element"><span>'+itemval+'</span> '+delbutton+'</li>'
                //add to the visible part
                jq(this).parent().prev().append(toadd);
                //add item to the hidden area (for plone)
                $addarea.contents('textarea').append(itemval+'\n');   
            }
        });

        //delete function
        jq('.delbutton').live('click',function(e){
            e.preventDefault();
            var $this = jq(this)
            var $parent = $this.parent();
            var itemval = $this.prev().html();
            $addarea = jq($this.closest('.ArchetypesKeywordWidget').find('[id$=_keywords]').eq(0));
            var value = $addarea.html();
            value = value.replace(itemval+'\n','');
            $addarea.html(value);
            $parent.remove();
        });



        //load if allready visible
        if ($target.is(':visible')){
            $loadon.trigger('click');
        }
        
    });

});
