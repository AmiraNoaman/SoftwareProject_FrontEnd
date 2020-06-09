pipeline {
environment {
registry = "amiranoaman1/firstrepo1"
registryCredential = 'dockerhub_id'
dockerImage = ''
        EMAIL_TO = 'amira.noaman21@gmail.com'

}
agent any
stages {
stage('Cloning our Git') {
steps {
git 'https://github.com/AmiraNoaman/SoftwareProject_FrontEnd.git'
}
}
stage('Building our image') {
steps{
script {
dockerImage = docker.build registry + ":$BUILD_NUMBER"
}
}
}
stage('Deploy our image') {
steps{
script {
docker.withRegistry( '', registryCredential ) {
dockerImage.push()
}
}
}
}
stage('Cleaning up') {
steps{
sh "docker rmi $registry:$BUILD_NUMBER"
}
}
}

post {
    failure {
        mail to: 'amira.noaman21@gmail.com',
             subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
             body: "Something is wrong with ${env.BUILD_URL}"
    }
}    
// post {
    //     failure {
    //         emailext body: 'Check console output at $BUILD_URL to view the results. \n\n ${CHANGES} \n\n -------------------------------------------------- \n${BUILD_LOG, maxLines=100, escapeHtml=false}', 
    //                 to: "${EMAIL_TO}", 
    //                 subject: 'Build failed in Jenkins: $PROJECT_NAME - #$BUILD_NUMBER'
    //     }
    //     unstable {
    //         emailext body: 'Check console output at $BUILD_URL to view the results. \n\n ${CHANGES} \n\n -------------------------------------------------- \n${BUILD_LOG, maxLines=100, escapeHtml=false}', 
    //                 to: "${EMAIL_TO}", 
    //                 subject: 'Unstable build in Jenkins: $PROJECT_NAME - #$BUILD_NUMBER'
    //     }
    //     changed {
    //         emailext body: 'Check console output at $BUILD_URL to view the results.', 
    //                 to: "${EMAIL_TO}", 
    //                 subject: 'Jenkins build is back to normal: $PROJECT_NAME - #$BUILD_NUMBER'
    //     }
    // }
}