from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User


STATUS = (
    (0,"Draft"),
    (1,"Publish")
)

class Poem(models.Model):
    poemID = models.AutoField(primary_key=True) #Autoincrementing ID.
    title = models.CharField(max_length=200, unique=True) 
    author = models.CharField(max_length=200, unique=True)
    poem = models.TextField()
    status = models.IntegerField(choices=STATUS, default=0)
    slug = models.SlugField(max_length=200, unique=True)
    
    class Meta:
        ordering = ['-author']

    def __str__(self): #Represents the poem object as a string
        return self.title + "by" + self.author

class Comment(models.Model):
    post = models.ForeignKey(Poem, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=80)
    email = models.EmailField()
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return 'Comment {} by {}'.format(self.body, self.name)
    