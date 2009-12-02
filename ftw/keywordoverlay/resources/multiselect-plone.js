//plone integration of ui.multiselectwidget
jq(function(){
    //get all keywordwidgets
    var $targets = jq('.field.ArchetypesKeywordWidget select[id$=existing_keywords]');
    //bind click event on every fieldset that contains an keywordwidget
    $targets.each(function(i,o){
        $target = jq(o);
        //get id and cut off <fieldset->
        var loadonID = jq(o).closest('fieldset').attr('id').substr(9);
        $loadon = jq('ul.formTabs li.formTab [href$='+loadonID+']');
        //load widget while clicking on formTab
        $loadon.bind('click', function(e){
            $target.css('width','500px');
            $target.multiselect({sortable: false});
            
            //move the keyword add area below the new widget
            var $addarea = $target.parent().prev();
            var content = $addarea.html();
            $addarea.remove();
            content = '<div>'+content+'</div>';
            $target.closest('div').after(content);
        });
    });

});
