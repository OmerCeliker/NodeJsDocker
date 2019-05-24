pipeline {
  agent none
  stages {
    stage('Build App') {
      steps {
        sh '''echo "NodeJsDocker" pipeline
'''
        build 'MvnBuildJob'
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
      steps {
        sh 'echo build docker image'
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