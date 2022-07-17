from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Video

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('email', 'password', 'username', 'last_name',
                  'first_name', 'userimage', 'id', 'is_active')
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)

        return user


class VideoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Video
        fields = ['id', 'title', 'video', 'thum', 'like', 'dislike']
