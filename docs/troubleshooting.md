## Pod not using updated image after new deployment

kubectl scale deployment discovery-ui --replicas=0
kubectl scale deployment discovery-ui --replicas=1
