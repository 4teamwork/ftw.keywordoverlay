Introduction
============

This package is using jquery muliselect plugin to make a nicer
keyword-widget for Plone. It depends on jquery and jquery.ui.

No changes are made on the keyword-widget itself!

Cool:
ftw.keywordoverlay works with multiple keywordWidgets.


Limitation:
Experienced problems if there are more than aprox.500 keywords


Usage
-------

- Add ``ftw.keywordoverlay`` to yout eggs section in your buildout:

::

    [instance]
    eggs +=
        ftw.keywordoverlay

- Use quickinstaller to install it on your plone site.

- Javascript and CSS is added, which automatically hooks into the widget.


Dependencies
------------

1.x is using collective.js.jqueryui and plone 4 (which ships a suitable jquery version)


0.2 depends on jquery 1.3.x and jquery.ui 1.7.x, jquery 1.4.x is currently
not supported


Links
-----

- Github: https://github.com/4teamwork/ftw.keywordoverlay
- Issues: https://github.com/4teamwork/ftw.keywordoverlay/issues
- Pypi: http://pypi.python.org/pypi/ftw.keywordoverlay


Copyright
---------

This package is copyright by `4teamwork <http://www.4teamwork.ch/>`_.

``ftw.keywordoverlay`` is licensed under GNU General Public License, version 2.

