from django.shortcuts import render_to_response, get_object_or_404, HttpResponseRedirect
from django.template import Context, RequestContext
from app.models import Category, Item
from app.forms import itemForm
# Create your views here.

def index(request):
	context = Context({'title': 'Ejercicio lab 6 - Index'})
	return render_to_response('index.html', context)

def about(request):

	context = Context({'title': 'Ejercicio lab 6 - About', 'paragaph' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'})
	return render_to_response('about.html', context)

def items(request):
	items = Item.objects.all()
	context = Context({'title': 'Ejercicio lab 6 - Items' , 'item' : items})
	return render_to_response('items.html', context)

def add_item(request):
	if request.method == 'POST':
		form = itemForm(request.POST)
		if form.is_valid():
			#crear un nuevo item
			item = Item.objects.create(
				listing = form.cleaned_data['listing'],
				name = form.cleaned_data['name'],
				category = form.cleaned_data['category'],
				department = form.cleaned_data['department'],
				description = form.cleaned_data['description'],
				update_item = form.cleaned_data['update_item'],
			)
			return HttpResponseRedirect('/items/%s/' % item.id)
	else:
		form = itemForm()

	context = Context({'title': 'Ejercicio lab 6 - Add Item', 'form' : form})
	return render_to_response('form.html', context, context_instance=RequestContext(request))

def categorias(request):
	categorias = Category.objects.all()
	context = Context({'title': 'Ejercicio lab 6 - Categorias', 'categoria' : categorias})
	return render_to_response('categorias.html', context)

def itemDetails(request, itm_id):
	item = get_object_or_404(Item, id=itm_id)
	context = Context({
		'title' : 'Detalle de %s' % item.name,
		'item'  : item
 	})
 	return render_to_response('detailsItems.html', context)
 
#def categoryDetails(request, cate_id):
#	category = get_object_or_404(Category, id=cate_id)
def categoryDetails(request, slug):
	category = get_object_or_404(Category, slug=slug)	
	context = Context({
		'title' : 'Detalle de %s' % category.name,
		'category'  : category
 	})
 	return render_to_response('detailsCategory.html', context)

	