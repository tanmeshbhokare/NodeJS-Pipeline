pipeline {
agent any

stages {
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
    stage('Deploy to Web Server'){
        steps{
	    withCredentials([sshUserPrivateKey(credentialsId: "jenkins-ssh", keyFileVariable: 'sshkey')])
		{
            	   echo 'deploying the software'
 		   
		   sh '''#!/bin/bash
 		   echo "Creating .ssh"
 		   mkdir -p /var/lib/jenkins/.ssh
 		   ssh-keyscan 10.200.0.187 >> /var/lib/jenkins/.ssh/known_hosts
 		   
 		   rsync -avz --exclude  '.git' --delete -e "ssh -i $sshkey" ./ ec2-user@10.200.0.187:/home/ec2-user/app/
 		   
		   ssh -i $sshkey ec2-user@10.200.0.187 "sudo systemctl restart nodeapp"
 		  '''            	
		}
            }
        }
    }
}
