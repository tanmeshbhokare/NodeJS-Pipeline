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
    }
}