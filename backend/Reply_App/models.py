from django.db import models
from authentication.models import User
# Create your models here.

class Reply(models.Model):
    reply_user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey('Comment_App.Comment', on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
