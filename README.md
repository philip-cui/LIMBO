# LIMBO
		
         ___ 	    ___		         __			         ___          __
	    /  /\	   /  /\            /  /|	            /  /\        / /\ 
       /  / /	  /  / / 	       /  /	|  ___	       /  /\ \      / /  \
      /  / /     /__/  \	      /  /	| /   |	      /  /  \ \    / / /\ \
     /  / /      \__\/\ \	     /  / | |/  | |	     /  /\  / /   / / /  \ \
    /__/ / 	         \ \ \ 	    /__/ /|	|  /| |	    /  /\ \/ /   / / /   / /
    \  \ \	          \	\ \/\	\__\/ |	| /|| |	   /__/  \  /    \ \ \  / /
     \  \ \	           \ \  /	      |_|/ || |	   \  \  / /      \ \ \/ /
      \  \ \	       /_/ /    	       || |	    \  \/ /        \ \  /
       \__\/           \_\/     	       \|_|	     \__\/          \_\/
     

Limbo is designed and devleoped in Django framework by group Limbo, which means it is written in Python language (human readable! Cheers!! )
Besides Django framework, it also uses jQuery, CSS framework Bootstrap, REST API framework Tastypie and other jQuery plugins.

Limbo is a personal website for image posting. It gives the ability to post your favourite images from the Internet or your local machine to
the website, and store it for you. No matter what they are, Limbo will keep everything for you, and you will be the only person who could see
them. 







Basic Information
===========================================

Limbo is developed on Ubuntu, and there is no gurantee to work on any other operating system such as Windows and Mac OS X.

In Limbo folder, there are two folders named "env" and "limbo".
	-	"env"	(virtualenv folder, it includes all required files to run this project.
				 reference: http://virtualenv.readthedocs.org/en/latest/)
	-	"limbo"	(project Limbo's folder)







Basic requirements
===========================================

Ubuntu 
	reference: http://www.ubuntu.com/

pip
	reference: https://pip.pypa.io/en/latest/

Django (since Django used Python language)
	reference: https://docs.djangoproject.com/en/1.5/

virtualenv	
	reference: http://virtualenv.readthedocs.org/en/latest/
	-	install virtualenv using: pip virtualenv
	-	create virtualenv using: virtualenv env
	-	start virtualenv using:	source env/bin/activate

Django-image

Django-braces
	reference: https://django-braces.readthedocs.org/en/v1.4.0/

South
	reference: https://south.readthedocs.org/en/latest/

Pillow
	reference: https://pillow.readthedocs.org/

Handlbars
	reference: http://handlebarsjs.com/

FineUploader
	reference: http://fineuploader.com/

Tastypie
	reference: https://django-tastypie.readthedocs.org/en/latest/

Django-taggit
	reference: http://django-taggit.readthedocs.org/en/latest/

Django-compressor
	reference: http://django-compressor.readthedocs.org/en/latest/

Bootstrap CSS
	reference: http://getbootstrap.com/css/

Bootstrap JavaScript
	reference: http://getbootstrap.com/javascript/

Bootstrap Components
	reference: http://getbootstrap.com/components/








Customization (for Limbo setting and HTML layout)
===========================================

Limbo is developed in Django, which means it uses based Django template design pattern. 
There are two things could affact the outlook of this project:
	-	"template" folder	(directory: /limbo/templates)
	-	"static" folder		(directory: /limbo/static)

All the files in "template" folder are pure HTML, they can be easily revised in order to achieve 
different HTML views.

All the files in "static" folder are CSS, JS files which are used to add animation and effects to HTML files stored in "tempalte" folder.


Limbo's settings is still pure Django design pattern, which means all of its informations are stored in one file.
However, since Limbo has passed through development phase and production phase, we separated database settings from regular Django settings.py file 
into two different files named "development.py" and "production.py".
	-	"development.py"	(directory: /limbo/settings/development.py)
	-	"production.py"		(directory: /limbo/settings/production.py)


