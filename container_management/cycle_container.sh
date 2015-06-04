#!/usr/bin/env bash
CONTAINER_LOCATION="$1"

# Split on the forward slash
# E.g. => 'mridevteam/express-container_management'
IFS='/' read -ra arrContainerInformation <<< "$CONTAINER_LOCATION"
CONTAINER_NAME=${arrContainerInformation[1]}

echo "_____________________________________________"
# Pull latest image
echo "pulling latest image from $CONTAINER_LOCATION"
docker pull "$CONTAINER_LOCATION":latest

echo "_____________________________________________"
# Stop the running container_management
echo "stopping container named $CONTAINER_NAME"
docker stop ${CONTAINER_NAME}

echo "_____________________________________________"
# Remove the now stopped container_management
# NOTE: Without this step we cant name the container_management the same
echo "removing container named $CONTAINER_NAME"
docker rm ${CONTAINER_NAME}

echo "_____________________________________________"
# Remove the image that was attached to this container_management
echo "removing image"
docker rmi ${CONTAINER_LOCATION}:current

echo "_____________________________________________"
# Tag the new image we downloaded as current
# Note that until this is re-ran :latest and :current imageIDs will be the same
echo "tagging :latest as :current"
docker tag ${CONTAINER_LOCATION}:latest ${CONTAINER_LOCATION}:current

echo "_____________________________________________"
# Fire up the new container_management
echo "starting new container"
docker run -d --name ${CONTAINER_NAME} ${CONTAINER_LOCATION}:latest