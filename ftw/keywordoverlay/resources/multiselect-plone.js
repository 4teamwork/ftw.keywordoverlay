//plone integration of ui.multiselectwidget
jQuery(function($) {
    //get all keywordwidgets
    var $targets = $('.field.ArchetypesKeywordWidget');
    //bind click event on every fieldset that contains an keywordwidget
    $targets.each(function(i, o) {
        $target = $(o);
        //get id and cut off <fieldset->
        var loadonID = $target.closest('fieldset').attr('id').substr(9);
        $loadon = $('ul.formTabs li.formTab [href$=' + loadonID + ']');
        //load widget while clicking on formTab
        $loadon.bind('click', function(e) {
            $select = $target.find('select:first');
            $select.css('width', '90%');

            //load widget
            $select.multiselect({
                sortable: false
            });
        });

        //hide plones default add textarea
        // Cut of "archetypes-fieldname-" for field id
        var field_id = $target.attr('id').substr(21);
        var $addarea = $target.find('#' + field_id + '_keywords');
        $addarea.hide();
        $addarea.closest('dl').find('.formHelp').hide();
        //hide plone 4 add area
        //area for new items
        var content = '<div><ul class="new_item_space"></ul>';
        content += '<form><input class="item" name="new_item" type="text" /><input class="allowMultiSubmit" type="submit" value="+"></form></div>';
        var $selected = $target.closest('div');
        $selected.after(content);
        //add eventhandler to add and delete items
        $field = $selected.parent();
        $field.find('.allowMultiSubmit').bind('click', function(e) {
            e.preventDefault();
            var item = $(this).prev();
            var itemval = item.val();
            item.val('');
            if (itemval) {
                var delbutton = '<a class="delbutton" href="#"><img src="' + portal_url + '/delete_icon.gif" /></a>';
                var toadd = '<li class="ui-state-default ui-element"><span>' + itemval + '</span> ' + delbutton + '</li>';
                //add to the visible part
                $(this).parent().prev().append(toadd);
                //add item to the hidden area (for plone)
                $addarea.append(itemval + '\n');
            }
        });

        //delete function
        $('.delbutton').live('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $parent = $this.parent();
            var itemval = $this.prev().html();
            $addarea = $($this.closest('.ArchetypesKeywordWidget').find('[id$=_keywords]').eq(0));
            var value = $addarea.html();
            value = value.replace(itemval + '\n', '');
            $addarea.html(value);
            $parent.remove();
        });



        //load if allready visible
        if ($target.is(':visible')) {
            $loadon.trigger('click');
        }

    });

});
