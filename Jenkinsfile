pipeline {

    agent {
        // label "" also could have been 'agent any' - that has the same meaning.
        label "master"
    }
    environment {
        // GLobal Vars
        APP_NAME = "lxp"
        JENKINS_TAG = "master"
    }

    // The options directive is for configuration that applies to the whole job.
    options {
        buildDiscarder(logRotator(numToKeepStr: '50', artifactNumToKeepStr: '2'))
        timeout(time: 15, unit: 'MINUTES')
        ansiColor('xterm')
    }

    stages {

        stage("system tests") {
            agent {
                node {
                    label "jenkins-slave-npm"
                }
            }
            steps {
                echo '### set env to test against ###'
                script {
                    // TODO - Check if i can just use Zalenium service route....?
                    env.E2E_TEST_ROUTE = "oc get route/${APP_NAME} --template='{{.spec.host}}' -n ${PROJECT_NAMESPACE}".execute().text.minus("'").minus("'")
                }

                echo '### checkout correct revision ###'
                sh 'git checkout ${JENKINS_TAG}'

                echo '### Install deps ###'
                sh 'npm install'

                echo '### Seed the api ###'
                // sh './seed-backend.sh'

                echo '### Running systems tests ###'
                sh 'npm run e2e:system'
            }
            post {
                always {
                    archiveArtifacts "**"
                    junit 'reports/e2e/*.xml'
                    // publish html
                    publishHTML target: [
                        allowMissing: true,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: 'reports/e2e',
                        reportFiles: 'chrome-*.html,firefox-*.html',
                        reportName: 'E2E Test Reports'
                    ]
                }
            }
        }
    }
}
