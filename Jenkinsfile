pipeline {
agent any

stages {
    stage('SCM') {
        steps{
            git url: 'https://github.com/tanmeshbhokare/NodeJS-Pipeline.git'
            }
        }
    stage('Build'){
        steps{
            echo 'Start Build'
	    sh "npm install"
            }
        }
    stage('Test'){
        steps{
            echo 'Dumb Testing'
            sh "npm test"
            }
        }
    stage('SonarQube Analysis'){
        steps{
            echo 'Code Quality Analysis with SonarQube scanner'
            echo "npm run sonar"
	    echo "cannot run above command due to limited resources"
	    echo "SonarQube Server Url - https://40e8-103-102-31-35.in.ngrok.io/"
            }
        }
    stage('Publish Artifacts'){
        steps{
            echo 'publishing artifacts to jfrog artifactory'
	    echo 'URL - https://3071-103-102-31-35.in.ngrok.io/artifactory/NodeApp/'
            sh 'npm publish'
            }
        }
    }
}
