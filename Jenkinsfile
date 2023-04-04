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
                    set +x;
                    echo $DOCKER_PW | docker login --username chaheein123 --password-stdin;

                    set -x;
                    docker push chaheein123/myown_server;
                '''
            }
        }

        stage('Publish over SSH') {
            steps {
                sh """
                    ssh -tt deployer@13.56.197.35 '
                    git clone https://github.com/chaheein123/mynewown.git;
                    

                    '
                    
                """
            }
        }
    }
}



// cat ~/my_password.txt | docker login --username foo --password-stdin






/* pipeline{
  agent any
  environment {
    RELEASENAME="yourProject-ci"
  }
  stages{
    stage("Get the charts..."){
        steps {checkout scm}
    }
    stage('SSH transfer') {
        steps([$class: 'BapSshPromotionPublisherPlugin']) {
            sshPublisher(
                continueOnError: false, failOnError: true,
                publishers: [
                    sshPublisherDesc(
                        configName: "kubernetes_master",
                        verbose: true,
                        transfers: [
                            sshTransfer(execCommand: "/bin/rm -rf /opt/deploy/helm"),
                            sshTransfer(sourceFiles: "helm/**",)
                        ]
                    )
                ]
            )
        }
    }
    stage('Deploy Helm Scripts'){
        steps([$class: 'BapSshPromotionPublisherPlugin']) {
            sshPublisher(
                continueOnError: false, failOnError: true,
                publishers: [
                    sshPublisherDesc(
                        configName: "kubernetes_master",
                        verbose: true,
                        transfers: [
                            sshTransfer(execCommand: "cd /opt/deploy/helm;helm upgrade ${RELEASENAME} . --install"),
                        ]
                    )
                ]
            )
        }
    }
  }
} */