cd ui.frontend
npm run prod
cd ..
cd ui.apps
mvn clean install -PautoInstallPackage -Padobe-public
echo pwd