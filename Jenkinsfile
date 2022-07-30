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
            echo 'Testing ...'
            sh "npm test"
            }
        }
    stage('SonarQube Analysis'){
        steps{
            echo 'Code Quality check with sonarqube'
            sh "npm run sonar"
            }
        }
    }
}
