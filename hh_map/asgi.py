"""
ASGI config for hh_map project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hh_map.settings")

application = get_asgi_application()
/Users/rachaelkondrat/hh_map/hh_map/asgi.py