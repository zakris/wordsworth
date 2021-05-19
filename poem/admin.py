# Register your models here.
from django.contrib import admin
from .models import Poem, Comment

class PoemAdmin(admin.ModelAdmin):
    list_display = ('poemID', 'title', 'slug', 'author', 'poem')
    list_filter = ("status",) #The fact this is in quotes and not apostrophes is suspiscious.
    search_fields = ['title', 'author']
    prepopulated_fields = {'slug': ('title','author')} #Used to only have "title"
  
admin.site.register(Poem, PoemAdmin)

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('name', 'body', 'post', 'created_on', 'active')
    list_filter = ('active', 'created_on')
    search_fields = ('name', 'email', 'body')
    actions = ['approve_comments']

    def approve_comments(self, request, queryset):
            queryset.update(active=True)