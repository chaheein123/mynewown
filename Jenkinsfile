pipeline {
    agent any

    stages {
        stage('Build the Docker images') {
            steps {
                sh '''                    
                    # docker build -t chaheein123/myown_db -f ./postgres/Dockerfile.dev ./postgres;

                    docker build -t chaheein123/myown_server -f ./server/Dockerfile.dev ./server;
                '''
            }
        }

        stage('Push the built Docker images to Docker Hub') {
            steps {
                sh '''
                    echo $DOCKER_PW;
                    docker push chaheein123/myown_server;
                '''
            }
        }
    }
}



// cat ~/my_password.txt | docker login --username foo --password-stdin