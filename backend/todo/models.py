from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=120)
    completed = models.BooleanField(default=False)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.title
        