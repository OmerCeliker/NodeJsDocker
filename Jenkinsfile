pipeline {
  agent any
  stages {
    stage('Stage1') {
      steps {
        sh 'echo "NodeJsDocker" pipeline'
      }
    }
    stage('Stage2') {
      steps {
        pwd(tmp: true)
      }
    }
  }
}