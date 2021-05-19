from django.shortcuts import render
# Create your views here.
from django.views import generic
from .models import Poem
from .forms import CommentForm
from django.shortcuts import render, get_object_or_404

class PoemList(generic.ListView):
    queryset = Poem.objects.filter(status=1).order_by('author')
    template_name = 'index.html'
    

#class PoemDetail(generic.DetailView):
   # model = Poem
   # template_name = 'poem_detail.html'

    
def post_detail(request, slug):
    template_name = 'poem_detail.html'
    post = get_object_or_404(Poem, slug=slug)
    comments = post.comments.filter(active=True)
    new_comment = None
    #Comment posted
    if request.method == 'POST':
        comment_form = CommentForm(data=request.POST)
        if comment_form.is_valid():
            #create comment object, but don't save to database yet
            new_comment = comment_form.save(commit=False)
            #Assign the current post to the comment
            new_comment.post = post
            #Save the comment to the database
            new_comment.save()

    else:
        comment_form = CommentForm()

    return render(request, template_name, {'post': post, 'comments': comments, 'new_comment': new_comment, 'comment_form': comment_form})
