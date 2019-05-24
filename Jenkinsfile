pipeline {
  agent any
  stages {
    stage('Build App') {
      steps {
        sh '''echo "NodeJsDocker" pipeline
docker -version
'''
      }
    }
    stage('Sonar Analysis') {
      steps {
        sh 'echo Sonar Analysis'
      }
    }
    stage('Integration-Test') {
      parallel {
        stage('Integration-Test') {
          steps {
            sh 'echo Integration Test'
          }
        }
        stage('Integration Test 2') {
          steps {
            sh 'echo "integration test 2"'
          }
        }
      }
    }
    stage('Prepare Release') {
      steps {
        sh 'echo prepare release'
      }
    }
    stage('Build Docker Image') {
      agent {
        docker {
          image 'maven:3.3.3-jdk-8'
          args '-v /data:/data'
        }

      }
      steps {
        sh 'mvn -version'
      }
    }
    stage('Test Docker Image') {
      steps {
        sh 'echo test docker image'
      }
    }
    stage('Public Docker Image') {
      steps {
        sh 'echo publish docker image'
      }
    }
  }
}