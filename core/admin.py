from django.contrib import admin
from limbo.core.models import Pin
from django_images.models import Image, Thumbnail

admin.site.register(Pin)
admin.site.register(Image)
admin.site.register(Thumbnail)