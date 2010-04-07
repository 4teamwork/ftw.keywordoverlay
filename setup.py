from setuptools import setup, find_packages
import os

version = '0.2'

setup(name='ftw.keywordoverlay',
      version=version,
      description="puts a nice overlay over Archetypes's default keywordwidget (for plone)",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from http://www.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        "Programming Language :: Python",
        "Topic :: Software Development :: Libraries :: Python Modules",
        ],
      keywords='plone widget archetypes keyword jquery',
      author='Mathias Leimgruber',
      author_email='m.leimgruber@4teamwork.ch',
      url='http://www.4teamwork.ch',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['ftw'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'collective.js.jqueryui',
          'collective.js.jquery',
      ],
      entry_points="""
      # -*- Entry points: -*-
      """,
      )
