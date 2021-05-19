from .models import Comment
from django import forms

class CommentForm(forms.ModelForm):
    import pdb; pdb.set_trace()
    class Meta:
        model = Comment
        fields = ('name', 'email', 'body')