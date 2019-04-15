def queryset_to_json(queryset):
    result = []
    for i in queryset:
        i = i.__dict__
        i.pop('_sa_instance_state', None)
        result.append(i)
    return result