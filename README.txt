Introduction
============

This package is using jquery muliselect plugin to make a nicer 
keywordWidget for Plone. It depends on jquery and jquery.ui. 

No changes are made on the KeywordWidget itself!

Cool:
ftw.keywordoverlay works with multiple keywordWidgets. 


Limitation:
500 keywords are too much, for example FF will raise an error
(a lot of DOM manipulation).  


INSTALL
-------
just add ftw.keywordoverlay to yout eggs and zcml section in your buildout


DEPENDENCIES
------------
v 0.2 depends on jquery 1.3.x and jquery.ui 1.7.x, jquery 1.4.x is currently
not supported 



Copyright and credits
----------------------

ftw.keywordoverlay is copyright 2009 by 4teamwork_ , and is licensed under the GPL. See LICENSE.txt for details.

.. _4teamwork: http://www.4teamwork.ch/ 
