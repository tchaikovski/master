from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()

@register.filter
@stringfilter
def lower(value):
    return value.lower()


def show_results(poll):
    choices = poll.choice_set.all()
    return {'choices': choices}