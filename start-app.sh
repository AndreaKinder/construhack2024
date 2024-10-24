#!/bin/bash

# Arrancar la imagen Docker
docker build -t shape_classifier ai-docker-server
docker run -d -p 5000:5000 shape_classifier

# Esperar a que el servidor esté listo
sleep 5

# Arrancar la app de React Native
cd src
npx expo start --android && npx expo start --ios && npx expo start --web
